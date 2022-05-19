import "./App.css";
import Menu from './containers/menu/index';
import GlobalStyles from "./components/GlobalStyles/index.";
import { BrowserRouter as Router } from 'react-router-dom';
function App() {
    return (
        <GlobalStyles>
            <Router>
                <div className="container-fluid">
                    <div className="row">
                        <Menu />
                    </div>
                </div>
            </Router>
        </GlobalStyles>
    )
}
export default App;