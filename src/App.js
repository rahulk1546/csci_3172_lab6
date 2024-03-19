import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          First time workig with react.
        </p>
        <label for="inputCity" class="form-label">Country</label>
          <select name="inputCity" class="form-control" id="inputCity">
            <option value="Canada">Canada</option>
            <option value="USA">USA</option>
            <option value="China">China</option>
            <option value="Japan">Japan</option>
            <option value="India">India</option>
          </select>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React with us.
        </a>
      </header>
    </div>
  );
}

export default App;
