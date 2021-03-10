import "./App.css";
import data from "./data";
function App() {
  return (
    <div className="grid-container">
      <header className="row header">
        <div>
          <a className="brand" href="/">
            Amazon
          </a>
        </div>
        <div>
          <a href="/signin">Sign In</a>
          <a href="/cart">Cart</a>
        </div>
      </header>
      <main>
        <div>
          <div class="row center">
            {data.products.map((product) => (
              <div key={product._id} className="card">
                <a href={`/product/${product._id}`}>
                  <img className="medium" src={product.image} alt="" />
                </a>
                <div className="card-body">
                  <a href={`/product/${product._id}`}>
                    <h2>{product.name}</h2>
                  </a>
                  <div className="rating">
                    {data.stars.map((star) => (
                      <span>
                        <i className={star.icon}></i>
                      </span>
                    ))}
                  </div>
                  <div className="price">${product.price}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      <footer class="row center">All right reserved</footer>
    </div>
  );
}

export default App;
