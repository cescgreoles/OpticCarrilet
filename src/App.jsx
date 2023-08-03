import "./App.scss";
import Carousel from "./components/Carousel";
import GifGafas from "./components/GifGafas";
import InfoNav from "./components/InfoNav";
import Navbar from "./components/Navbar";

function App() {
  const items = [
    <img key="1" src="item1.jpg" alt="Item 1" />,
    <img key="2" src="item2.jpg" alt="Item 2" />,

    <img key="3" src="item3.jpg" alt="Item 3" />,

    // Add more items as needed
  ];

  return (
    <div className="App">
      <body>
        <header>
          <InfoNav />
          <GifGafas />
          <Navbar />
        </header>
        <main>
          <div>
            <Carousel items={items} />
          </div>
        </main>
        <footer></footer>
      </body>
    </div>
  );
}

export default App;
