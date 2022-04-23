import { useParams } from "react-router";
import "../styles/compenentStyle/Score.css";
import {GetInfos} from "../Getdata";

import {  RadialBarChart, RadialBar, ResponsiveContainer} from "recharts";

//Mock data
// const data =[{
//     todayScore: 0.12,
//     keyData: {
//         calorieCount: 1930,
//         proteinCount: 155,
//         carbohydrateCount: 290,
//         lipidCount: 50
//     }
// }]

export default function Score() {
    
 //Get ID from URL 
const { id } = useParams()
//Get data name infosUser by fetch to Getdata.jsx
const {infosUser} = GetInfos(id)
console.log({infosUser})

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
    let radialScore = ShowScore()
    console.log(radialScore)
    
    return(
        <div className="containerScore">
            <h1 className="titleScore">Score</h1>
            <h2 className="objectif"> 
               <div className="scoreValue" ><span className="score"><ScoreData/></span><br/>{`de votre`}<br/>{`objectif`} </div>
            </h2>
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
            data={radialScore}>
            <RadialBar cornerRadius={50} dataKey='value' />
            </RadialBarChart>
         </ResponsiveContainer>
        </div>
        </div>
    )
}

