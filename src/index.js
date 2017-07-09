import React from 'react';
import {render} from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './utils/configureStore';
import './utils/jfeed';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { Router, Route } from 'react-router'
import Main from './Main';
import Home from './Home';
import About from './About';
import Episodes from './Episodes';
import Soundboard from './Soundboard';

import registerServiceWorker from './registerServiceWorker';
import { createBrowserHistory } from 'history'
const history = createBrowserHistory();

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();
let store = configureStore({episodes: null});
// Render the main app react component into the app div.
// For more details see: https://facebook.github.io/react/docs/top-level-api.html#react.render
//render(<Main />, document.getElementById('app'));

render((
  <Provider store={store}>
    <Router history={history}>
      <div>
        <Route path="/" component={Main} />
        <Route exact path="/" component={Home} />
        <Route path="/home" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/episodes" component={Episodes} />
        <Route path="/soundboard" component={Soundboard} />
      </div>
    </Router>
  </Provider>
), document.getElementById('root'))
registerServiceWorker();

/*
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

*/