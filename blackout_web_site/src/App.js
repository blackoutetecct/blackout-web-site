import './App.css';

import Header from './components/Header'
import Home from './components/Home'


import KnowMore from './components/KnowMore'
import WhoWeAre from './components/WhoWeAre'
import Team from './components/Team'
import Projects from './components/Projects'
import Footer from './components/Footer'


function App() {
  return (
    <>
    
      <Header />

        <main> 

            <Home />
            <KnowMore />
            <WhoWeAre />
            <Team />
            <Projects />
      
        </main>

      <Footer />
      
    </>
  );
}

export default App;