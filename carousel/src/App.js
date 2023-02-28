import "./App.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Product from "./Product";
import { productData, responsive } from "./data";

function App() {
  return (
    <div className="App">
      <h1>React Multi Carousel</h1>
      <Carousel responsive={responsive}>
        {productData.map((item, i) => (
          <Product
            key={i}
            imageurl={item.imageurl}
            name={item.name}
            price={item.price}
            description={item.description}
          />
        ))}
      </Carousel>
      ;
    </div>
  );
}

export default App;
