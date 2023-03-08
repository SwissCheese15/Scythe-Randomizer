import { useSelector } from "react-redux"

const Emblems = () => {

    const invaders = useSelector((state) => state.Randomizer.invaders)
    const rise = useSelector((state) => state.Randomizer.rise)
    const rotate = useSelector((state) => state.Randomizer.rotate)

    return (
        <div id='emblems' className={rotate ? "rotate" : ""}>
            <img id='moveVesna' className={!rise ? "invisible" : ""} src='/images/vesna.png'/>
            <img id='moveTogawa' className={!invaders ? "invisible" : ""} src='/images/togawa.png'/>
            <img id='moveNordic' src='/images/nordic.png'/>
            <img id='moveRusviet' src='/images/rusviet.png'/>
            <img id='moveCrimea' src='/images/crimea.png'/>
            <img id='movePolania' src='/images/polonia.png'/>
            <img id='moveSaxony' src='/images/saxony.png'/>
            <img id='moveAlbion' className={!invaders ? "invisible" : ""} src='/images/albion.png'/>
            <img id='moveFenris' className={!rise ? "invisible" : ""} src='/images/fenris.png'/>
        </div>
    )
}

export default Emblems