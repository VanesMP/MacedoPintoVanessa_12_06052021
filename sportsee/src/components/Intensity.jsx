import { useParams } from "react-router";
import { Radar,
        RadarChart, 
        PolarGrid, 
        PolarAngleAxis, 
        PolarRadiusAxis, 
        ResponsiveContainer } from 'recharts'

import "../styles/compenentStyle/Intensity.css"
import {GetPerformance} from '../Getdata'

//Mock data
// const data = [
//    {
//             value: 80,
//             kind: 'cardio'
//         },
//         {
//             value: 120,
//             kind: 'energy'
//         },
//         {
//             value: 140,
//             kind: 'endurance'
//         },
//         {
//             value: 50,
//             kind: 'strength'
//         },
//         {
//             value: 200,
//             kind: 'speed'
//         },
//         {
//             value: 90,
//             kind: 'intensity'
//         }
// ]


export default function Intensity() {

    const tranformKind = (tickItem) => {
      const kinds = ['Intensité', 'Vitesse', 'Force', 'Endurance', 'Energie', 'Cardio']
      return kinds[tickItem -1]
    }

 //Get ID from URL 
const { id } = useParams()
//Get data name infosUser by fetch to Getdata.jsx
const {performance} = GetPerformance(id)
console.log({performance})
    
    
    return(
        <div className="containerIntensity">
            <div className='containerChart'>
    <ResponsiveContainer width="100%" height="90%" >
    <RadarChart outerRadius="80%" data={performance?.data?.data}>
    <PolarGrid />
    <PolarAngleAxis dataKey='kind' tickFormatter={tranformKind} tickLine={false}  stroke="#ffffff" />
    <PolarRadiusAxis tickCount={6} axisLine={false}  tick={false} dataKey='value'  domain={[0, 250]}/>
    <Radar dataKey="value" fill="#FF0101" fillOpacity={0.6} />
    </RadarChart>
    </ResponsiveContainer>
            </div>
        </div>
    )
}



