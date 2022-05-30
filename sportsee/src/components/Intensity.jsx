import { useParams } from "react-router";
import PropTypes from 'prop-types';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts'
import "../styles/compenentStyle/Intensity.css"
import {GetPerformance} from '../Getdata'

// Mock data
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
  
/** Formatter ticks: format kind (french version) on PolarAngleAxis
*  @function transfomDay
*  @param {string} tickItem
*  @returns {string} days
*/
const tranformKind = (tickItem) => {
  const kinds = ['Intensité', 'Vitesse', 'Force', 'Endurance', 'Energie', 'Cardio']
  return kinds[tickItem -1]
}

/** Render user performance data
 *  @function Intensity
 *  @returns {JSX}
 */  
export default function Intensity() {

    //Get ID from URL 
    const { id } = useParams()

    /**Get data name performance by fetch to Getdata.jsx
     * @function GetPerformance
     * @param {string} id (id of the user)
     * @returns @param {object} performance (data user)
     */
    const {performance} = GetPerformance(id)
        
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

 tranformKind.propTypes ={
    kinds: PropTypes.arrayOf(PropTypes.string)
 }


