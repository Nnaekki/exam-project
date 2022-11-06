import { Helmet } from "react-helmet";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Login from "./Pages/Login";
import Error404 from "./Components/Error404";
import Signup from "./Pages/Signup";
import Dashboard from "./Pages/Dashboard";
import { AuthProvider } from "./Context/auth";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import RequireAuth from "./Components/RequireAuth";
import ErrorBoundary from "./Components/ErrorBoundary";

function App() {
  return (
    <AuthProvider>
    <Router>
    <Helmet>
        <title>Ctrlschool of Engineering</title>
        <meta
          name="description"
          content="An Online School of Engineering"
        />
      </Helmet>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/dashboard">
              <RequireAuth>
            <Dashboard />
            </RequireAuth>
          </Route>
            <Route path="/about">
              <About />
            </Route>
            
            <Route path="/contact">
              <Contact />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/signup">
              <Signup />
            </Route>
            <Route path="*">
              <Error404 />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
    </AuthProvider>
  );
}

export default App;
