import { Link } from "react-router-dom"
import PropTypes from 'prop-types'; // Importa PropTypes


function Card({name, parras, dimentions}) {
    return (
        <>
            <div className="bg-purple1 shadow w-full p-4 rounded-lg mx-auto bg-help-background">
                <h2 className="text-2xl font-bold">{name}</h2>
                {parras && <p>{parras}</p>}
                {dimentions && <p>{dimentions}</p>}
                <Link 
                    to={`/${name}`}
                    className="bg-purple rounded-lg mx-auto w-full p-3 mt-3 block text-md font-semibold">Ver datos</Link>
            </div>
        </>
    )
}

Card.propTypes = {
    name: PropTypes.string.isRequired,
    parras: PropTypes.number,
    dimentions: PropTypes.number
};

export default Card