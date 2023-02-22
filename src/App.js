import Landing from './pages/Landing';
import Navbar from './components/Navbar';
import { ScrollContainer } from "react-scroll-motion";
import SecLanding from './pages/SecLanding';

function App() {
  return (
    <div className="App">
      {/* <ScrollContainer>
        <div className='fixed top-0 z-20 w-full' >
          <Navbar />
        </div>
        <div className='mt-[110px] ' >
          <Landing />
        </div>
      </ScrollContainer> */}
      <div className='fixed top-0 z-20 w-full' >
        <Navbar />
      </div>
      <div className='mt-6 md:mt-[120px]' >
        <SecLanding />
      </div>
    </div>
  );
}

export default App;
