import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./Navbar.css";
import {useStateValue} from "../../context/reducer"


function Navbar() {
	const navRef = useRef();
  const [state, dispatch] = useStateValue()
	

	const showNavbar = () => {
		navRef.current.classList.toggle(
			"responsive_nav"
		);
	};

	return (
		<header>
			<h3>LOGO</h3>
			<nav  ref={navRef}>
				<a style={{color: `${state.theme === true ? "#fff" : "#222"}`}} href="/#">Blog</a>
				<a style={{color: `${state.theme === true ? "#fff" : "#222"}`}} href="/#">Project</a>
				<a style={{color: `${state.theme === true ? "#fff" : "#222"}`}} href="/#">About</a>
				<a style={{color: `${state.theme === true ? "#fff" : "#222"}`}} href="/#">Newsletter</a>
				<button
					className="nav-btn nav-close-btn"
					onClick={showNavbar}>
					<FaTimes />
				</button>
				<div class="toggle-switch">
          <label class="switch-label"  onChange={()=> dispatch({type: "CHANGE_THEME"})}>
            <input type="checkbox" class="checkbox" />
            <span class="slider"></span>
          </label>
        </div>
			</nav>
		</header>
	);
}

export default Navbar;