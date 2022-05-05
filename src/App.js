import './App.css';
import './css/style.css';
import './css/mobile.css';
import { NavBar } from './components/navbar/NavBar.js';
import { BigHome } from './components/BigHome.js';
import { BodyContent } from './components/BodyContent.js';
import { ContentFooter } from './components/ContentFooter.js';
import { Footer } from './components/Footer.js';

function App() {
  return (
    <div className="App">
      <div id="page">
        <NavBar />
        <div id="body" className='home'>
          <BigHome />
          {/* Content Body - Component */}
          <BodyContent />
          {/* Content Footer - Component */}
          <ContentFooter />
        </div>
      </div> {/* page div */}
      <Footer />
    </div>

  );
}

export default App;
