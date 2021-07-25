import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom';
import { Provider } from 'react-redux';

import './components/styles/App.css';

import Welcome from './components/guest/Welcome';
import Login from './components/guest/Login';
import Signup from './components/guest/Signup';

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Welcome} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/signup' component={Signup} />
      </Switch>
      <div className="fixed bottom-0 w-full bg-gray-900 text-white">
        <p className="text-xs text-center">
          Harry Potter, Hogwarts, and all other related content are property of J.K. Rowling.<br />
          Hogwarts-Revisited.net is an unofficial and independent Harry Potter fansite created and maintained by&nbsp;
          <a className="font-bold" href="https://github.com/thetrend">@thetrend</a>.
        </p>
      </div>
    </BrowserRouter>
  )
};

export default App;


