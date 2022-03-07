import "../styles/compenentStyle/Duration.css";

import { 
    LineChart, 
    Line, 
    XAxis,
    ResponsiveContainer, 
    YAxis,
} from 'recharts';

    const data = [
        {
            day: 1,
            sessionLength: 30
        },
        {
            day: 2,
            sessionLength: 23
        },
        {
            day: 3,
            sessionLength: 45
        },
        {
            day: 4,
            sessionLength: 50
        },
        {
            day: 5,
            sessionLength: 0
        },
        {
            day: 6,
            sessionLength: 0
        },
        {
            day: 7,
            sessionLength: 60
        }
    ]

export default function Duration() {

    return(
        <div className="containerDuration">
            <h2 className="titleDuration">Durée moyenne des sessions</h2>
            <ResponsiveContainer width="100%" height="60%">
                <LineChart width={300} height={100} data={data}>
                <XAxis dataKey="day" axisLine={false} tickLine={false} dy={8} />
                <YAxis hide dataKey="sessionLength" domain={["sessionLengthMin", sessionLengthMax => (sessionLengthMax +10)]} />
                <Line type="monotone" dataKey="sessionLength" stroke="#8884d8" strokeWidth={2} />
                </LineChart>
            </ResponsiveContainer>
        </div>
    )
}