import "./Product.css";

const Products = ({ result }) => {
  return (
    
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4  mx-3">
 
  {result}
 
  </div>
     
    
  );
};

export default Products;
