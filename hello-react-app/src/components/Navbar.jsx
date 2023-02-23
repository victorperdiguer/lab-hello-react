import ironhackLogo from "../images/ironhack-logo-xs.png"
import menuTop from "../images/menu-top-xs.png"

const Navbar = () => {
    return (
        <nav className="navbar">
            <div id="nav-logo-div" className="nav-logo">
                <img src={ironhackLogo} alt="Ironhack Logo" />
            </div>
            <div id="nav-menu-div" className="nav-menu">
                <img src={menuTop} alt="Menu" />
            </div>
        </nav>
    )
}

export default Navbar;