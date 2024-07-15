import React, { useState } from 'react';

const Navbar = ({ onFormSubmit }) => {
    const [term, setTerm] = useState('');
    const [searchTerm, setSearchTerm] = useState('');

    const onInputChange = (event) => {
        setTerm(event.target.value);
    };

    const onSubmit = (event) => {
        event.preventDefault();
        console.log('Form submitted with term:', term); 
        onFormSubmit(term);
    };

    return (
        <nav className="navbar">
             <a className="navbar-brand" href="/">
                <img src="data:image/png;base64,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" alt="YouTube Logo" />
                YouTube
            </a>
            <form className="search-bar" onSubmit={onSubmit}>
                <input
                    type="search"
                    placeholder="Search"
                    aria-label="Search"
                    value={term}
                    onChange={onInputChange}
                />
                <button type="submit">
                    <i className="fas fa-search"></i>
                </button>
            </form>
            <div className="icons">
                <i className="fas fa-microphone icon"></i>
                <i className="fas fa-video icon"></i>
                <i className="fas fa-bell icon"></i>
                <i className="fas fa-user-circle icon"></i>
            </div>
        </nav>
    );
}

export default Navbar;
