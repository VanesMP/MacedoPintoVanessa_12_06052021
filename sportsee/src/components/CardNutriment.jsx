
import "../styles/compenentStyle/CardNutriment.css"
import PropTypes from 'prop-types';


/**Render of keydata (calorieCount, carbohydrateCount, lipidCount, proteinCount) on ColumnNutriments.jsx
 * @function CardNutriment
 * @param {any} icon (icon of the keydata value) 
 * @param {number} dataValue (data of the keydata) 
 * @param {string} text (name of the keydata) 
 * @returns {JSX}
 */
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

CardNutriment.propTypes = {
    icon: PropTypes.any,
    dataValue: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ]),
    text: PropTypes.string
}
