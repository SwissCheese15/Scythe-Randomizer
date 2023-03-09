import { useDispatch } from "react-redux";
import { changeState } from "../Redux/Slice";
import { useSelector } from "react-redux";

const ResetButton = () => {

    const dispatch = useDispatch()

    const invaders = useSelector((state) => state.Randomizer.invaders)
    const rotate = useSelector((state) => state.Randomizer.rotate)

    const r = document.querySelector(':root');

    const handleResetButton = () => {
        if (!rotate) {
            dispatch(changeState(["ready", true]))
        dispatch(changeState(["moreInfo", false]))

        // resetting the emblems to their starting positions
        r.style.setProperty("--VesnaPosY", "34vh")
        r.style.setProperty("--TogawaPosX", "26vw")
        r.style.setProperty("--TogawaPosY", "34vh")
        r.style.setProperty("--NordicPosX", "33vw")
        r.style.setProperty("--NordicPosY", "34vh")
        r.style.setProperty("--RusvietPosX", "40vw")
        r.style.setProperty("--RusvietPosY", "34vh")
        r.style.setProperty("--CrimeaPosX", "47vw")
        r.style.setProperty("--CrimeaPosY", "34vh")
        r.style.setProperty("--PolaniaPosX", "54vw")
        r.style.setProperty("--PolaniaPosY", "34vh")
        r.style.setProperty("--SaxonyPosX", "61vw")
        r.style.setProperty("--SaxonyPosY", "34vh")
        r.style.setProperty("--AlbionPosX", "68vw")
        r.style.setProperty("--AlbionPosY", "34vh")
        r.style.setProperty("--FenrisPosY", "34vh")
        // positioning the rise emblems depending on the invader emblems
        if (invaders) {
            r.style.setProperty("--VesnaPosX", "19vw")
            r.style.setProperty("--FenrisPosX", "75vw")
        }
        else {
            r.style.setProperty("--VesnaPosX", "26vw")
            r.style.setProperty("--FenrisPosX", "68vw")
        }
        // ------- mobile emblem positions
        // resetting the emblems to their starting positions
        r.style.setProperty("--mobVesnaPosY", "42vh")
        r.style.setProperty("--mobTogawaPosX", "17vw")
        r.style.setProperty("--mobTogawaPosY", "42vh")
        r.style.setProperty("--mobNordicPosX", "27vw")
        r.style.setProperty("--mobNordicPosY", "42vh")
        r.style.setProperty("--mobRusvietPosX", "37vw")
        r.style.setProperty("--mobRusvietPosY", "42vh")
        r.style.setProperty("--mobCrimeaPosX", "47vw")
        r.style.setProperty("--mobCrimeaPosY", "42vh")
        r.style.setProperty("--mobPolaniaPosX", "57vw")
        r.style.setProperty("--mobPolaniaPosY", "42vh")
        r.style.setProperty("--mobSaxonyPosX", "67vw")
        r.style.setProperty("--mobSaxonyPosY", "42vh")
        r.style.setProperty("--mobAlbionPosX", "77vw")
        r.style.setProperty("--mobAlbionPosY", "42vh")
        r.style.setProperty("--mobFenrisPosY", "42vh")
        // positioning the rise emblems depending on the invader emblems
        if (invaders) {
            r.style.setProperty("--mobVesnaPosX", "7vw")
            r.style.setProperty("--mobFenrisPosX", "87vw")
        }
        else {
            r.style.setProperty("--mobVesnaPosX", "17vw")
            r.style.setProperty("--mobFenrisPosX", "77vw")
        }
        }
    }

    return(
        <button
            id='resetBtn'
            onClick={() => handleResetButton()}
            className={rotate? "notReady" : ""}>
            Reset
        </button>
    )

}

export default ResetButton