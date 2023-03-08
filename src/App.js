import './App.css';
import PlayerNumber from './Components/PlayerNumber';
import Invaders from './Components/Invaders';
import Rise from './Components/Rise';
import Wind from './Components/Wind';
import BanIllegal from './Components/BanIllegal';
import GenerateRandom from './Components/GenearateRandom';
import ResetButton from './Components/ResetButton';
import Emblems from './Components/Emblems';
import Results from './Components/Results';
import MoreInfo from './Components/MoreInfo';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Alert from './Components/Alert'

const App = () => {

    return (
        <div className="app">
            <Header/>
            <Alert/>
            <div className='options'>
                <PlayerNumber/>
                <Invaders/>
                <Rise/>
                <Wind/>
                <BanIllegal/>
            </div>
            <div className='randomBtnDiv'>
                <GenerateRandom/>
                <ResetButton/>
            </div>
                <Emblems/>
            <div className='random'>
                <Results/>
                <MoreInfo/>
            </div>
            <Footer/>
        </div>
    );
}

export default App;
