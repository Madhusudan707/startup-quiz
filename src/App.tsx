import {Navbar} from './Components'
import { Routes, Route } from "react-router-dom";
import { Home,Arena,Quiz,Result,PageNotFound,PrivateRoute} from './Pages';
// import routes from "./routing/routes";
const App = ()=>{
  return (
    <div className="App">
      <Navbar/>
      {/* <Routes>
          {routes.map((route, key) => (
            <Route path={route.path} element={<route.component />} key={key} />
          ))}
        </Routes> */}
         <Routes>
        {/* <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<Register />} /> */}
        <Route path="/" element={<Home />} />
        <PrivateRoute path="/arena" element={<Arena />} />
        <PrivateRoute path="/quiz" element={<Quiz />} />
        <PrivateRoute path="/result" element={<Result />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
}

export default App;
