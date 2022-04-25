import { useParams } from "react-router";
import "../styles/compenentStyle/ColumnNutriments.css"
import CardNutriment from "./CardNutriment"
import calories from "../assets/calories.png"
import protein from "../assets/protein.png"
import carbs from "../assets/carbs.png"
import fat from "../assets/fat.png"
import {GetInfos} from "../Getdata"

/** Rendering user nutriments data
 *  @function ColumnNutriments
 *  @returns {JSX}
 */
export default function ColumnNutriments() {

//Get ID from URL  
const { id } = useParams()

/**Get data name keydata by fetch to Getdata.jsx
 * @function GetInfos
 * @param {string} id (id of the user)
 * @returns @param {object} infosUser (data user)
 */
const {infosUser} = GetInfos(id)
console.log({infosUser})

    return(
        <div className="containerNutriments">
        <CardNutriment icon={calories} dataValue={infosUser?.data?.keyData?.calorieCount + 'Cal'}   text="Calories"/> 
        <CardNutriment icon={protein} dataValue={infosUser?.data?.keyData?.proteinCount + 'g'} text="Proteines"/>
        <CardNutriment icon={carbs} dataValue={infosUser?.data?.keyData?.carbohydrateCount + 'g'} text="Glucides"/>
        <CardNutriment icon={fat} dataValue={infosUser?.data?.keyData?.lipidCount + 'g'} text="Lipides"/>
        </div>
    )
}
