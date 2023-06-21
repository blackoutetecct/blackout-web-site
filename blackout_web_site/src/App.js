import './App.css';

import Header from './components/Header';
import Home from './components/Home';


import Chat from './components/Chat';
import Footer from './components/Footer';
import KnowMore from './components/KnowMore';
import Projects from './components/Projects';
import Team from './components/Team';
import WhoWeAre from './components/WhoWeAre';


function App() {

  function handleClick(){
    document.querySelector('.chat-container').classList.remove('active')
  }

  return (
    <>
      <Header />
        <main onClick={handleClick}>  
            <Chat />
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