import React from 'react';
import './title.css';

export default function Title(props) {
    let animate = props.animateUp ? 'neon-title animateUp' : 'neon-title'
    return (
        <container className='title'>
            <h1 className={animate}>Drunkn'Cookn</h1>
        </container>
    )
}