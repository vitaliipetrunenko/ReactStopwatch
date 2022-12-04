import {BrowserRouter} from  'react-router-dom';
import styl from './App.module.css';
import StopwatchButtonsContainer from './Components/StopwatchButtons/StopwatchButtonsContainer.jsx';
import StopwatchTimeContainer from './Components/StopwatchTime/StopwatchTimeContainer';


const OUR_NEW_VARIABLE = 'LOL';


function App() {
  return (
    <BrowserRouter>
    <div className={styl.App}>
      <header className={styl.AppHeader}>
        <main>
        <StopwatchTimeContainer />
        <StopwatchButtonsContainer/>
        </main>
      </header>
    </div>
    </BrowserRouter>
  );
}

export default App;
