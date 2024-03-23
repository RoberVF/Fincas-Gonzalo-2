import {Link} from 'react-router-dom'

const HomePage = () => {
    return (
        <div>
            <p>HomePage Funcionando</p>
            <Link to="/createTask">CreateTask   </Link>
        </div>
        )
}

export default HomePage