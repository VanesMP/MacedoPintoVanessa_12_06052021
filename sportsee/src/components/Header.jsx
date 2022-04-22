import { useParams } from "react-router";
import "../styles/compenentStyle/Header.css"
import {GetInfos} from "../Getdata"


/*Data before call api, using for implementation
const data = [{
            firstName: "Karl",
            lastName: "Dovineau",
            age: 31
        }
]*/

export default function Header() {
    
 //Get ID from URL    
const { id } = useParams()
//Get data name infosUser by fetch to Getdata.jsx
const {infosUser} = GetInfos(id)
console.log({infosUser})

    return(
    <div className="containerHeader">    
    <h1 className="titleHello" key={infosUser?.data?.userInfos?.firstName}>Bonjour <span style={{color: "red"}}>{infosUser?.data?.userInfos?.firstName}</span></h1>     
    <p className="congrats">Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
    </div>
    )
}
