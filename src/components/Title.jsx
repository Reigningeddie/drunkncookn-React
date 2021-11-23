import React from 'react';
import titleCSS from './title.module.css';

export default function Title(props) {
    let animate = props.animateUp ? 'neon-title animateUp' : 'neon-title'
    return (
        <>
        <container className={titleCSS.title}>
            <h1 className={animate}>Drunkn'Cookn</h1>
        </container>
        </>
    )
}