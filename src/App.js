import { Route } from 'react-router';
import { BrowserRouter as Router, Switch} from 'react-router-dom';

import './App.css';
import Sidebar from './components/Sidebar';
import Home from './pages/Home';
import MoreCharts from './pages/more';

function App() {
  return (
  
    
        <div className="app">
          <Router>
       <Sidebar/>
       <Switch>
         <Route path="/" exact component={Home}></Route>
         <Route path="/more" component={MoreCharts}></Route>
       </Switch>
       </Router>
      </div>
    
  );
}

export default App;
