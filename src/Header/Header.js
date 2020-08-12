import React from 'react';
import './Header.css';

const Header = ({ country }) => {
    return (
        <header>
            <nav className="navbar">
                <div className="brand">
                    News
                </div>
                <div className="">
                    <select className="form-select" id="country" name="country" onChange={(e) => country(e.target.value)}>
                        <option value="us">USA</option>
                        <option value="cn">China</option>
                        <option value="ca">Canada</option>
                        <option value="fr">France</option>
                        <option value="de">Germany</option>
                        <option value="it">Italy</option>
                        <option value="pt">Portugal</option>
                        <option value="za">South Africa</option>
                        <option value="gb">UK</option>
                    </select>
                </div>
            </nav>
        </header>
    )
}

export default Header;