import React from 'react';
import neon from './title.module.css';

export default function Title(props) {
    let animate = props.animateUp ? `${neon.neonTitle} ${neon.animateUp}` : `${neon.neonTitle}`
    
    return (
        <>
        <container className={`${neon.title}`}>
            <h1 className={animate}>Drunkn'Cookn</h1>
        </container>
        </>
    )
}