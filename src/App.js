import img from "./assets/img.png"
import Login from "./Components/Login/Login";
import "./App.scss"

function App() {
   

    return (
        <div className="App">
           <div className="image">
                <img src={img} alt="" />

           </div>
            <div className="right">
                <Login />

                <div className="content">
                    <p>Don't have an account yet?</p>
                    <p className="create">Create an account</p>
                </div>
            </div>
        </div>
    );
}

export default App;
