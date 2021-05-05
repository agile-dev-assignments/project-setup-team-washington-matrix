import { BrowserRouter, Route } from 'react-router-dom';
import Home from './page/Home';
import Info from './page/Info';
import Learn from './page/Learn';
import Practice from './page/Practice';
import Login from './page/Login';
import Play from './page/Play';
import PlayLocal from './page/Play/PlayLocal';
import Profile from './page/Profile';
import Signup from './page/Signup';
import BasicCheckmates from './page/Learn/Learn-subpages/basic-checkmates';
import BasicMovements from './page/Learn/Learn-subpages/basic-movement';
import BasicPatterns from './page/Learn/Learn-subpages/basic-patterns';
import Mechanics from './page/Learn/Learn-subpages/mechanics';
import Puzzles from './page/Learn/Learn-subpages/puzzles';
import 'semantic-ui-css/semantic.min.css';

function App() {
    return (
        <div>
            <BrowserRouter>
                <Route exact path="/" component={Home} />
                <Route path="/practice">
                    <Practice />
                </Route>
                <Route path="/learn">
                    <Learn />
                </Route>
                <Route path="/info">
                    <Info />
                </Route>
                <Route path="/login">
                    <Login />
                </Route>
                <Route path="/play">
                    <Play />
                </Route>
                <Route path="/profile">
                    <Profile />
                </Route>
                <Route path="/signup">
                    <Signup />
                </Route>
                <Route path="/basic-checkmates">
                    <BasicCheckmates />
                </Route>
                <Route path="/basic-movements">
                    <BasicMovements />
                </Route>
                <Route path="/basic-patterns">
                    <BasicPatterns />
                </Route>
                <Route path="/mechanics">
                    <Mechanics />
                </Route>
                <Route path="/puzzles">
                    <Puzzles />
                </Route>
                <Route path="/playlocal">
                    <PlayLocal />
                </Route>
            </BrowserRouter>
        </div>
    );
}

export default App;
