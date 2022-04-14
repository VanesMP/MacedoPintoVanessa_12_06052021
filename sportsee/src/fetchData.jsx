/*import { useState, useEffect } from 'react'


nous allons les utiliser pour faire des calls API :

__useEffect  nous permettra de déclencher le fetch;

__useState  permettra de stocker le retour de l'API dans le  state  . 

*/

import { useState, useEffect } from 'react'
import { ManageEndpoints } from './manageEndpoints.jsx'

function GetDataUsers(category) {

   const [data, setDataUser] = useState(null);

   // data from api url/endpoints
   const url =  ManageEndpoints(category)

   useEffect(() => {
    //no url
    if(!url)
    return console.log('ERREUR')
    // GET request using fetch inside useEffect React hook
    async function dataUser(){
        const response = await fetch(url)
        const data = await response.json()
        return setDataUser(data)
    }
    dataUser()   
// empty dependency array means this effect will only run once (like componentDidMount in classes)
   }, [url]);

    console.log({data})
    return {data}
}

export default GetDataUsers;

