import { useDispatch } from "react-redux";
import { changeState } from "../Redux/Slice";

const ResetButton = () => {

    const dispatch = useDispatch()

    const r = document.querySelector(':root');

    const handleResetButton = () => {
        dispatch(changeState(["ready", true]))
        dispatch(changeState(["moreInfo", false]))
        r.style.setProperty("--VesnaPosX", "26vw")
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
        r.style.setProperty("--FenrisPosX", "68vw")
        r.style.setProperty("--FenrisPosY", "34vh")
    }

    return(
        <button id='resetBtn' onClick={() => handleResetButton()}>
            Reset
        </button>
    )

}

export default ResetButton