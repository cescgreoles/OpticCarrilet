import "./App.scss";
import Carousel from "./components/Carousel";

import GifGafas from "./components/GifGafas";
import InfoNav from "./components/InfoNav";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <body>
        <header>
          <InfoNav />
          <GifGafas />
          <Navbar />
        </header>
        <main>
          <Carousel />
        </main>
        <footer></footer>
      </body>
    </div>
  );
}

export default App;
