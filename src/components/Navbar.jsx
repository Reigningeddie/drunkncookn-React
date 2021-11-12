import React, { useState, useEffect } from 'react';
import './navbar.css';

export default function Navbar() {
	// *toggle menu
	const [toggleMenu, setToggleMenu] = useState(false)
	const [screenWidth, setScreenWidth] = useState (window.innerWidth)

	const toggleNav = () => {
		setToggleMenu(!toggleMenu)
	}
	// *navbar responsiveness
	useEffect(() => {

		const changeWidth = () => {
			setScreenWidth(window.innerWidth);
		}

		window.addEventListener('resize', changeWidth)

		return () => {
			window.removeEventListener('resize', changeWidth)
		}

	}, [])


	return (
		<nav>
			{(toggleMenu || screenWidth > 500) && (
			<ul className="list">
				<li className="items">Home</li>
				<li className="items">Synopsis</li>
				<li className="items">Characters</li>
				<li className="items">Menu</li>
				<li className="items">Media</li>
				<li className="items">Merch</li>
				<li className="items">Contacts</li>
			</ul>
			)}

			<button onClick={toggleNav} className="btn">BTN</button>
		</nav>
	)
}
