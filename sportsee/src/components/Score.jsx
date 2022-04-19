import { useParams } from "react-router";
import "../styles/compenentStyle/Score.css"
import {GetInfos} from "../Getdata";

import {  RadialBarChart, RadialBar, ResponsiveContainer} from "recharts";



//Recuperer le nombre contenu dans le data
//le multiplier par 100 ( pour afficher le todayScore en pourcentage)


export default function Score() {
    
    // const data =[{
    //     todayScore: 0.12,
    //     keyData: {
    //         calorieCount: 1930,
    //         proteinCount: 155,
    //         carbohydrateCount: 290,
    //         lipidCount: 50
    //     }
    // }]
    // console.log('xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx')
    // console.log(data[0].todayScore)

    // const data=[{
    //     todayScore: 0.12
    // }]
    // console.log(data[0].todayScore)

    // const score = data[0].todayScore
    // console.log(score)

    // const [data, setDataUser] = useState(null)
    // /*const { id } = useParams()*/

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

//  console.log(data?.data?.todayScore);


// let score = infosUser.data.todayScore
// console.log(score)
// let dataScore=[
//     {value:1, fill:'pink'},
//     {value:data[0].todayScore, fill:'#ff0000'}
// ]

//function pour récuperer le score des utilisateur nommé differemment dans la table.
    const ScoreData = () => {
        if(infosUser?.data.todayScore === undefined || infosUser?.data.todayScore === null){
            return `${infosUser?.data?.score * 100} %`
        } else {
            return `${infosUser?.data.todayScore * 100} %`
        }
    }
//function pour afficher la barre de progression de 0 à 1
    const ShowScore = () =>{
        if(infosUser?.data.todayScore === undefined || infosUser?.data.todayScore === null){
            return [{value:1, fill:'none'},
                    {value:infosUser?.data?.score, fill:'#ff0000'}]
        } else {
            return [{value:1, fill:'none'},
                    {value:infosUser?.data?.todayScore, fill:'#ff0000'}]
        }
    }
let test = ShowScore()
console.log(test)

    // const testScore = [{value:1, fill:'pink'},
    // {value:0.12, fill:'#ff0000'}]
    // console.log(testScore)

    
    return(
        <div className="containerScore">
            <h1 className="titleScore">Score</h1>
            <h2 className="objectif"><span className="score"><ScoreData/></span><br/>{`de votre`}<br/>{`objectif`}</h2>
            <div className="chart">
            <ResponsiveContainer width="100%" height="75%" >
            <RadialBarChart
            cx='50%'
            cy='50%'
            innerRadius={70}
            outerRadius={100}
            barSize={10}
            startAngle={90}
            endAngle={450}
            data={test}>
            <RadialBar cornerRadius={50}  dataKey='value' />
            {/* <PolarAngleAxis type="number" domain={[0, 1]}  tick={false} /> */}
            </RadialBarChart>
         </ResponsiveContainer>
        </div>
        </div>
    )
}

