import { useParams } from "react-router";
import PropTypes from 'prop-types';
import { Radar,
        RadarChart, 
        PolarGrid, 
        PolarAngleAxis, 
        PolarRadiusAxis, 
        ResponsiveContainer } from 'recharts'

import "../styles/compenentStyle/Intensity.css"
import {GetPerformance} from '../Getdata'

// Data before call api, using for implementation
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

  const tranformKind = (tickItem) => {
    const kinds = ['Intensité', 'Vitesse', 'Force', 'Endurance', 'Energie', 'Cardio']
    return kinds[tickItem -1]
  }

export default function Intensity() {

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
    <PolarRadiusAxis tickCount={6} axisLine={false}  tick={false} dataKey='value'/>
    <Radar dataKey="value" fill="#FF0101" fillOpacity={0.6} />
    </RadarChart>
    </ResponsiveContainer>
            </div>
        </div>
    )
}

 tranformKind.propTypes ={
    kinds: PropTypes.arrayOf(PropTypes.string)
 }


