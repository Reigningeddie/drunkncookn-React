import React, { useState, useEffect } from 'react';
import nav from './navbar.module.css';
import { Link } from 'react-router-dom';

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
		<nav className={nav.nav}>
			{(toggleMenu || screenWidth > 500) && (
			<ul className={nav.list}>
				<Link to="/drunkncookn-React" onClick={() => props.changeAnimate(false)}
					className={nav.items}>Home</Link>
				<Link to="/synopsis" onClick={() => props.changeAnimate(true)}
					className={nav.items}>Synopsis</Link>
				<Link to="/characters" onClick={() => props.changeAnimate(true)}
					className={nav.items}>Characters</Link>
				<Link to="/menu" onClick={() => props.changeAnimate(true)}
					className={nav.items}>Menu</Link>
				<Link to="/media" onClick={() => props.changeAnimate(true)}
					className={nav.items}>Media</Link>
				<Link to="/credits" onClick={() => props.changeAnimate(true)}
					className={nav.items}>Credits</Link>
				<Link to="/merch" onClick={() => props.changeAnimate(true)}
					className={nav.items}>Merch</Link>
				<Link to="/contacts" onClick={() => props.changeAnimate(true)}
					className={nav.items}>Contacts</Link>
			</ul>
			)}

			<button onClick={toggleNav} className={nav.btn}>BTN</button>
		</nav>
	)
}
