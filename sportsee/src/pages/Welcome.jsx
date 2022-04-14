// import { Link } from "react-router-dom"

import "../styles/pageStyle/Welcome.css"

import NavHorizontal from "../components/NavHorizontal"
import NavVertical from "../components/NavVertical"
import karl from "../assets/Karl.png"
import cecilia from "../assets/Cecilia.png"
import empty from "../assets/newOne.png"

const Welcome = ()=>{

  return(
        <div className="page">
        <NavHorizontal/>
        <div className="container">
        <NavVertical/>
        <div className="containerAll">
        <div className="titleWelcome">
            <h1 className="title">Bienvenue !</h1>
            <p className="text">Sélectionnez un profil ... </p>
        </div>
        <div className="containerCard">
            {/* <Link to="/user/12/"> */}
        <div className="infoUser">
        <div className="card">
        <img src={karl} alt="identity pictures" className="identity"/>
        <div className="infoUserText">
        <h2 className="name">Karl, Dovineau</h2>
        <p className="age">31 ans</p>
        </div>
        </div>
        </div>
            {/* </Link>
            <Link to="/user/18/"> */}
        <div className="infoUser">
        <div className="card">
        <img src={cecilia} alt="identity pictures" className="identity"/>
        <div className="infoUserText">
        <h2 className="name">Cecilia, Ratorez</h2>
        <p className="age">34 ans</p>
        </div>
        </div>
        </div>
            {/* </Link> */}
        <div className="card empty">
        <img src={empty} alt="identity pictures" className="identity"/>
        </div>
        </div>
        </div>
        </div>
        </div>
  )
}

export default Welcome;