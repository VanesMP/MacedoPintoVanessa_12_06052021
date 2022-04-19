import { useParams } from "react-router";

import "../styles/compenentStyle/ColumnNutriments.css"
import CardNutriment from "./CardNutriment"
import calories from "../assets/calories.png"
import protein from "../assets/protein.png"
import carbs from "../assets/carbs.png"
import fat from "../assets/fat.png"
import {GetInfos} from "../Getdata"


export default function ColumnNutriments() {
     
    // const [data, setDataUser] = useState(null);

    // useEffect(() => {
    //     // GET request using fetch inside useEffect React hook
    //     fetch('http://localhost:3000/user/12')
    //         .then(response => response.json())
    //         .then(data => setDataUser(data));
   
    // // empty dependency array means this effect will only run once (like componentDidMount in classes)
    // }, []);
   
    // console.log({data})

const { id } = useParams()
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