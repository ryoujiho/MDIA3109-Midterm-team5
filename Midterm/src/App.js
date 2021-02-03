import './App.scss';
import Main from 'pages/main';
import AddContent from 'pages/AddingContent';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact component={Main}/>
          <Route path="/AddingContent" exact component={AddContent}/>
        </Switch>
     </Router>
    </div>
  );
}

export default App;
