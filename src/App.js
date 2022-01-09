import {
    BrowserRouter,
    Routes,
    Route,
    Link
} from "react-router-dom";
import Home from "./routes/Home";
import Detail from "./routes/Detail";

function App() {
    return (
        <div>
            <BrowserRouter>
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/movie">Movie</Link>
                        </li>
                    </ul>
                </nav>

                <Routes>
                    <Route path="/movie" element={<Detail/>}/>
                    <Route path="/" element={<Home/>}/>
                </Routes>
            </BrowserRouter>
        </div>
    )
        ;
}

export default App;
