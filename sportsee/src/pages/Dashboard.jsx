
import NavHorizontal from '../components/NavHorizontal';
import NavVertical from '../components/NavVertical';
import Header from '../components/Header';
import Activity from '../components/Activity';
import Duration from '../components/Duration';
import Intensity from '../components/Intensity';
import Score from '../components/Score';
import ColumnNutriments from '../components/ColumnNutriments';

import '../styles/pageStyle/Dashboard.css';

/** Render of user sports statistics analysis dashboard page
 * @function Dashboard
 * @returns {JSX}
 */
export default function Dashboard() {

    return ( 
        <div className='dashboard'>
            <NavHorizontal />
            <div className='containerCharts'>
            <NavVertical />
            <div className='containerSessionNutriment'>
            <div className='containerSession'>
            <Header />
            <Activity />      
                <div className='charts'>
                <Duration />
                <Intensity />
                <Score />
                </div>
            </div>
            <ColumnNutriments />
            </div></div>
        </div>
    );
}
