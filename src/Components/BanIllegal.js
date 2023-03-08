import { useSelector, useDispatch } from "react-redux";
import { toggle } from "../Redux/Slice";

const BanIllegal = () => {

    const dispatch = useDispatch()

    const banIllegal = useSelector((state) => state.Randomizer.banIllegal)

    const handleToggle = (bool) => {
        dispatch(toggle(["banIllegal", bool]))
    }

    return(
        <div className='optionSubDiv'>
            <p>Ban Illegal Combinations</p>
            <div className='banBtnDiv'>
                <button className={banIllegal ? "selected" : ""} onClick={() => handleToggle(true)}>Yes</button>
                <button className={!banIllegal ? "selected" : ""} onClick={() => handleToggle(false)}>No</button>
            </div>
        </div>
    )
}

export default BanIllegal;