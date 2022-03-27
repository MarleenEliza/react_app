import "./App.scss";
import TopBar from "components/topbar/TopBar";
import Header from "components/Header";
import Preview from "components/Preview";
import Properties from "components/properties/Properties";

function App() {
  return (
    <div className="App">
      <TopBar />
      <main>
        <Header />
        <Preview />
        <Properties />
      </main>
    </div>
  );
}

export default App;
