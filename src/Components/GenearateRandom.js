import { useDispatch, useSelector } from "react-redux"
import { changeState } from "../Redux/Slice"

const GenerateRandom = () => {

    const dispatch = useDispatch()

    const players = useSelector((state) => state.Randomizer.players)
    const banIllegal = useSelector((state) => state.Randomizer.banIllegal)
    const invaders = useSelector((state) => state.Randomizer.invaders)
    const rise = useSelector((state) => state.Randomizer.rise)
    const nation = useSelector((state) => state.Randomizer.nation)
    const rememberNation = useSelector((state) => state.Randomizer.rememberNation)
    const rememberBoard = useSelector((state) => state.Randomizer.rememberBoard)
    const ready = useSelector((state) => state.Randomizer.ready)
    const rotate = useSelector((state) => state.Randomizer.rotate)
 
    // Options
    const nations = ["Nordic", "Rusviet", "Crimea", "Polania", "Saxony", "Albion", "Togawa", "Fenris", "Vesna"]
    const boards = ["Industrial", "Engineering", "Patriotic", "Mechanical", "Agricultural", "Militant", "Innovative"]
    const modes = ["War", "Peace", "Normal"]
    const offensiveAirships = [1,2,3,4,5,6,7,8]
    const defensiveAirships = [9,10,11,12,13,14,15,16]
    const endingCards = [1,2,3,4,5,6,7,8]
    const fenrisMechAbilities = [
        "Scout",
        "Feint",
        "Submerge",
        "Township",
        "People's Army",
        "Seaworthy",
        "Underpass",
        "Shield",
        "Sword",
        "Regroup",
        "Ronin",
        "Tactics",
        "Artillery",
        "Camaraderie",
        "Disarm",
        "Suiton",
        "Wayfare",
        "Stealth"
    ]

    // placeholder array for saving the random nation
    let nationArray

    // Randomizers
    const randomNationAndBoard = () => {

        // emptying the placeholder array for the next round
        nationArray = []

        // placeholder for saving the random values generated
        let randomNation = 0
     
        const createRandom = () => {
            // generating the random value
            randomNation = Math.floor(Math.random()*9)
            // Recursive function to check if nation is already taken
            if(nationArray.includes(nations[randomNation])) {
                createRandom()
            }
            // ruling out expansion nations
            if (!invaders && (randomNation === 5 || randomNation === 6 )) {
                createRandom()
            }
            if (!rise && (randomNation === 7 || randomNation === 8 )) {
                createRandom()
            }
        }
        // running the function depending on the number of players
        for (let i = 0; i < players; i++) {
            createRandom()
            // filling the placeholder array
            nationArray.push(nations[randomNation])
        }
        // ruling out repeat nations for same player
        const checkRepeat = () => {
            for (let i = 0; i < nationArray.length; i++) {
                if (nationArray[i] === rememberNation[i]) {
                    return randomNationAndBoard()
                }
            }
        }
        checkRepeat()

        // generate nation specific info when Vesna or Fenris are selected
        nationArray.includes("Vesna") ? randomMechs(true) : randomMechs(false)
        nationArray.includes("Vesna") ? randomVesnaHome(true) : randomVesnaHome(false)
        nationArray.includes("Fenris") ? randomFenrisHome(true) : randomFenrisHome(false)

        // Random Board Function ---------------------------------------------------------
     
        const randomBoardFunc = () => {
            // placeholder for saving the random values generated
            let randomBoard = 0
            // placeholder array for saving the random boards
            let boardArray = []
            // Recursive function to check if board is already taken
            const createRandom = () => {
                randomBoard = Math.floor(Math.random()*7)
                if(boardArray.includes(boards[randomBoard])) {
                    createRandom()
                }
            }
            // running the function depending on the number of players
            for (let i = 0; i < players; i++) {

                createRandom()
        
                // filling the placeholder array
                boardArray.push(boards[randomBoard])
            }

            // ruling out repeat boards for same player
            const checkRepeat = () => {
                for (let i = 0; i < boardArray.length; i++) {
                    if (boardArray[i] === rememberBoard[i]) {
                        return randomBoardFunc()
                    }
                }
            }
            checkRepeat()

            // check for banned combinations
            for (let i = 0; i < boardArray.length; i++) {
                if (boardArray[i] === "Industrial" && nationArray[i] === "Rusviet" && banIllegal) {
                    randomBoardFunc()
                    return
                }
                if (boardArray[i] === "Patriotic" && nationArray[i] === "Crimea" && banIllegal) {
                    randomBoardFunc()
                    return
                }
            }

            // setting rememberance arrays
            dispatch(changeState(["rememberNation", nationArray]))
            dispatch(changeState(["rememberBoard", boardArray]))

            // updating state
            dispatch(changeState(["nation", nationArray]))
            dispatch(changeState(["board", boardArray]))
        }
        randomBoardFunc()
    }

    const randomAirshipOffense = () => {
        dispatch(changeState(["offensiveAirship", offensiveAirships[Math.floor(Math.random()*6)]]))
    }    
    const randomAirshipDefense = () => {
        dispatch(changeState(["defensiveAirship", defensiveAirships[Math.floor(Math.random()*6)]]))
    }    
    const randomEndingCard = () => {
        dispatch(changeState(["endingCard", endingCards[Math.floor(Math.random()*9)]]))
    }    
    const randomMode = () => {
        dispatch(changeState(["mode", modes[Math.floor(Math.random()*3)]]))
    }
    const randomMechs = (bool) => {
        if (bool) {
            // placeholder for saving the random values generated
        let randomMech = 0

        // placeholder array for saving the random boards
        let mechArray = []
     
        // Recursive function to check if board is already taken
        const createRandom = () => {
            randomMech = Math.floor(Math.random()*18)
            if(mechArray.includes(fenrisMechAbilities[randomMech])) {
                createRandom()
            }
        }
        for (let i = 0; i < 6; i++) {
            createRandom()
            // filling the placeholder array
            mechArray.push(fenrisMechAbilities[randomMech])
        }
        // updating state
        dispatch(changeState(["mechAbilities", mechArray]))
        // emptying the array for the next round
        mechArray = []
        }
        else dispatch(changeState(["mechAbilities", null]))
    }
    const randomFenrisHome = (bool) => {
        dispatch(changeState(["fenrisHome", bool ? nations[Math.floor(Math.random()*7)] : null]))
    }
    const randomVesnaHome = (bool) => {
        dispatch(changeState(["vesnaHome", bool ? nations[Math.floor(Math.random()*7)] : null]))
    }

    // window resize
    let vh = window.innerHeight

    function reportWindowSize() {
        vh = window.innerHeight

        if (!rotate) {
            for (let i = 1; i <= nation.length; i++) {
                let image = document.getElementById(i)
                let coordinates = image.getBoundingClientRect()
                let x = Math.floor(coordinates.x) -vh*0.08 + "px"
                let y = Math.floor(coordinates.y) -vh*0.01 + "px"
                r.style.setProperty("--" + nation[i-1] + "PosX", x);
                r.style.setProperty("--" + nation[i-1] + "PosY", y);
                // mobile emblem positions
                let mobX = Math.floor(coordinates.x) -vh*0.065 + "px"
                let mobY = Math.floor(coordinates.y) -vh*0.001 + "px"
                r.style.setProperty("--mob" + nation[i-1] + "PosX", mobX);
                r.style.setProperty("--mob" + nation[i-1] + "PosY", mobY);
            }
        }
    }

    window.onresize = reportWindowSize;

    // Emblem Logic

    const r = document.querySelector(':root');

    const emblemsStartRotating = () => {
        dispatch(changeState(["rotate", true]))
    }

    const movingEmblems = () => {

        setTimeout(() => {

            const delay = async (ms = 3000) =>
                new Promise(resolve => setTimeout(resolve, ms))

            async function oneByOne() {

                for (let i = 1; i <= nationArray.length; i++) {
                    let image = document.getElementById(i)
                    let coordinates = image.getBoundingClientRect()
                    let x = Math.floor(coordinates.x) -vh*0.08 + "px"
                    let y = Math.floor(coordinates.y) -vh*0.01 + "px"
                    r.style.setProperty("--" + nationArray[i-1] + "PosX", x);
                    r.style.setProperty("--" + nationArray[i-1] + "PosY", y);
                    // mobile emblem positions
                    let mobX = Math.floor(coordinates.x) -vh*0.065 + "px"
                    let mobY = Math.floor(coordinates.y) -vh*0.001 + "px"
                    r.style.setProperty("--mob" + nationArray[i-1] + "PosX", mobX);
                    r.style.setProperty("--mob" + nationArray[i-1] + "PosY", mobY);

                    await delay(3000)
                }
                dispatch(changeState(["rotate", false]))
                dispatch(changeState(["moreInfo", true]))
              }
              oneByOne()
        }, 3000);     
    }

    const handleRandomButton = () => {
        if(ready) {
            randomNationAndBoard()
            randomMode()
            emblemsStartRotating()
            movingEmblems()
            randomAirshipOffense()
            randomAirshipDefense()
            randomEndingCard()
            dispatch(changeState(["ready", false]))
        }
    }

    return (
        <button id='randomBtn' className={!ready? "notReady" : ""} onClick={() => handleRandomButton()}>
            Generate Random Game
        </button>
    )
}

export default GenerateRandom