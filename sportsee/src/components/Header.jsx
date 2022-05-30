import { useParams } from "react-router";
import "../styles/compenentStyle/Header.css"
import {GetInfos} from "../Getdata"

/*Mock data
const data = [{
            firstName: "Karl",
            lastName: "Dovineau",
            age: 31
        }
]*/

/** Rendering user informations data
 *  @function Header
 *  @returns {JSX}
 */
export default function Header() {
    
    //Get ID from URL    
    const { id } = useParams()

    /**Get data name infosUser by fetch to Getdata.jsx
     * @function GetInfos
     * @param {string} id (id of the user)
     * @returns @param {object} infosUser (data user)
     */
    const {infosUser} = GetInfos(id)

        return(
        <div className="containerHeader">    
        <h1 className="titleHello" key={infosUser?.data?.userInfos?.firstName}>Bonjour <span style={{color: "red"}}>{infosUser?.data?.userInfos?.firstName}</span></h1>     
        <p className="congrats">Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
        </div>
        )
}
