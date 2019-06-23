import React from 'react';
import { BrowserRouter as Router,Redirect,Switch, Route} from "react-router-dom";
import Homepage from './components/homepage/index'
import Detail from './components/detail/index'
function App() {
  return (
    <Router>
      <Switch>  
      <Route exact path="/" component={Homepage} />
      <Route exact path="/movie/:id" component={Detail} />
        <Route render={() => <Redirect to="/" />} />
      </Switch>
    </Router>
  );
}
export default App;
