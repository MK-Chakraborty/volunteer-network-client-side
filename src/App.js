import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Pages/Home/Home';
import Header from './Pages/Shared/Header/Header';
import LogIn from './Pages/LogIn/LogIn';
import AuthProvider from './context/AuthProvider';
import Register from './Pages/Register/Register';
import PrivateRoute from './Pages/PrivateRoute/PrivateRoute';
import Event from './Pages/Event/Event';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path='/'>
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/login">
              <LogIn></LogIn>
            </Route>
            <PrivateRoute path="/register/:catagory">
              <Register></Register>
            </PrivateRoute>
            <PrivateRoute path="/register">
              <Register></Register>
            </PrivateRoute>
            <PrivateRoute path="/event">
              <Event></Event>
            </PrivateRoute>
          </Switch>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
