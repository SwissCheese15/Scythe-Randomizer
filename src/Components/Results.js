import { useSelector } from "react-redux"

const Results = () => {


    const nation = useSelector((state) => state.Randomizer.nation)
    const board = useSelector((state) => state.Randomizer.board)
    const ready = useSelector((state) => state.Randomizer.ready)
    const moreInfo = useSelector((state) => state.Randomizer.moreInfo)

    return (
        <div className='nationsAndBoards'>
        <div className='nations'>
            {nation.map((team, index) => 
                <div key={team}>
                    <p id={index + 1} className={ready ? "invisible" : ""}>Player {index + 1}: </p>
                    <p id={"actual"} className={!moreInfo || ready ? "invisible" : ""}>{team}</p>
                </div>
            )}
        </div>
        <div className='boards'>
            {board.map((board) => 
                <div key={board}>
                    <p id={"actual"} className={!moreInfo || ready ? "invisible" : ""}>{board}</p>
                </div>
            )}
        </div>
    </div>
    )
}

export default Results