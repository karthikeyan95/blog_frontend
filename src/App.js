import Post from './components/post'
import 'bootstrap/dist/css/bootstrap.min.css'

import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import Home from './components/home/home'

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/'>
          <Home />
        </Route>
        <Route path="/posts/:id">
          <Post />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
