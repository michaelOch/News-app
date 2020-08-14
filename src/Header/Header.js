import React from 'react';
import './Header.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const Header = ({ country, toggleFunction }) => {
    return (
        <header>
            <nav className="navbar">
                <div className="menu" onClick={ toggleFunction ? toggleFunction : null } >
                    <FontAwesomeIcon icon={faBars} style={{ color:"#ffffff", fontSize:"20px"}} />
                </div>
                <div className="brand">
                    News
                </div>
                <div className="">
                    <select className="form-select" id="country" name="country" onChange={(e) => country(e.target.value)}>
                        <option value="us">USA</option>
                        <option value="gb">UK</option>
                        <option value="ng">Nigeria</option>
                        <option value="cn">China</option>
                        <option value="ca">Canada</option>
                        <option value="fr">France</option>
                        <option value="de">Germany</option>
                        <option value="it">Italy</option>
                        <option value="pt">Portugal</option>
                        <option value="za">South Africa</option>
                    </select>
                </div>
            </nav>
        </header>
    )
}

export default Header;