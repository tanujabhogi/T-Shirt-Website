

const Card = ({ item,img, title, prevPrice, newPrice, Name,handleClick }) => {
  return (
    <div>
      <div className="card shadow p-3  bg-body rounded ">
     
        <img src={img} alt={title} className="card-img-top " ></img>
       
      
        <div className="card-body ">
          <h5 className="card-title"> {Name}</h5>
          <div className="price d-flex justify-content-evenly text-dark">
            <div className="fw-bold">
            Rs {newPrice}
            </div>
          
              <del className="">Rs {prevPrice}</del> 
              
                <button className="btn btn-outline-warning" onClick={()=>handleClick(item)} >Add to Cart</button>
             
            </div>
           
          
        </div>
      </div>
      
    </div>
  );
};

export default Card;
