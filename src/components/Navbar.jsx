import React, { useState, useEffect } from 'react';
import './navbar.css';
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
		<nav>
			{(toggleMenu || screenWidth > 500) && (
			<ul className="list">
				<Link to="/" onClick={() => props.changeAnimate(false)}
					className="items">Home</Link>
				<Link to="/synopsis" onClick={() => props.changeAnimate(true)}
					className="items">Synopsis</Link>
				<Link to="/characters" onClick={() => props.changeAnimate(true)}
					className="items">Characters</Link>
				<Link onClick={() => props.changeAnimate(true)}
					className="items">Menu</Link>
				<Link onClick={() => props.changeAnimate(true)}
					className="items">Media</Link>
				<Link href="/credits" onClick={() => props.changeAnimate(true)}
					className="items">Credits</Link>
				<Link onClick={() => props.changeAnimate(true)}
					className="items">Merch</Link>
				<Link onClick={() => props.changeAnimate(true)}
					className="items">Contacts</Link>
			</ul>
			)}

			<button onClick={toggleNav} className="btn">BTN</button>
		</nav>
	)
}
