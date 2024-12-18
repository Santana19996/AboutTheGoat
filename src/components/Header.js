import React from "react";
import "./Header.css";

function Header() {
    return (
        <header className="gothic-header">
            <div className="crescent-moon"></div> {/* Glowing Crescent Moon */}
            <div className="profile-container">
                <img
                    src="/profile.jpg"
                    alt="Profile"
                    className="profile-image"
                />
                <h1 className="header-title">I’m ¥oungJinsu ☾</h1>
                <p className="header-subtitle">
                    Vibe with me if you like <strong>Phonk</strong>, <strong>Suicideboys</strong>, or <strong>Ghostemane</strong>.
                </p>
            </div>
        </header>
    );
}

export default Header;
