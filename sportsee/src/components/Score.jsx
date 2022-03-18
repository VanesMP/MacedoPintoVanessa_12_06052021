import "../styles/compenentStyle/Score.css"

import { ResponsiveContainer, RadialBarChart, RadialBar} from "recharts";

const data =[{
    todayScore: 0.12
}]

console.log(data)

//Recuperer le nombre contenu dans le data
//le multiplier par 100 ( pour afficher le todayScore en pourcentage)


export default function Score() {

    return(
        <div className="containerScore">
            <h1 className="titleScore">Score</h1>
            <ResponsiveContainer width="100%" height="75%" >
            <RadialBarChart
            cx='50%'
            cy='40%'
            innerRadius={70}
            outerRadius={110}
            barSize={10}
            startAngle={90}
            endAngle={450}
            data={data}>
            <RadialBar cornerRadius={50} label={{position: "center", fill: "#282d30" }} dataKey='todayScore' fill="#ff0000" background="yellow"/>
            </RadialBarChart>
            </ResponsiveContainer>
        </div>
    )
}