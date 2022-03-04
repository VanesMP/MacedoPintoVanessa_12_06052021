
import datas from "../src/datas/12/activity.json"


export default function Recupdata() {
    return (
        <div>
        {datas.data.map((user) => (
            console.log(user)
        ))
        }
        </div>
        )}