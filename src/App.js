import './App.css';
import Home from './Home.js';
import Header from './Header.js';
import Footer from './Footer.js';

function App() {
  return (

    //BEM
    <div className="App">
      {/* as header is a common component in both pages so we will build the header component first */}
      <Header />

      <Home />

      <Footer />

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
