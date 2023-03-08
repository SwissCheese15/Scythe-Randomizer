import { useSelector } from "react-redux"

const Alert = () => {

    const players = useSelector((state) => state.Randomizer.players)
    const invaders = useSelector((state) => state.Randomizer.invaders)
    const rise = useSelector((state) => state.Randomizer.rise)


    const extentionNeeded = "In order to play with 6 or 7 players you need to select \"Rise of the Fenris\" or \"Invaders From Afar\""

    return (
        <div className='alert'>
            <p>
                {(players === 6 || players === 7) && !rise && !invaders ? extentionNeeded : ""}
            </p>
        </div>
    )
    
    }
    
    export default Alert