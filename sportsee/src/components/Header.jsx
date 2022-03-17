
import "../styles/compenentStyle/Header.css"


const data = [{
            firstName: "Karl",
            lastName: "Dovineau",
            age: 31
        }
]

function Header(){

    return(
    <div className="containerHeader">
        {data.map((user) => 
        <h1 className="titleHello" key={user.firstName}>Bonjour <span style={{color: "red"}}>{user.firstName}</span></h1>
        )}
        <p className="congrats">Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
    </div>
    )
}

export default Header;