import './App.css';
import MainComponent from './components/main/main';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { Store } from './redux/store';

function App() {
  return (
    <Provider store={Store}>
      <div className="App">
        <header className="App-header">
          <BrowserRouter>
            <MainComponent />
          </BrowserRouter>
        </header>
      </div>
    </Provider>
  );
}

export default App;
