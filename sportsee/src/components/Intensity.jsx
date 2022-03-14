import { Radar,
        RadarChart, 
        PolarGrid, 
        PolarAngleAxis, 
        PolarRadiusAxis, 
        ResponsiveContainer } from 'recharts';

import "../styles/compenentStyle/Intensity.css"

const data = [
    {
        kind: [{
        1: "cardio",
        2: "energy",
        3: "endurance",
        4: "strength",
        5: "speed",
        6: "intensity"
    }],
    datas: [{
            value: 80,
            kind: 1
        },
        {
            value: 120,
            kind: 2
        },
        {
            value: 140,
            kind: 3
        },
        {
            value: 50,
            kind: 4
        },
        {
            value: 200,
            kind: 5
        },
        {
            value: 90,
            kind: 6
        }]
    }
]

console.log(data)


export default function Intensity() {

    return(
        <div className="containerIntensity">
            <div className='containerChart'>
    <ResponsiveContainer width="90%" height="90%" >
    <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
    <PolarGrid />
    <PolarAngleAxis  />
    <PolarRadiusAxis  angle={30} domain={[0, 50]}/>
    <Radar dataKey="value" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
    </RadarChart>
</ResponsiveContainer>
            </div>
        </div>
    )
}
/**/