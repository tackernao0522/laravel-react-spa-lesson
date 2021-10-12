import React from 'react';
import ReactDOM from 'react-dom';
import {
    BrowserRouter,
    Route,
    Switch,
} from 'react-router-dom';
import Example from './pages/Example';
// Exampleの下にHome.jsをインポートする
import Home from './pages/Home';

function App() {
    return (
        <div>
            <Switch>
                <Route path='/example' exact component={Example} />
                {/* Homeコンポーネントを表示するための設定を記述 */}
                <Route path='/' exact component={Home} />
            </Switch>
        </div>
    );
}

ReactDOM.render((
    <BrowserRouter>
        <App />
    </BrowserRouter>
), document.getElementById('app'))
