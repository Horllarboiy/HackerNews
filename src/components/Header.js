import React from 'react'
import { FaGithub } from "react-icons/fa";

function Header() {
    return (
        <div className="header">
            <div className="header_brand">Hacker News</div>
            <div className="header_link">
                <a className="header_icon" href="http://github.com/Horllarboiy">
                    <FaGithub />
                </a>
            </div>
        </div>
    )
}

export default Header
