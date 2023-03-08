import { useSelector, useDispatch } from "react-redux";
import { changeState } from "../Redux/Slice";

const PlayerNumber = () => {

    const dispatch = useDispatch()

    const players = useSelector((state) => state.Randomizer.players)

    const handlePlayerNumber = (number) => {
        dispatch(changeState(["players", number]))
    }

    return(
        <div className='optionSubDiv'>
            <p>Select Number of Players</p>
            <div className='playersBtnDiv'>
                <button className={players === 1 ? "selected" : ""} onClick={() => handlePlayerNumber(1)}>1</button>
                <button className={players === 2 ? "selected" : ""} onClick={() => handlePlayerNumber(2)}>2</button>
                <button className={players === 3 ? "selected" : ""} onClick={() => handlePlayerNumber(3)}>3</button>
                <button className={players === 4 ? "selected" : ""} onClick={() => handlePlayerNumber(4)}>4</button>
                <button className={players === 5 ? "selected" : ""} onClick={() => handlePlayerNumber(5)}>5</button>
                <button className={players === 6 ? "selected" : ""} onClick={() => handlePlayerNumber(6)}>6</button>
                <button className={players === 7 ? "selected" : ""} onClick={() => handlePlayerNumber(7)}>7</button>
            </div>
        </div>
    )

}

export default PlayerNumber;