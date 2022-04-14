import { Radar,
        RadarChart, 
        PolarGrid, 
        PolarAngleAxis, 
        PolarRadiusAxis, 
        ResponsiveContainer } from 'recharts'

import "../styles/compenentStyle/Intensity.css"
import GetDataUsers from '../fetchData'

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

// const tranformKind = (tickItem) => {
//     return tickItem.replace(/^./, tickItem[0].toUpperCase());
//   }


  const tranformKind = (tickItem) => {
    const kinds = ['Intensité', 'Vitesse', 'Force', 'Endurance', 'Energie', 'Cardio']
    return kinds
  }


//   let kindsSort = [...data].reverse()
//   console.log(kindsSort)
  
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

    // /*const { id } = useParams()*/
const {data} = GetDataUsers('performance')
console.log({data})
    
    
    return(
        <div className="containerIntensity">
            <div className='containerChart'>
    <ResponsiveContainer width="100%" height="90%" >
    <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data?.data?.data}>
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

// 

export default Intensity;
