
import '../styles/NavMenu.css';
import '../images/paws_logo.jpg'

export default function NavMenu() {
  return (
       <header>
          <ul className="navbar">
          <td>
            <img src="paws_logo.jpg" alt="UWM Paws"></img>
          </td>
          <td>
            <ul className='pagelinks'>
              hi
            </ul>
          </td>
          </ul>
       </header>
    );
  }

  /*
  <Navbar className="navbar-expand-sm navbar-toggleable-sm ng-white border-bottom" container light>
          <NavbarBrand tag={Link} to="/"><img src="../PAWsRenovation/images/uwm_word_logo.png" alt="pawsimage"></img></NavbarBrand>
          <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
          <Collapse className="d-sm-inline-flex flex-sm-row-reverse" isOpen={!this.state.collapsed} navbar>
            <ul className="navbar-nav flex-grow">
              <NavItem>
                <NavLink tag={Link} className="text-dark" to="/home">Home</NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={Link} className="text-dark" to="/academics">Academics</NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={Link} className="text-dark" to="/finances">Finances</NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={Link} className="text-dark" to="/profile">My Account</NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={Link} className="text-dark" to="/schedule">Schedule</NavLink>
              </NavItem>
            </ul>
          </Collapse>
        </Navbar> */