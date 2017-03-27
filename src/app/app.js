import React from 'react';
import {render} from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './utils/configureStore';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { Router, Route, IndexRoute, Link, hashHistory } from 'react-router'
import Main from './Main';
import Home from './Home';
import About from './About';
import Episodes from './Episodes';
import Soundboard from './Soundboard';
// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();
let store = configureStore({episodes: null});
// Render the main app react component into the app div.
// For more details see: https://facebook.github.io/react/docs/top-level-api.html#react.render
//render(<Main />, document.getElementById('app'));

render((
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path="/" component={Main}>
        <IndexRoute component={Home} />
        <Route path="home" component={Home} />
        <Route path="about" component={About} />
        <Route path="episodes" component={Episodes} />
        <Route path="soundboard" component={Soundboard} />
      </Route>
    </Router>
  </Provider>
), document.getElementById('app'))

