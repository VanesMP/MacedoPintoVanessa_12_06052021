import React from "react";
import { useParams } from "react-router";
import PropTypes from 'prop-types';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip
} from "recharts";

import "../styles/compenentStyle/Activity.css"
import {GetActivity} from "../Getdata";


/*Data before call api, using for implementation
const data =[
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
    //customiser le tooltip
    const CustomTooltip = ({active, payload}) => {
      if(active && payload && payload.length){
      return (<div className="customTooltip">
          <p>{`${payload[0].value} kg`}</p>
          <p>{`${payload[1].value} Kcal`}</p>
        </div>)
      } else {
      return null
      }
    }
    
export default function Activity() { 
//Get ID from URL 
const { id } = useParams()
//Get data name activity by fetch to Getdata.jsx
const {activity} = GetActivity(id)
console.log({activity})

 
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
            data={activity?.data?.sessions}
            margin={{top: 5,right: 30,left: 20, bottom: 5}}>
            <CartesianGrid vertical={false} strokeDasharray="4 2" />
            <XAxis dataKey='day' tickFormatter={tranformDate} tickLine={false} dy={6} />
            <YAxis type="number" dataKey="kilogram" yAxisId="kg" domain={[kilogramMin => (kilogramMin - 1), kilogramMax => (kilogramMax +2)]} orientation="right" axisLine={false} tickLine={false} dx={8} />
            <YAxis hide type="number" dataKey="calories" yAxisId="kCal" domain={[caloriesMin => (caloriesMin - 100), caloriesMax => (caloriesMax + 100)]} />
            <Tooltip content={<CustomTooltip/>}/>
            <Bar dataKey="kilogram" yAxisId="kg" fill="#282d30" barSize={10} radius={[5, 5, 0, 0]}/>
            <Bar dataKey="calories" yAxisId="kCal"  fill="#e60000" barSize={10} radius={[5, 5, 0, 0]}/>
            </BarChart>
        </div>
  );
}

CustomTooltip.propTypes ={
  active: PropTypes.bool,
  payload: PropTypes.array
}




