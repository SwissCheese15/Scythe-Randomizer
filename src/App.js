import './App.css';
import { useRef, useState, useEffect } from 'react';

function App() {

    // State
    const [players, setPlayers] = useState(2)
    const [banIllegal, setBanIllegal] = useState(true)
    const [invaders, setInvaders] = useState(false)
    const [rise, setRise] = useState(false)
    const [wind, setWind] = useState(false)

    const [nation, setNation] = useState([])
    const [board, setBoard] = useState([])
    const [mode, setMode] = useState()
    const [airship, setAirship] = useState()
    const [offensiveAirship, setOffensiveAirship] = useState()
    const [defensiveAirship, setDefensiveAirship] = useState()
    const [ending, setEnding] = useState()
    const [endingCard, setEndingCard] = useState()
    const [mechAbilities, setMechAbilities] = useState()
    const [fenrisHome, setFenrisHome] = useState()
    const [vesnaHome, setVesnaHome] = useState()

    // rememberance arrays to avoid repeat combos
    const [rememberNation, setRememberNation] = useState([])
    const [rememberBoard, setRememberBoard] = useState([])

    const [ready, setReady] = useState(true)
    const [rotate, setRotate] = useState(false)
    const [moreInfo, setMoreInfo] = useState(false)

    // Options
    const nations = ["Nordic", "Rusviet", "Crimea", "Polania", "Saxony", "Albion", "Togawa", "Fenris", "Vesna"]
    const boards = ["Industrial", "Engineering", "Patriotic", "Mechanical", "Agricultural", "Militant", "Innovative"]
    const modes = ["War", "Peace", "Normal"]
    const airships = ["Yes", "No"]
    const offensiveAirships = [1,2,3,4,5,6]
    const defensiveAirships = [1,2,3,4,5,6]
    const endings = ["Yes", "No"]
    const endingCards = [1,2,3,4,5,6,7,8,9]
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

    // placeholder array for saving the random nations and boards
    let nationArray
    let boardArray

    // Randomizers
    const randomNationAndBoard = () => {

        // emptying the placeholder arrays for the next round
        boardArray = []
        nationArray = []

        // placeholder for saving the random values generated
        let randomNation = 0
     
        // running the function depending on the number of players
        for (let i = 0; i < players; i++) {

            
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
            createRandom()

            // filling the placeholder array
            nationArray.push(nations[randomNation])
        }
        // ruling out repeat nations and boards for same player
        const checkRepeat = () => {
            console.log(nationArray)
            console.log(rememberNation)
            for (let i = 0; i < nationArray.length; i++) {
                if (nationArray[i] === rememberNation[i]) {
                    console.log("caught")
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
            // running the function depending on the number of players
            for (let i = 0; i < players; i++) {

                // Recursive function to check if board is already taken
                const createRandom = () => {
                    randomBoard = Math.floor(Math.random()*7)
                    if(boardArray.includes(boards[randomBoard])) {
                        createRandom()
                    }
                }
                createRandom()
        
                // filling the placeholder array
                boardArray.push(boards[randomBoard])
            }

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
                setRememberNation(nationArray)

            // updating state
            setNation(nationArray)
            setBoard(boardArray)
        }
        randomBoardFunc()
    }

    const randomAirship = () => {
        if (Math.random() < 0.5) {
            setAirship(airships[0])
            randomAirshipOffense(true)
            randomAirshipDefense(true)
        }
        else {
            setAirship(airships[1])
            randomAirshipOffense(false)
            randomAirshipDefense(false)
        }
    }
    const randomAirshipOffense = (bool) => {
        bool ? setOffensiveAirship(offensiveAirships[Math.floor(Math.random()*6)]) : setOffensiveAirship("")
    }    
    const randomAirshipDefense = (bool) => {
        bool ? setDefensiveAirship(defensiveAirships[Math.floor(Math.random()*6)]) : setDefensiveAirship("")
    }    
    const randomEnding = () => {
        if (Math.random() < 0.5) {
            setEnding(endings[0])
            randomEndingCard(true)
        }
        else { 
            setEnding(endings[1])
            randomEndingCard(false)
        }
    }
    const randomEndingCard = (bool) => {
        bool ? setEndingCard(endingCards[Math.floor(Math.random()*9)]) : setEndingCard(null)
    }    
    const randomMode = () => {
        setMode(modes[Math.floor(Math.random()*3)])
    }
    const randomMechs = (bool) => {
        if (bool) {
            // placeholder for saving the random values generated
        let randomMech = 0

        // placeholder array for saving the random boards
        let mechArray = []
     
        // running the function depending on the number of players
        for (let i = 0; i < 6; i++) {

            // Recursive function to check if board is already taken
            const createRandom = () => {
                randomMech = Math.floor(Math.random()*18)
                if(mechArray.includes(fenrisMechAbilities[randomMech])) {
                    createRandom()
                }
            }
            createRandom()
    
            // filling the placeholder array
            mechArray.push(fenrisMechAbilities[randomMech])
        }
        // updating state
        setMechAbilities(mechArray)
        // emptying the array for the next round
        mechArray = []
        }
        else setMechAbilities(null)
    }
    const randomFenrisHome = (bool) => {
        bool ? setFenrisHome(nations[Math.floor(Math.random()*7)]) : setFenrisHome(null)
    }
    const randomVesnaHome = (bool) => {
        bool ? setVesnaHome(nations[Math.floor(Math.random()*7)]) : setVesnaHome(null)
    }

    const handlePlayerNumber = (input) => {
        setPlayers(input)
    }

    const handleRandomButton = () => {
        if(ready) {
            randomNationAndBoard()
            randomAirship()
            randomEnding()
            randomMode()
            emblemsStartRotating()
            movingEmblems()
            setReady(false)
        }
    }

    // window resize

    let vw = window.innerWidth
    let vh = window.innerHeight

    function reportWindowSize() {
        vw = window.innerWidth
        vh = window.innerHeight

        if (!rotate) {
            for (let i = 1; i <= nation.length; i++) {
                let image = document.getElementById(i)
                let coordinates = image.getBoundingClientRect()
                let x = Math.floor(coordinates.x) -vh*0.08 + "px"
                let y = Math.floor(coordinates.y) -vh*0.01 + "px"
                r.style.setProperty("--" + nation[i-1] + "PosX", x);
                r.style.setProperty("--" + nation[i-1] + "PosY", y);
            }
        }
    }

    window.onresize = reportWindowSize;

    // Emblem Logic

    var r = document.querySelector(':root');

    const handleInvadersTrue = () => {
        setInvaders(true)
        if (!rotate && !moreInfo) {
            r.style.setProperty("--VesnaPosX", "19vw");
            r.style.setProperty("--FenrisPosX", "75vw");
        }
    }

    const handleInvadersFalse = () => {
        setInvaders(false)
        if (!rotate && !moreInfo) {
            r.style.setProperty("--VesnaPosX", "26vw");
            r.style.setProperty("--FenrisPosX", "68vw");
        }
    }

    const emblemsStartRotating = () => {
        setRotate(true)
    }

    let player1 = false
    let player2 = false
    let player3 = false

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
                    
                    await delay(3000)
                }
                setRotate(false)
                setMoreInfo(true)
              }
              oneByOne()
        }, 3000);     
    }

    const handleResetButton = () => {
        setReady(true)
        setMoreInfo(false)
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

    return (
        <div className="app">
            <div className='title'>
                <h1>Scythe Randomizer</h1>
            </div>
            <div className='alert'>
                <p>{(players === 6 || players === 7) && !rise && !invaders ? "In order to play with 6 or 7 players you need to select \"Rise of the Fenris\" or \"Invaders from afar\"" : ""}</p>
            </div>
            <div className='options'>
                <div className='optionSubDiv'>
                    <p>Select Number of Players</p>
                    <div className='playersBtnDiv'>
                        <button className={players === 1 ? "selected" : ""} onClick={() => handlePlayerNumber(1)}>1</button>
                        <button className={players === 2 ? "selected" : ""} onClick={() => handlePlayerNumber(2)}>2</button>
                        <button className={players === 3 ? "selected" : ""} onClick={() => handlePlayerNumber(3)}>3</button>
                        <button className={players === 4 ? "selected" : ""} onClick={() => handlePlayerNumber(4)}>4</button>
                        <button className={players === 5 ? "selected" : ""} onClick={() => handlePlayerNumber(5)}>5</button>
                        <button className={players === 6 ? "selected" : ""} onClick={() => handlePlayerNumber(6)}>6</button>
                        <button className={players === 7 ? "selected" : ""} onClick={() => handlePlayerNumber(7)}>7</button>
                    </div>
                </div>
                <div className='optionSubDiv'>
                    <p>Invaders From Afar</p>
                    <div className='invadersBtnDiv'>
                        <button className={invaders ? "selected" : ""} onClick={() => handleInvadersTrue()}>Yes</button>
                        <button className={!invaders ? "selected" : ""} onClick={() => handleInvadersFalse()}>No</button>
                    </div>
                </div>
                <div className='optionSubDiv'>
                    <p>Rise of the Fenris</p>
                    <div className='riseBtnDiv'>
                        <button className={rise ? "selected" : ""} onClick={() => setRise(true)}>Yes</button>
                        <button className={!rise ? "selected" : ""} onClick={() => setRise(false)}>No</button>
                    </div>
                </div>
                <div className='optionSubDiv'>
                    <p>Wind Gambit</p>
                    <div className='windBtnDiv'>
                        <button className={wind ? "selected" : ""} onClick={() => setWind(true)}>Yes</button>
                        <button className={!wind ? "selected" : ""} onClick={() => setWind(false)}>No</button>
                    </div>
                </div>
                <div className='optionSubDiv'>
                    <p>Ban Illegal Combinations</p>
                    <div className='banBtnDiv'>
                        <button className={banIllegal ? "selected" : ""} onClick={() => setBanIllegal(true)}>Yes</button>
                        <button className={!banIllegal ? "selected" : ""} onClick={() => setBanIllegal(false)}>No</button>
                    </div>
                </div>
            </div>
            <div className='randomBtnDiv'>
                <button id='randomBtn' className={!ready? "notReady" : ""} onClick={() => handleRandomButton()}>Generate Random Game</button>
                <button id='resetBtn' onClick={() => handleResetButton()}>Reset</button>
            </div>
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
            <div className='random'>
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
                <div id='moreInfo' className={!moreInfo || (!rise && !wind) || ready ? "invisible" : ""}>
                    <div>
                        {fenrisHome ? <p>Fenris Home: {fenrisHome}</p> : ""}
                        {vesnaHome ? <p>Vesna Home: {vesnaHome}</p> : ""}
                        {mechAbilities ? <p>Mech Abilities: {mechAbilities.map((a) => <li key={a}>{a}</li>)}</p> : ""}
                    </div>
                    <div>
                        {rise ? <p>Mode: {mode}</p> : "" }
                        {wind ? <p>Airships: {airship}</p> : ""}
                        {wind && offensiveAirship ? <p>Offensive Airship: {offensiveAirship}</p> : ""}
                        {wind && defensiveAirship ? <p>Defensive Airship: {defensiveAirship}</p> : ""}
                        {wind ? <p>Special Ending: {ending}</p> : ""}
                        {wind && endingCard ? <p>Ending Card: {endingCard}</p> : ""}
                    </div>
                </div>

            </div>
            <div className='footer'>
                <div>
                    <p>Website created by Manuel Winkler</p>
                </div>
                <div className='contactLinks'>
                    <a href='https://github.com/SwissCheese15' target="_blank" title='GitHub'>
                        <img src='images/gitHub.png'/>
                    </a>
                    <a href='https://job-finding-universe.vercel.app' target="_blank" title="universe">
                        <img src='images/rocket.png'/>
                    </a>
                    <a href='https://linkedin.com/in/manuel-winkler-software-developer' target="_blank" title="linkedin">
                        <img src='images/linkedin.png'/>
                    </a>
                    <a href='mailto:manuelwinkler@bluewin.ch' target="_blank" title='e-mail'>
                        <img src='images/email.png'/>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default App;
