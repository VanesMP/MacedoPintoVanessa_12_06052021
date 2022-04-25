import { useParams } from "react-router";
import PropTypes from 'prop-types';
import "../styles/compenentStyle/Duration.css"
import {GetSession} from "../Getdata";

import { 
    LineChart, 
    Tooltip,
    Line, 
    XAxis,
    ResponsiveContainer, 
    YAxis,
} from 'recharts';

    // Data before the call api, using for implementation
    // const data = [
    //     {
    //         day: 1,
    //         sessionLength: 30
    //     },
    //     {
    //         day: 2,
    //         sessionLength: 23
    //     },
    //     {
    //         day: 3,
    //         sessionLength: 45
    //     },
    //     {
    //         day: 4,
    //         sessionLength: 50
    //     },
    //     {
    //         day: 5,
    //         sessionLength: 0
    //     },
    //     {
    //         day: 6,
    //         sessionLength: 0
    //     },
    //     {
    //         day: 7,
    //         sessionLength: 60
    //     }
    // ]

   /** Formatter ticks: format day on x line
    *  @function transfomDay
    *  @param {string} tickItem
    *  @returns {string} days
    */
      const tranformDay = (tickItem) => {
        const days =['L', 'M', 'M', 'J', 'V', 'S', 'D']
       return(days[tickItem - 1])
      }
      
   /**Custom Tooltip to display (min) on the hover on the LineChart
    * @function CustomTooltip
    * @param {bool} active (initial value false, if set true the tooltip is displayed)
    * @param {array} payload (data of the content to be displayed in the tooltip)
    * @returns {JSX}
    */
       const CustomTooltipLine = ({active, payload}) => {
         if (active && payload && payload.length){
        return <div className="customTooltipline">{`${payload[0].value} min`}</div>
        } else {
        return null
        }
      }

/** Rendering user session data
 *  @function Duration
 *  @returns {JSX}
 */
export default function Duration() {

 //Get ID from URL 
const { id } = useParams()

/**Get data name session by fetch to Getdata.jsx
 * @function GetSession
 * @param {string} id (id of the user)
 * @returns @param {object} session (data user: day, seesionLength)
 */
const {session} = GetSession(id)
console.log({session})

    return(
        <div className="containerDuration">
            <h2 className="titleDuration">Durée moyenne des sessions</h2>
            <ResponsiveContainer width="100%" height="60%">
                <LineChart width={300} height={100} data={session?.data?.sessions}>
                <XAxis dataKey="day" tickFormatter={tranformDay} axisLine={false} tickLine={false} dy={8} padding={{ left: 10, right: 10 }} stroke='#ffffff' opacity={0.5} style={{fontSize:'12'}}/>
                <YAxis hide dataKey="sessionLength" domain={[sessionLengthMin => (sessionLengthMin - 10), sessionLengthMax => (sessionLengthMax +10)]} />
                <Tooltip content={<CustomTooltipLine/>}/>
                <Line type="natural" dataKey="sessionLength" stroke="#ffffff" dot={false} activeDot={{stroke:"white", strokeWidth:"6", strokeOpacity:"0.4", r: 4 }}/>
                </LineChart>
            </ResponsiveContainer>
        </div>
    )
}

CustomTooltipLine.propTypes ={
    active: PropTypes.bool,
    payload: PropTypes.array
  }

  tranformDay.propTypes ={
    days: PropTypes.string
  }
