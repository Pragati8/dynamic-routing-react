import { useParams } from 'react-router-dom';

function User() {
    const {id, name} = useParams()
    console.log(id,name,  "id")
    return(
        <div>
            <h1>User Component{id}{name}</h1>
        </div>
    )
}

export default User;