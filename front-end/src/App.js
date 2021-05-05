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
                <Route path="/" component={Home} />
                <Route exact path="/practice">
                    <Practice />
                </Route>
                <Route exact path="/learn">
                    <Learn />
                </Route>
                <Route exact path="/info">
                    <Info />
                </Route>
                <Route exact path="/login">
                    <Login />
                </Route>
                <Route exact path="/play">
                    <Play />
                </Route>
                <Route exact path="/profile">
                    <Profile />
                </Route>
                <Route exact path="/signup">
                    <Signup />
                </Route>
                <Route exact path="/basic-checkmates">
                    <BasicCheckmates />
                </Route>
                <Route exact path="/basic-movements">
                    <BasicMovements />
                </Route>
                <Route exact path="/basic-patterns">
                    <BasicPatterns />
                </Route>
                <Route exact path="/mechanics">
                    <Mechanics />
                </Route>
                <Route exact path="/puzzles">
                    <Puzzles />
                </Route>
                <Route exact path="/playlocal">
                    <PlayLocal />
                </Route>
            </BrowserRouter>
        </div>
    );
}

export default App;
