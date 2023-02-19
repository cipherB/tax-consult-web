import Landing from './pages/Landing';
import Navbar from './components/Navbar';
import { ScrollContainer } from "react-scroll-motion";

function App() {
  return (
    <div className="App">
      <ScrollContainer>
        <div className='w-full top-0 fixed z-20' >
          <Navbar />
        </div>
        <div className='mt-[110px] ' >
          <Landing />
        </div>
        {/* <div className='w-full bottom-0 absolute z-20' >
          <Footer />
        </div> */}
      </ScrollContainer>
    </div>
  );
}

export default App;
