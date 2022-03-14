import CardNutriment from "./CardNutriment"

import "../styles/compenentStyle/ColumnNutriments.css"
import calories from "../assets/calories.png"
import protein from "../assets/protein.png"
import carbs from "../assets/carbs.png"
import fat from "../assets/fat.png"


export default function ColumnNutriments() {

    return(
        <div className="containerNutriments">
        <CardNutriment icon={calories} dataValue="1,930kCal"  text="Calories"/>
        <CardNutriment icon={protein} dataValue="155g" text="Proteines"/>
        <CardNutriment icon={carbs} dataValue="290g" text="Glucides"/>
        <CardNutriment icon={fat} dataValue="50g" text="Lipides"/>
        </div>
    )
}