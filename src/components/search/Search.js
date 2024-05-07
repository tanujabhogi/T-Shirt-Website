import "./Search.css";

const Search = ({ handleInputChange, query }) => {
  return (
   
      
        
       <form action="">
       <input
          id="search"
          
          required
          className="input9"
          type="search"
          onChange={handleInputChange}
          value={query}
          placeholder="Search here ..."
        />
       
        <i class="fa fa-search"></i>
    </form>
   
  );
};

export default Search;
