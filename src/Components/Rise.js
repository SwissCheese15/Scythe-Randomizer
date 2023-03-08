import { useSelector, useDispatch } from "react-redux";
import { toggle } from "../Redux/Slice";

const Rise = () => {

    const dispatch = useDispatch()

    const rise = useSelector((state) => state.Randomizer.rise)

    const handleToggle = (bool) => {
        dispatch(toggle(["rise", bool]))
    }

    return(
        <div className='optionSubDiv'>
            <p>Rise of the Fenris</p>
            <div className='riseBtnDiv'>
                <button className={rise ? "selected" : ""} onClick={() => handleToggle(true)}>Yes</button>
                <button className={!rise ? "selected" : ""} onClick={() => handleToggle(false)}>No</button>
            </div>
        </div>
    )

}

export default Rise;