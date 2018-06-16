const oneSecond = () => 1000
const getCurrentTime = () => new Date()

export const abstractClockTime = date =>
    ({
        hours: date.getHours(),
        minutes: date.getMinutes(),
        seconds: date.getSeconds()
    })

export const civilianHours = clockTime =>
    ({
        ...clockTime,
        hours: (clockTime.hours > 12) ?
        clockTime.hours - 12 :
            clockTime.hours
    })

export const appendAMPM = clockTime =>
    ({
        ...clockTime,
        ampm: (clockTime.hours >= 12) ? "pm" : "am"
    })

export const prependZero = key => clockTime =>
    ({
        ...clockTime,
        [key]: (clockTime[key] < 10) ?
        "0" + clockTime[key] :
            clockTime[key]
    })

export const compose = (...fns) =>
    (arg) =>
        fns.reduce(
            (composed, f) => f(composed),
            arg
        )
/*const f1 = (arg = 'default from f1') => {
  return arg + ' added by f1 ';
}
const f2 = (arg = '') => {
  return arg.toUpperCase();
}
const f3 = (arg = 'default from f3') => {
  return arg + ' added by f3';
}
const composer = (...func) => (arg) =>
  func.reduce(
    (aggr, f) => f(aggr),
    arg
  );
const result = composer(
  f1,
  f2,
  f3
// )('custom string');
)();
console.log(result);*/

export const convertToCivilianTime = clockTime =>
    compose(
        appendAMPM,
        civilianHours
    )(clockTime)

export const doubleDigits = civilianTime =>
    compose(
        prependZero("hours"),
        prependZero("minutes"),
        prependZero("seconds")
    )(civilianTime)

export const getClockTime = compose(
    getCurrentTime,
    abstractClockTime,
    convertToCivilianTime,
    appendAMPM,
    doubleDigits
)
