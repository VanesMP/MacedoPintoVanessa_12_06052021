import { Radar,
        RadarChart, 
        PolarGrid, 
        PolarAngleAxis, 
        PolarRadiusAxis, 
        ResponsiveContainer } from 'recharts';

import "../styles/compenentStyle/Intensity.css"

const data = [
   {
            value: 80,
            kind: 'cardio'
        },
        {
            value: 120,
            kind: 'energy'
        },
        {
            value: 140,
            kind: 'endurance'
        },
        {
            value: 50,
            kind: 'strength'
        },
        {
            value: 200,
            kind: 'speed'
        },
        {
            value: 90,
            kind: 'intensity'
        }
]

const tranformKind = (tickItem) => {
    return tickItem.replace(/^./, tickItem[0].toUpperCase());
  }

  let kindsSort = [...data].reverse()
  
 function Intensity() {

    
    return(
        <div className="containerIntensity">
            <div className='containerChart'>
    <ResponsiveContainer width="100%" height="90%" >
    <RadarChart cx="50%" cy="50%" outerRadius="80%" data={kindsSort}>
    <PolarGrid />
    <PolarAngleAxis dataKey='kind' tickFormatter={tranformKind} tickLine={false} cy={50} stroke="#ffffff" />
    <PolarRadiusAxis tickCount={6} axisLine={false}  tick={false} dataKey='value' domain={[0, valueMax => valueMax + 50]}/>
    <Radar dataKey="value"  fill="#FF0101" fillOpacity={0.6} />
    </RadarChart>
</ResponsiveContainer>
            </div>
        </div>
    )
}

export default Intensity;
