import { Route, useLocation } from "react-router-dom";
import NavBar from "./components/NavBar/navbar";
import {Home, Landing, Detail, Form} from "./views/index";


function App() {
  const location=useLocation();
  return (
    <div className="App">
      {location.pathname!=="/" && <NavBar/>}
      <Route exact path="/" component={Landing}>

      </Route>

      <Route path="/home" render={()=> <Home/>}>
        
      </Route>

      <Route path="/detail" render={()=><Detail/>}>
        
      </Route>

      <Route path="/create" render={()=><Form/>}>
        
      </Route>
    </div>
  );
}

export default App;
