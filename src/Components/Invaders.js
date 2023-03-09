import { useSelector, useDispatch } from "react-redux";
import { toggle } from "../Redux/Slice";

const Invaders = () => {

    const dispatch = useDispatch()

    const invaders = useSelector((state) => state.Randomizer.invaders)
    const rotate = useSelector((state) => state.Randomizer.rotate)
    const moreInfo = useSelector((state) => state.Randomizer.moreInfo)

    const r = document.querySelector(':root');

    const handleToggle = (bool) => {
        dispatch(toggle(["invaders", bool]))
        if (bool && !rotate && !moreInfo) {
            r.style.setProperty("--VesnaPosX", "19vw");
            r.style.setProperty("--FenrisPosX", "75vw");
            // mobile emblem positioning
            r.style.setProperty("--mobVesnaPosX", "7vw");
            r.style.setProperty("--mobFenrisPosX", "87vw");
        }
        if (!bool && !rotate && !moreInfo) {
            r.style.setProperty("--VesnaPosX", "26vw");
            r.style.setProperty("--FenrisPosX", "68vw");
            // mobile emblem positioning
            r.style.setProperty("--mobVesnaPosX", "17vw");
            r.style.setProperty("--mobFenrisPosX", "77vw");
        }
    }

    return(
        <div className='optionSubDiv'>
            <p>Invaders From Afar</p>
            <div className='invadersBtnDiv'>
                <button className={invaders ? "selected" : ""} onClick={() => handleToggle(true)}>Yes</button>
                <button className={!invaders ? "selected" : ""} onClick={() => handleToggle(false)}>No</button>
            </div>
        </div>
    )

}

export default Invaders;