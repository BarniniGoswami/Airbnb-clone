import './App.css';
import Home from './Home.js';
import Header from './Header.js';
import Footer from './Footer.js';
import SearchPage from './SearchPage.js';
import {BrowserRouter as Router, Switch, Route} from
"react-router-dom";

function App() {
  return (

    //BEM
    <div className="App">

      {/*1. Wrap the app inside router */}
      <Router>

            {/* as header is a common component in both pages so we will build the header component first */}
            <Header />


            {/* Apply switch to toggle between rendered pages */}
            <Switch>

              {/* The sequence of routes is important else it will not render the appropriate pages */}
              <Route path="/search">
                {/* When we have in url - "/search" then we want the search page to be displayed */}
                <SearchPage />
              </Route>
              <Route path="/">
                {/* when we have in browser url only "/" then we wanna render the home page */}
                <Home />
              </Route>
              

            </Switch>


            <Footer />

      </Router>

   {/* HOME */}
      {/* header */}

      {/* Banner */}

      {/* Cards */}

      {/* Footer */}
    
   {/* Search Page */}
       {/* Header */}

    </div>
  );
}

export default App;
