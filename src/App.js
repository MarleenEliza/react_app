import "./App.scss";
import TopBar from "components/topbar/TopBar";
import Preview from "components/Preview";

const name = "button";

function App() {
  return (
    <div className="App">
      <TopBar />
      <main>
        <Preview />
      </main>
      <p>
        Edit <code>src/App.js</code> and save to reload.
      </p>
      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
      </a>
    </div>
  );
}

export default App;
