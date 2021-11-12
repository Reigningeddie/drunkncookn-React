import React, { useState, useEffect } from 'react';
import './navbar.css';

export default function Navbar(props) {
	// *toggle menu
	const [toggleMenu, setToggleMenu] = useState(false)
	const [screenWidth, setScreenWidth] = useState (window.innerWidth)
	// *toggles the animate function 

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
				<li onClick={() => props.changeToggle()}className="items">Home</li>
				<li onClick={() => props.changeToggle(true)}className="items">Synopsis</li>
				<li onClick={() => props.changeToggle(true)}className="items">Characters</li>
				<li onClick={() => props.changeToggle(true)}className="items">Menu</li>
				<li onClick={() => props.changeToggle(true)}className="items">Media</li>
				<li onClick={() => props.changeToggle(true)}className="items">Merch</li>
				<li onClick={() => props.changeToggle(true)}className="items">Contacts</li>
			</ul>
			)}

			<button onClick={toggleNav} className="btn">BTN</button>
		</nav>
	)
}
