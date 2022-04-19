
import NavHorizontal from '../components/NavHorizontal';
import NavVertical from '../components/NavVertical';
import Header from '../components/Header';
import Activity from '../components/Activity';
import Duration from '../components/Duration';
import Intensity from '../components/Intensity';
import Score from '../components/Score';
import ColumnNutriments from '../components/ColumnNutriments';

import '../styles/pageStyle/Dashboard.css'
//import { useEffect } from 'react';

/*const url = 'http://localhost:3000/user/:id'

fetch(url)
    .then(response => {
        console.log(response.json());
    })*/

function Dashboard() {

    return ( 
        <div className='dashboard'>
            <NavHorizontal />
            <div className='containerCharts'>
            <NavVertical />
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
            </div>
        </div>
    );
}

export default Dashboard;

// fetch("/datas/12")
//.then((response) => console.log(response.json()));