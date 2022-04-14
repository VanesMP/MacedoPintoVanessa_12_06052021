import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip
} from "recharts";

import "../styles/compenentStyle/Activity.css"
import GetDataUsers from "../fetchData";


/*const data =[
  {
    day: "2020-07-01",
    kilogram: 80,
    calories: 240
  },
  {
        day: "2020-07-02",
        kilogram: 80,
        calories: 220
      },
    {
        day: "2020-07-03",
        kilogram: 81,
        calories: 280
      },
      {
        day: "2020-07-04",
        kilogram: 81,
        calories: 290
      },
      {
        day: "2020-07-05",
        kilogram: 80,
        calories: 160
      },
      {
        day: "2020-07-06",
        kilogram: 78,
        calories: 162
      },
      {
        day: "2020-07-07",
        kilogram: 76,
        calories: 390
      }
    ]*/
    

    //Formatter ticks x line
    const tranformDate = (tickItem) => {
      let newTickItem =new Date(tickItem)
      let newDay = newTickItem.getDate()
     return newDay
    }
    
  export default function Activity() { 

//     const [data, setDataUser] = useState(null);

//      useEffect(() => {
//      // GET request using fetch inside useEffect React hook
//      fetch('http://localhost:3000/user/12/activity')
//          .then(response => response.json())
//          .then(data => setDataUser(data));

//  // empty dependency array means this effect will only run once (like componentDidMount in classes)
//  }, []);

//  console.log({data})
    
    // /*const { id } = useParams()*/
const {data} = GetDataUsers('activity')
console.log({data})

    //customiser le tooltip
    const CustomTooltip = () => {
      return (
        <div className="customTooltip">
          {/* <p>{`${data?.data?.sessions?.kilogram}kg`}</p>
          <p>{`${data?.data?.sessions?.calories}Kcal`}</p> */}
        </div>
      );
    }
 
    return(
        <div className="containerActivity">
          <div className="containerTitle">
            <h2>Activité qutotidienne</h2>
            <div className="legend">
              <div className="poids"></div><p>Poids (kg)</p>
              <div className="calorie"></div><p>Calories brûlées (kCal)</p>
            </div>
          </div>
            <BarChart
            width={800}
            height={250}
            data={data?.data?.sessions}
            margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5
            }}>
            <CartesianGrid vertical={false} strokeDasharray="4 2" />
            <XAxis dataKey='day' tickFormatter={tranformDate} tickLine={false} dy={6} />
            <YAxis type="number" dataKey="kilogram" yAxisId="kg" domain={[kilogramMin => (kilogramMin - 1), kilogramMax => (kilogramMax +2)]} orientation="right" axisLine={false} tickLine={false} dx={8} />
            <YAxis hide type="number" dataKey="calories" yAxisId="kCal" domain={[caloriesMin => (caloriesMin - 100), caloriesMax => (caloriesMax + 100)]} />
            <Tooltip content={CustomTooltip}/>
            <Bar dataKey="kilogram" yAxisId="kg" fill="#282d30" barSize={10} radius={[5, 5, 0, 0]}/>
            <Bar dataKey="calories" yAxisId="kCal"  fill="#e60000" barSize={10} radius={[5, 5, 0, 0]}/>
            </BarChart>
        </div>
  );
}