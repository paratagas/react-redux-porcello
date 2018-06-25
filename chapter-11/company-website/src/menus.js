import HomeIcon from 'react-icons/lib/fa/home'
import { NavLink } from 'react-router-dom'
import './stylesheets/menus.scss'

const selectedStyle = {
    backgroundColor: "white",
    color: "slategray"
}

export const MainMenu = () =>
    <nav className="main-menu">
        <NavLink to="/"><HomeIcon/></NavLink>
        <NavLink to="/about" activeStyle={selectedStyle}>[About]</NavLink>
        <NavLink to="/events" activeStyle={selectedStyle}>[Events]</NavLink>
        <NavLink to="/products" activeStyle={selectedStyle}>[Products]</NavLink>
        <NavLink to="/contact" activeStyle={selectedStyle}>[Contact Us]</NavLink>
    </nav>

export const AboutMenu = ({ match }) =>
    <div className="about-menu">
        <li>
            <NavLink to="/about"
                  style={match.isExact && selectedStyle}>
                [Company]
            </NavLink>
        </li>
        <li>
            <NavLink to="/about/history"
                  activeStyle={selectedStyle}>
                [History]
            </NavLink>
        </li>
        <li>
            <NavLink to="/about/services"
                  activeStyle={selectedStyle}>
                [Services]
            </NavLink>
        </li>
        <li>
            <NavLink to="/about/location"
                  activeStyle={selectedStyle}>
                [Location]
            </NavLink>
        </li>
    </div>

export const AboutMenuLocation = ({ match }) =>
    <div className="about-menu-location">
        <li>
            <NavLink to="/about/location"
                  style={match.isExact && selectedStyle}>
                [Location - Here]
            </NavLink>
        </li>
        <li>
            <NavLink to="/about/location/abroad"
                  activeStyle={selectedStyle}>
                [Location - Abroad]
            </NavLink>
        </li>
    </div>

export const EventMenu = ({ match }) =>
    <div className="event-menu">
        <li>
            <NavLink to="/events"
                  style={match.isExact && selectedStyle}>
                [Today event]
            </NavLink>
        </li>
        <li>
            <NavLink to="/events/later"
                  activeStyle={selectedStyle}>
                [Going later]
            </NavLink>
        </li>
        <li>
            <NavLink to="/events/choose/birthday"
                  activeStyle={selectedStyle}>
                [Choose day]
            </NavLink>
        </li>
    </div>
