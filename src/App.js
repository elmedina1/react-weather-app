import './App.css';
import Weather


from './Weather';
function App() {
  return (
    <div className="App">
      <div className="container">
       
        <Weather/>
        <footer>
          This project is created by Elmedina{' '}
          <a
            href="https://github.com/elmedina1/react-weather-app.git"
            target="_blank"
            rel="noreferrer"
          >
            Git
          </a>
          
        </footer>
      </div>
    </div>
  );
}

export default App;
