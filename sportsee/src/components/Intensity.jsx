import { useParams } from "react-router";
import { Radar,
        RadarChart, 
        PolarGrid, 
        PolarAngleAxis, 
        PolarRadiusAxis, 
        ResponsiveContainer } from 'recharts'

import "../styles/compenentStyle/Intensity.css"
import {GetPerformance} from '../Getdata'

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

 function Intensity() {

    // const [data, setDataUser] = useState(null)
    // /*const { id } = useParams()*/
   
    // useEffect(() => {
    //     // GET request using fetch inside useEffect React hook
    //     fetch('http://localhost:3000/user/12/performance')
    //         .then(response => response.json())
    //         .then(data => setDataUser(data));
   
    // // empty dependency array means this effect will only run once (like componentDidMount in classes)
    // }, []);
   
    // console.log(data)

const { id } = useParams()
const {performance} = GetPerformance(id)
console.log({performance})
    
    
    return(
        <div className="containerIntensity">
            <div className='containerChart'>
    <ResponsiveContainer width="100%" height="90%" >
    <RadarChart outerRadius="80%" data={performance?.data?.data}>
    <PolarGrid />
    <PolarAngleAxis dataKey='kind' tickFormatter={tranformKind} tickLine={false}  stroke="#ffffff" />
    <PolarRadiusAxis tickCount={6} axisLine={false}  tick={false} dataKey='value' domain={[0, valueMax => valueMax + 50]}/>
    <Radar dataKey="value"  fill="#FF0101" fillOpacity={0.6} />
    </RadarChart>
</ResponsiveContainer>
            </div>
        </div>
    )
}

// 

export default Intensity;
