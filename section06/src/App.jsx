import "./App.css";
import Viewr from "./components/Viewer";
import Controller from "./components/Controller";

function App() {
    return (
        <div className="App">
            <h1>Simple Counter</h1>
            <section>
                <Viewr />
            </section>
            <section>
                <Controller />
            </section>
        </div>
    );
}

export default App;
