/*import { useState, useEffect } from 'react'


nous allons les utiliser pour faire des calls API :

__useEffect  nous permettra de déclencher le fetch;

__useState  permettra de stocker le retour de l'API dans le  state  . 

*/

import { useState, useEffect } from 'react'
// import { ManageEndpoints } from './manageEndpoints.jsx'

// export default function GetDataUsers() {

export const GetInfos = (id) => {
  const [infosUser, setInfosUser] = useState(null);

  useEffect(() => {
    // GET request using fetch inside useEffect React hook
    fetch(`http://localhost:3000/user/${id}/`)
        .then(response => response.json())
        .then(infosUser => setInfosUser(infosUser));

// empty dependency array means this effect will only run once (like componentDidMount in classes)
}, [id]); 
console.log({infosUser})
return { infosUser:infosUser }
}

export const GetSession = (id) => {

  const [session, setSession] = useState(null);

  useEffect(() => {
    // GET request using fetch inside useEffect React hook
    fetch(`http://localhost:3000/user/${id}/average-sessions/`)
        .then(response => response.json())
        .then(session => setSession(session));

// empty dependency array means this effect will only run once (like componentDidMount in classes)
}, [id]); 
console.log({session})
return { session:session }
}

export const GetActivity = (id) => {
const [activity, setActivity] = useState(null);

  useEffect(() => {
    // GET request using fetch inside useEffect React hook
    fetch(`http://localhost:3000/user/${id}/activity/`)
        .then(response => response.json())
        .then(activity => setActivity(activity));

// empty dependency array means this effect will only run once (like componentDidMount in classes)
}, [id]); 
console.log({activity})
return { activity:activity }
}

export const GetPerformance = (id) => {
const [performance, setPerformance] = useState(null);

  useEffect(() => {
    // GET request using fetch inside useEffect React hook
    fetch(`http://localhost:3000/user/${id}/performance/`)
        .then(response => response.json())
        .then(performance => setPerformance(performance));

// empty dependency array means this effect will only run once (like componentDidMount in classes)
}, [id]); 
console.log({performance})
return { performance:performance }
}

// export {GetActivity, GetPerformance, GetSession, GetInfos }





//    const [data, setDataUser] = useState({});
// //    const [error, setError] = useState(false)

//    // data from api url/endpoints
//    const url =  ManageEndpoints(category)

//    useEffect(() => {
//     //no url
//     // if(!url)
//     // return console.log('ERREUR')
//     // GET request using fetch inside useEffect React hook
//     async function dataUser(){
//     //   try{  
//         const response = await fetch(url)
//         const data = await response.json()
//         setDataUser(data)
//         console.log('-------------------', data)
//     // } catch(error){
//     //     console.log(error)
//     //     setError(true)
//     // }
//     }
//     dataUser()   
// // empty dependency array means this effect will only run once (like componentDidMount in classes)
//    }, [url])

//     console.log({data})
//     return {data}



