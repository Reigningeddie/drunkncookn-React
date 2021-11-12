import React, { useState, useEffect } from 'react';
import './navbar.css';

export default function Navbar(props) {
	// *toggle hamburger menu
	const [toggleMenu, setToggleMenu] = useState(false)
	// *Screen responsiveness
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
				<li onClick={() => props.changeAnimate(false)}className="items">Home</li>
				<li onClick={() => props.changeAnimate(true)}className="items">Synopsis</li>
				<li onClick={() => props.changeAnimate(true)}className="items">Characters</li>
				<li onClick={() => props.changeAnimate(true)}className="items">Menu</li>
				<li onClick={() => props.changeAnimate(true)}className="items">Media</li>
				<li onClick={() => props.changeAnimate(true)}className="items">Merch</li>
				<li onClick={() => props.changeAnimate(true)}className="items">Contacts</li>
			</ul>
			)}

			<button onClick={toggleNav} className="btn">BTN</button>
		</nav>
	)
}
