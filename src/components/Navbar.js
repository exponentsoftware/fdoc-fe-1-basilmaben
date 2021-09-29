import { FaBars } from 'react-icons/fa';
import logo from '../logo.svg';
import {
  Nav,
  NavbarContainer,
  NavLogo,
  NavBtn,
  NavBtnLink,
  NavBtnLink2,
} from './NavbarElements';

const Navbar = () => {

  return (
    <>
      <Nav>
        <NavbarContainer>
       <NavLogo to='/' ><img src={logo} alt="logo" style={{ height: "40px", width: "40px", margin: "0 10px 0 0" }}/>Spotify</NavLogo>
          <NavBtn>
            <NavBtnLink2 to='add'>Add Album</NavBtnLink2> 
            <NavBtnLink to='albums'>Albums</NavBtnLink>
          </NavBtn>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;
