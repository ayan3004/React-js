import React from 'react';


const Sidebar = () => {
    return (
        <div className="sidebar">
            <a className="sidebar-item" href="/">
                <i className="fas fa-bars"></i>
            </a>
            <a className="sidebar-item" href="/">
                <i className="fas fa-home"></i>
                <span>Home</span>
            </a>
            <a className="sidebar-item" href="/">
                <i className="fas fa-film"></i>
                <span>Shorts</span>
            </a>
            <a className="sidebar-item" href="/">
                <i className="fas fa-play"></i>
                <span>Subscriptions</span>
            </a>
            <a className="sidebar-item" href="/">
            <i class="fa-regular fa-circle-user"></i>
                <span>You</span>
            </a>
        </div>
    );
}

export default Sidebar;
