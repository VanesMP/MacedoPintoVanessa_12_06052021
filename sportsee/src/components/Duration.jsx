import { useParams } from "react-router";
import "../styles/compenentStyle/Duration.css"
import {GetSession} from "../Getdata";

import { 
    LineChart, 
    Tooltip,
    Line, 
    XAxis,
    ResponsiveContainer, 
    YAxis,
} from 'recharts';

    // const data = [
    //     {
    //         day: 1,
    //         sessionLength: 30
    //     },
    //     {
    //         day: 2,
    //         sessionLength: 23
    //     },
    //     {
    //         day: 3,
    //         sessionLength: 45
    //     },
    //     {
    //         day: 4,
    //         sessionLength: 50
    //     },
    //     {
    //         day: 5,
    //         sessionLength: 0
    //     },
    //     {
    //         day: 6,
    //         sessionLength: 0
    //     },
    //     {
    //         day: 7,
    //         sessionLength: 60
    //     }
    // ]

      //Formatter ticks
      const tranformDay = (tickItem) => {
        const days =['L', 'M', 'M', 'J', 'V', 'S', 'D']
       return(days[tickItem - 1])
      }

export default function Duration() {

  
const { id } = useParams()
const {session} = GetSession(id)
console.log({session})


 //customiser le tooltip
 const CustomTooltipLine = () => {
  return (
    <div className="customTooltipline">
      <p>{`min`}</p>
    </div>
  );
}

    return(
        <div className="containerDuration">
            <h2 className="titleDuration">Durée moyenne des sessions</h2>
            <ResponsiveContainer width="100%" height="60%">
                <LineChart width={300} height={100} data={session?.data?.sessions}>
                <XAxis dataKey="day" tickFormatter={tranformDay} axisLine={false} tickLine={false} dy={8} padding={{ left: 10, right: 10 }} stroke='#ffffff' opacity={0.5} style={{fontSize:'12'}}/>
                <YAxis hide dataKey="sessionLength" domain={[sessionLengthMin => (sessionLengthMin - 10), sessionLengthMax => (sessionLengthMax +10)]} />
                <Tooltip content={CustomTooltipLine} />
                <Line type="natural"  dataKey="sessionLength" stroke="#ffffff" dot={false} activeDot={{stroke:"white", strokeWidth:"6", strokeOpacity:"0.4", r: 4 }}/>
                </LineChart>
            </ResponsiveContainer>
        </div>
    )
}