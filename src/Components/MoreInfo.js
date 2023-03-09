import { useSelector } from "react-redux"

const MoreInfo = () => {

    const rise = useSelector((state) => state.Randomizer.rise)
    const wind = useSelector((state) => state.Randomizer.wind)
    const mode = useSelector((state) => state.Randomizer.mode)
    const offensiveAirship = useSelector((state) => state.Randomizer.offensiveAirship)
    const defensiveAirship = useSelector((state) => state.Randomizer.defensiveAirship)
    const endingCard = useSelector((state) => state.Randomizer.endingCard)
    const mechAbilities = useSelector((state) => state.Randomizer.mechAbilities)
    const fenrisHome = useSelector((state) => state.Randomizer.fenrisHome)
    const vesnaHome = useSelector((state) => state.Randomizer.vesnaHome)
    const ready = useSelector((state) => state.Randomizer.ready)
    const moreInfo = useSelector((state) => state.Randomizer.moreInfo)

    return (
        <div id='moreInfo' className={!moreInfo || (!rise && !wind) || ready ? "invisible" : ""}>
            <div>
                {fenrisHome ? <p>Fenris Home: {fenrisHome}</p> : ""}
                {vesnaHome ? <p>Vesna Home: {vesnaHome}</p> : ""}
                {mechAbilities ? <p>Mech Abilities: {mechAbilities.map((a) => <li key={a}>{a}</li>)}</p> : ""}
            </div>
            <div id="airshipInfo">
                {rise ? <p>Mode: {mode}</p> : "" }
                {wind ? <p>Offensive Airship: {offensiveAirship}</p> : ""}
                {wind ? <p>Defensive Airship: {defensiveAirship}</p> : ""}
                {wind ? <p>Ending Card: {endingCard}</p> : ""}
            </div>
        </div>
    )
}

export default MoreInfo