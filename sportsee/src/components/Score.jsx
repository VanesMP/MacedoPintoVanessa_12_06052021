import "../styles/compenentStyle/Score.css"
import GetDataUsers from "../fetchData";

import { ResponsiveContainer, RadialBarChart, RadialBar, PolarAngleAxis} from "recharts";

// const data =[{
//     todayScore: 0.12,
//     keyData: {
//         calorieCount: 1930,
//         proteinCount: 155,
//         carbohydrateCount: 290,
//         lipidCount: 50
//     }
// }]

// console.log(data[0].todayScore)

//Recuperer le nombre contenu dans le data
//le multiplier par 100 ( pour afficher le todayScore en pourcentage)


export default function Score() {

    // const [data, setDataUser] = useState(null)
    // /*const { id } = useParams()*/

    // useEffect(() => {
    //     // GET request using fetch inside useEffect React hook
    //     fetch('http://localhost:3000/user/12')
    //         .then(response => response.json())
    //         .then(data => setDataUser(data));
   
    // // empty dependency array means this effect will only run once (like componentDidMount in classes)
    // }, []);
   
    // console.log({data})

    // /*const { id } = useParams()*/
const {data} = GetDataUsers('usersInfo')
console.log({data})
    

    return(
        <div className="containerScore">
            <h1 className="titleScore">Score</h1>
            <h2 className="objectif"><span className="score">{`${data?.data?.todayScore * 100} %`}</span><br/>{`de votre`}<br/>{`objectif`}</h2>
            <div className="chart">
            <ResponsiveContainer width="100%" height="75%" >
            <RadialBarChart
            cx='50%'
            cy='40%'
            innerRadius={70}
            outerRadius={100}
            barSize={10}
            startAngle={90}
            endAngle={450}
            data={data?.data}>
            <RadialBar cornerRadius={50} dataKey="todayScore" fill="#ff0000"/>
            <PolarAngleAxis type="number" domain={[0, 1]} tick={false} />
            </RadialBarChart>
            </ResponsiveContainer>
        </div>
        </div>
    )
}