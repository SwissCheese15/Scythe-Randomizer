import { useSelector, useDispatch } from "react-redux";
import { toggle } from "../Redux/Slice";

const Wind = () => {

    const dispatch = useDispatch()

    const wind = useSelector((state) => state.Randomizer.wind)

    const handleToggle = (bool) => {
        dispatch(toggle(["wind", bool]))
    }

    return(
        <div className='optionSubDiv'>
            <p>Wind Gambit</p>
            <div className='windBtnDiv'>
                <button className={wind ? "selected" : ""} onClick={() => handleToggle(true)}>Yes</button>
                <button className={!wind ? "selected" : ""} onClick={() => handleToggle(false)}>No</button>
            </div>
        </div>
    )

}

export default Wind;