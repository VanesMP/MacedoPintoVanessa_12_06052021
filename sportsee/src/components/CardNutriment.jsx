
import "../styles/compenentStyle/CardNutriment.css"

export default function CardNutriment({icon, dataValue, text}) {

    return(
        <div className="cardNutriment">
            <div className="nutriment">
            <div><img src={icon} alt="icon nutriment" className="icon" /></div>
            <div className="textNutriment">
                <p className="dataValue">{dataValue}</p>
                <p className="nutrimentText">{text}</p>
            </div>
            </div>
        </div>
    )
}