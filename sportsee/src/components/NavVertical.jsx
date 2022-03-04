import "../styles/compenentStyle/NavVertical.css";
import yoga from "../assets/yoga.png";
import bike from "../assets/bike.png";
import swim from "../assets/swim.png";
import force from "../assets/force.png"

export default function NavVertical() {

    return(
        <div className="navVertical">
            <div className="containerNavVertical">
            <ul className="listIconactivity">
                <li className="iconNav"><img src={yoga} alt="icon activity yoga" /></li>
                <li className="iconNav"><img src={swim} alt="icon activity swim" /></li>
                <li className="iconNav"><img src={bike} alt="icon activity bike" /></li>
                <li className="iconNav"><img src={force} alt="icon activity force" /></li>
            </ul>
            <p className="copyright">Copiryght, SportSee 2020</p>
            </div>
        </div>
    )
}