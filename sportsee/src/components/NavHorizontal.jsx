import React from "react";
import { Link } from "react-router-dom"
import "../styles/compenentStyle/NavHorizontal.css";
import logo from "../assets/logo.png";

/**
 * Render the horizontal navigation
 * @function NavHorizontal
 * @returns {JSX}
 */

export default function NavHorizontal() {

    return(
        <div className="nav">
            <div className="containerNav">
            <Link to="/">
            <img className="logo" src={logo} alt="entreprise logo" />
            </Link>
            <nav className="listNavElement">
                <p className="navElement">Accueil</p>
                <p className="navElement">Profil</p>
                <p className="navElement">Réglage</p>
                <p className="navElement">Communauté</p>
            </nav>
            </div>
        </div>
    )
}