import { useSelector } from "react-redux"

const Emblems = () => {

    const invaders = useSelector((state) => state.Randomizer.invaders)
    const rise = useSelector((state) => state.Randomizer.rise)
    const rotate = useSelector((state) => state.Randomizer.rotate)

    return (
        <div id='emblems' className={rotate ? "rotate" : ""}>
            <img
                id='moveVesna'
                src='/images/vesna.png'
                alt="Vesna Logo"
                className={!rise ? "invisible" : ""}
            />
            <img
                id='moveTogawa'
                src='/images/togawa.png'
                alt="Togawa Logo"
                className={!invaders ? "invisible" : ""}
            />
            <img
                id='moveNordic'
                src='/images/nordic.png'
                alt="Nordic Logo"
            />
            <img
                id='moveRusviet'
                src='/images/rusviet.png'
                alt="Rusviet Logo"
            />
            <img
                id='moveCrimea'
                src='/images/crimea.png'
                alt="Crimea Logo"
            />
            <img
                id='movePolania'
                src='/images/polonia.png'
                alt="Polania Logo"
            />
            <img
                id='moveSaxony'
                src='/images/saxony.png'
                alt="Saxony Logo"
            />
            <img
                id='moveAlbion'
                src='/images/albion.png'
                alt="Albion Logo"
                className={!invaders ? "invisible" : ""}
            />
            <img
                id='moveFenris'
                src='/images/fenris.png'
                alt="Fenris Logo"
                className={!rise ? "invisible" : ""}
            />
        </div>
    )
}

export default Emblems