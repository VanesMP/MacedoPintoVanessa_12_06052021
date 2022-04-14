import "../styles/compenentStyle/Header.css"
import GetDataUsers from "../fetchData"
// import { useState, useEffect } from 'react'

/*const data = [{
            firstName: "Karl",
            lastName: "Dovineau",
            age: 31
        }
]*/

// function GetDataUser(){

// const [data, setDataUser] = useState(null)
// /*const { id } = useParams()*/
// const url = 'http://localhost:3000/user/12'

// useEffect(() => {
//     //no url
//     if(!url)
//     return console.log('ERREUR')
//     // GET request using fetch inside useEffect React hook
//     async function dataUser(){
//         const response = await fetch(url)
//         const data =await response.json()
//         setDataUser(data)
//     }
//     dataUser()   
// // empty dependency array means this effect will only run once (like componentDidMount in classes)
// }, [url]);

// console.log({data})
// return {data}
// }



function Header() {
    
    // /*const { id } = useParams()*/
const {data} = GetDataUsers('usersInfo')
console.log({data})

    return(
    <div className="containerHeader">    
    <h1 className="titleHello" key={data?.data?.userInfos?.firstName}>Bonjour <span style={{color: "red"}}>{data?.data?.userInfos?.firstName}</span></h1>     
    <p className="congrats">Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
    </div>
    )
}

export default Header;