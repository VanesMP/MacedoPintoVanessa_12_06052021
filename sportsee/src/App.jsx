import NavHorizontal from './components/NavHorizontal';
import NavVertical from './components/NavVertical';
import Header from './components/Header';
import Activity from './components/Activity';
import Duration from './components/Duration';
import Intensity from './components/Intensity';
import Score from './components/Score';

import './App.css';


function App() {

    return ( 
        <div className='App'>
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
            </div>
        </div>
    );
}

export default App;

// fetch("/datas/12")
//.then((response) => console.log(response.json()));
