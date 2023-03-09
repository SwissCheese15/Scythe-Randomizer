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
                <div key={team} className="nationDiv">
                    <p id={index + 1} className={ready ? "invisible" : ""}>
                        Player {index + 1}:
                    </p>
                    <p className={!moreInfo ? "invisible" : ""}>
                        &nbsp;&nbsp;{team}
                        &nbsp;&nbsp;{board[index]}
                    </p>
                </div>
            )}
        </div>
    </div>
    )
}

export default Results