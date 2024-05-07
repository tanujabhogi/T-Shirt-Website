import { useState, useContext } from "react";
import "./Home.css";
import Products from "../Products/Products";
import products from "../../db/data";
import { cartContext } from "../../context/CartContextProvider";
import Sidebar from "../Sidebar/Sidebar";
import Card from "../card/Card";
import Pagination from "../pagination/Pagination";
import Search from "../search/Search";
function App() {
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedRanges, setSelectedRanges] = useState([]);
  let [cart, setCart] = useContext(cartContext);
  const [warning, setWarning] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(6);
  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;

  // ----------- Input Filter -----------
  const [query, setQuery] = useState("");

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const filteredItems = products.filter(product => {
    const name = product.Name ? product.Name.toLowerCase() : ''; // Check if Name exists
    const color = product.color ? product.color.toLowerCase() : ''; // Check if color exists
    const type = product.type ? product.type.toLowerCase() : ''; // Check if type exists
  
    // Filter based on lowercase properties
    return (
      name.includes(query.toLowerCase()) ||
      color.includes(query.toLowerCase()) ||
      type.includes(query.toLowerCase())
    );
  });
  

  // ----------- Radio Filtering -----------
  const handleChange = (event) => {
    const { value, checked } = event.target;
    console.log(value, checked);
    if (checked) {
      setSelectedCategories([...selectedCategories, value]);
    } else {
      setSelectedCategories(
        selectedCategories.filter((category) => category !== value)
      );
    }
  };

  // =======check filter price======
  const handlePrice = (event) => {
    const { value, checked } = event.target;
    if (checked) {
      setSelectedRanges([...selectedRanges, value]);
    } else {
      setSelectedRanges(selectedRanges.filter((range) => range !== value));
    }
  };
  const handleClick = (item) => {
    let isPresent = false;
    cart.forEach((product) => {
      if (item.id === product.id) isPresent = true;
    });
    if (isPresent) {
      setWarning(true);
      setTimeout(() => {
        setWarning(false);
      }, 2000);
      return;
    }
    setCart([...cart, item]);
  };
  // ------------ Button Filtering -----------

  function filteredData(products, selectedCategories, selectedRanges, query) {
    let filteredProducts = products;

    // Filtering Input Items
    if (query) {
      filteredProducts = filteredItems;
    }

    // Applying selected filter
    if (selectedCategories.length > 0) {
      filteredProducts = filteredProducts.filter(
        ({ category, color }) =>
          selectedCategories.includes(category) ||
          selectedCategories.includes(color)
      );
    }
    if (selectedRanges.length > 0) {
      filteredProducts = filteredProducts.filter(({ newPrice }) => {
        for (const range of selectedRanges) {
          const [start, end] = range.split("-").map(Number);
          if (newPrice >= start && newPrice <= end) {
            return true;
          }
        }
        return false;
      });
    }
    filteredProducts = filteredProducts.slice(firstPostIndex, lastPostIndex);
    return filteredProducts.map((item) => (
      <div className="col" key={Math.random()}>
        <Card
          key={Math.random()}
          item={item}
          img={item.img}
          title={item.title}
          prevPrice={item.prevPrice}
          newPrice={item.newPrice}
          Name={item.Name}
          handleClick={handleClick}
        />
      </div>
    ));
  }

  const result = filteredData(
    products,
    selectedCategories,
    selectedRanges,
    query
  );

  return (
    <div>
      {warning && (
        <div
          className="alert alert-warning w-50 d-flex m-auto  fw-bold "
          role="alert"
        >
          Item is already added to your cart
        </div>
      )}
      <div className="pt-5">
      <Search query={query} handleInputChange={handleInputChange}/>
      </div>

      <div className="row g-0 ">
        
        <div className=" col-md-3">
          
          <Sidebar handleChange={handleChange} handlePrice={handlePrice} />
          
        </div>
        <div className="col-md-12 col-xl-9">
          <Products result={result} />
          <Pagination
            totalPosts={products.length}
            postsPerPage={postsPerPage}
            setCurrentPage={setCurrentPage}
            currentPage={currentPage}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
