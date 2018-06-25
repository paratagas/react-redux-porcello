import { Link, Route, Redirect, Switch } from 'react-router-dom'
import { MainMenu, AboutMenu, AboutMenuLocation, EventMenu } from './menus'
import './stylesheets/pages.scss'

const PageTemplate = ({children}) =>
    <div className="page">
        <MainMenu />
        {children}
    </div>

export const Home = () =>
    <div className="home">
        <h1>[Company Website]</h1>
        <nav>
            <Link to="about">[About]</Link>
            <Link to="events">[Events]</Link>
            <Link to="products">[Products]</Link>
            <Link to="contact">[Contact Us]</Link>
        </nav>
    </div>

export const About = () =>
    <PageTemplate>
        <section className="about">
            <Route component={AboutMenu} />
            <Route exact path="/about" component={Company}/>
            <Route path="/about/history" component={History}/>
            <Route path="/about/services" component={Services}/>
            <Route path="/about/location" component={Location}/>
        </section>
    </PageTemplate>

export const Events = ({ match }) =>
    <PageTemplate>
      <section className="events">
        <Route component={EventMenu} />
        <Route exact path="/events/choose/:day" component={ChooseDay}/>
        <Route exact path="/events" component={Today}/>
        <Route path="/events/later" component={Later}/>
      </section>
    </PageTemplate>

export const Products = () =>
    <PageTemplate>
        <section className="products">
            <h1>[Product Catalog]</h1>
        </section>
    </PageTemplate>

export const Contact = () =>
    <PageTemplate>
        <section className="contact">
            <h1>[Contact Us]</h1>
        </section>
    </PageTemplate>

export const Whoops404 = ({ location }) => {
    console.log(location);
    return (
        <div className="whoops-404">
            <h1>Resource not found at '{location.pathname}'</h1>
        </div>
    );
}

export const Services = () =>
    <section className="services">
        <h2>Our Services</h2>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero.
            Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum.
            Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla.
            Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur
            sodales ligula in libero.
        </p>
        <p>
            Sed dignissim lacinia nunc. Curabitur tortor. Pellentesque nibh. Aenean quam.
            In scelerisque sem at dolor. Maecenas mattis. Sed convallis tristique sem. Proin ut ligula vel
            nunc egestas porttitor. Morbi lectus risus, iaculis vel, suscipit quis, luctus non, massa. Fusce ac turpis
            quis ligula lacinia aliquet. Mauris ipsum. Nulla metus metus, ullamcorper vel, tincidunt sed, euismod in,
            nibh. Quisque volutpat condimentum velit. Class aptent taciti sociosqu ad litora torquent per conubia
            nostra, per inceptos himenaeos.
        </p>
    </section>

export const Location = () =>
    <section className="location">
        <Route component={AboutMenuLocation} />
        <Redirect from="/about/location/wrong-url" to="/about/location/abroad" />
        <Route exact path="/about/location" component={LocationHere}/>
        <Route path="/about/location/abroad" component={LocationAbroad}/>
    </section>

export const LocationHere = () =>
    <section className="location-here">
        <h2>Location here</h2>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero.
            Sed cursus ante dapibus diam.
        </p>
        <p>
            Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum.
            Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla.
            Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur
            sodales ligula in libero.
        </p>
        <p>
            Sed dignissim lacinia nunc. Curabitur tortor. Pellentesque nibh. Aenean quam.
            In scelerisque sem at dolor. Maecenas mattis. Sed convallis tristique sem. Proin ut ligula vel
            nunc egestas porttitor. Morbi lectus risus, iaculis vel, suscipit quis, luctus non, massa. Fusce ac turpis
            quis ligula lacinia aliquet. Mauris ipsum. Nulla metus metus, ullamcorper vel, tincidunt sed, euismod in,
            nibh. Quisque volutpat condimentum velit. Class aptent taciti sociosqu ad litora torquent per conubia
            nostra, per inceptos himenaeos.
        </p>
    </section>

export const LocationAbroad = () =>
    <section className="location-abroad">
        <h2>Location abroad</h2>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero.
            Sed cursus ante dapibus diam.
        </p>
        <p>
            Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum.
            Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla.
            Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur
            sodales ligula in libero.
        </p>
        <p>
            Sed dignissim lacinia nunc. Curabitur tortor. Pellentesque nibh. Aenean quam.
            In scelerisque sem at dolor. Maecenas mattis. Sed convallis tristique sem. Proin ut ligula vel
            nunc egestas porttitor. Morbi lectus risus, iaculis vel, suscipit quis, luctus non, massa. Fusce ac turpis
            quis ligula lacinia aliquet. Mauris ipsum. Nulla metus metus, ullamcorper vel, tincidunt sed, euismod in,
            nibh. Quisque volutpat condimentum velit. Class aptent taciti sociosqu ad litora torquent per conubia
            nostra, per inceptos himenaeos.
        </p>
    </section>

export const Company = () =>
    <section className="company">
        <h2>About the Company</h2>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero.
            Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum.
            Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla.
            Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur
            sodales ligula in libero.
        </p>
        <p>
            Sed dignissim lacinia nunc. Curabitur tortor. Pellentesque nibh. Aenean quam.
            In scelerisque sem at dolor. Maecenas mattis. Sed convallis tristique sem. Proin ut ligula vel
            nunc egestas porttitor. Morbi lectus risus, iaculis vel, suscipit quis, luctus non, massa. Fusce ac turpis
            quis ligula lacinia aliquet. Mauris ipsum. Nulla metus metus, ullamcorper vel, tincidunt sed, euismod in,
            nibh. Quisque volutpat condimentum velit. Class aptent taciti sociosqu ad litora torquent per conubia
            nostra, per inceptos himenaeos.
        </p>
    </section>

export const History = () =>
    <section className="history">
        <h2>Our History</h2>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero.
            Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum.
            Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla.
            Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur
            sodales ligula in libero.
        </p>
        <p>
            Sed dignissim lacinia nunc. Curabitur tortor. Pellentesque nibh. Aenean quam.
            In scelerisque sem at dolor. Maecenas mattis. Sed convallis tristique sem. Proin ut ligula vel
            nunc egestas porttitor.
        </p>
        <p> Morbi lectus risus, iaculis vel, suscipit quis, luctus non, massa. Fusce ac turpis
            quis ligula lacinia aliquet. Mauris ipsum. Nulla metus metus, ullamcorper vel, tincidunt sed, euismod in,
            nibh. Quisque volutpat condimentum velit. Class aptent taciti sociosqu ad litora torquent per conubia
            nostra, per inceptos himenaeos.
        </p>
    </section>

export const Today = ({ match }) =>
    <section className="today">
        <h2>Today events</h2>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero.
            Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum.
            Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla.
            Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur
            sodales ligula in libero.
        </p>
        <p>
            Sed dignissim lacinia nunc. Curabitur tortor. Pellentesque nibh. Aenean quam.
            In scelerisque sem at dolor. Maecenas mattis. Sed convallis tristique sem. Proin ut ligula vel
            nunc egestas porttitor.
        </p>
        <p> Morbi lectus risus, iaculis vel, suscipit quis, luctus non, massa. Fusce ac turpis
            quis ligula lacinia aliquet. Mauris ipsum. Nulla metus metus, ullamcorper vel, tincidunt sed, euismod in,
            nibh. Quisque volutpat condimentum velit. Class aptent taciti sociosqu ad litora torquent per conubia
            nostra, per inceptos himenaeos.
        </p>
    </section>

export const ChooseDay = ({ match, location, history }) => {
// export const ChooseDay = ({ ...params }) => {
    // https://gyazo.com/61a75f2d246cefb28b02ad5bb3516fbb
    // console.log(params);
    console.group('match: ');
    console.log(match);
    console.groupEnd();
    console.group('location: ');
    console.log(location);
    console.groupEnd();
    console.group('history: ');
    console.log(history);
    console.groupEnd();
    return (
        <section className="choose-day">
            <h2>Choose day</h2>
            <p> Chosen day: </p>
            <p>{ match.params.day }</p>
        </section>
    );
}
    

export const Later = () =>
    <section className="later">
        <h2>Later events</h2>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero.
            Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum.
            Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla.
            Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur
            sodales ligula in libero.
        </p>
        <p>
            Sed dignissim lacinia nunc. Curabitur tortor. Pellentesque nibh. Aenean quam.
            In scelerisque sem at dolor. Maecenas mattis. Sed convallis tristique sem. Proin ut ligula vel
            nunc egestas porttitor.
        </p>
        <p> Morbi lectus risus, iaculis vel, suscipit quis, luctus non, massa. Fusce ac turpis
            quis ligula lacinia aliquet. Mauris ipsum. Nulla metus metus, ullamcorper vel, tincidunt sed, euismod in,
            nibh. Quisque volutpat condimentum velit. Class aptent taciti sociosqu ad litora torquent per conubia
            nostra, per inceptos himenaeos.
        </p>
    </section>
