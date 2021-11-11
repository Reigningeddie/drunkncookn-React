import React from 'react'
import './navbar.css'


export default function Navbar() {
	return (
		<nav>
			<ul className="list">
				<li className="items">Home</li>
				<li className="items">Summary</li>
				<li className="items">Contact</li>
			</ul>
			<button className="btn">BTN</button>
		</nav>
	)
}
