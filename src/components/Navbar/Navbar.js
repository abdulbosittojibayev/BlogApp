import { useState, useEffect } from "react";
import { FaTimes, FaBars } from "react-icons/fa";
import "./Navbar.css";
import { useStateValue } from "../../context/reducer"


function Navbar() {
	const [state, dispatch] = useStateValue()
	let [open, setOpen] = useState(false);
	let [nav, setNav] = useState(false)

	useEffect(() => {
		window.addEventListener('scroll', () => {
			if (window.scrollY > 1) {
				setNav(true);
			} else {
				setNav(false);
			}
		});
	}, []);
	return (
		<header className={`container ${nav && "active1"}`}>
			<h2>LOGO</h2>
			<nav className={`nav ${open && "active"}`}>
				<button className="open close" onClick={() => setOpen(open = !open)}><FaTimes /></button>
				<a style={{ color: `${state.theme === true ? "#fff" : "#222"}` }} href="/#">Blog</a>
				<a style={{ color: `${state.theme === true ? "#fff" : "#222"}` }} href="/#">Project</a>
				<a style={{ color: `${state.theme === true ? "#fff" : "#222"}` }} href="/#">About</a>
				<a style={{ color: `${state.theme === true ? "#fff" : "#222"}` }} href="/#">Newsletter</a>
				<div className="toggle-switch">
					<label className="switch-label" onChange={() => dispatch({ type: "CHANGE_THEME" })}>
						<input type="checkbox" class="checkbox" />
						<span className="slider"></span>
					</label>
				</div>
			</nav>
			<button className="open" onClick={() => setOpen(open = !open)}><FaBars /></button>
		</header>
	);
}

export default Navbar;