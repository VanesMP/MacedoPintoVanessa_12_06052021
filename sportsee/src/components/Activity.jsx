import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip
} from "recharts";

//import data from ../datas/12/activity.json

import "../styles/compenentStyle/Activity.css"


export default function Activity() {  
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
    ]
    
    const xLineDays =[]
    data.forEach((el) => {
      xLineDays.push(el.day.substr(-1))
    })

console.log(xLineDays)

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
            data={data}
            margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5
            }}
            >
            <CartesianGrid vertical={false} strokeDasharray="4 2" />
            <XAxis dataKey="day" tickLine={false} dy={8}/>
            <YAxis axisLine={false} tickLine={false} dx={8} dataKey="kilogram" orientation="right"/>
            <Tooltip />
            <Bar dataKey="kilogram" fill="#282d30" barSize={10} radius={[5, 5, 0, 0]}/>
            <Bar dataKey="calories"  fill="#e60000" barSize={10} radius={[5, 5, 0, 0]}/>
            </BarChart>
        </div>
  );
}