import React from 'react';
import './SearchBox.css';

const SearchBox = ({onSiteChange, searchField, searchChange, site}) => {
    return (
        site === 'home' ?
        <div className = "sBox">
            <p className = "home" onClick = { () => onSiteChange('home') }>Home</p>
            <input 
                className = "box"
                type = 'search' 
                placeholder = 'Search Words'
                onChange = { searchChange }
                > 
            </input>
            <p className = "about" onClick = { () => onSiteChange('about') }>About</p>
        </div>
        :
        <div className = "sBoxA">
            <p className = "homeA" onClick = { () => onSiteChange('home') }>Home</p>
            <input 
                className = "boxA"
                type = 'search' 
                placeholder = 'Search Words'
                onChange = { searchChange }
                > 
            </input>
            <p className = "aboutA" onClick = { () => onSiteChange('about') }>About</p>
        </div>
    );
}

export default SearchBox;