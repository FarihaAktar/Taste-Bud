import './App.css';
import HomePage from './components/reactComponents/HomePage/HomePage';
import MealDetail from './components/reactComponents/MealDetail/MealDetail'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/meal/:mealId" component={MealDetail} />
        </Switch>
      </Router>

    </div>
  );
}

export default App;
