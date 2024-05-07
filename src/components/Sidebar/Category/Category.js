import "./Category.css";
import Input from "../../input/Input";

function Category({ handleChange }) {
  return (
    <div>
      <h2 className="sidebar-title d-flex ">Category</h2>

      <div>
       <ul className="list-unstyled">
<li> <Input
          handleChange={handleChange}
          value="Polo"
          title="Polo"
          name="test"
        />
  </li>
 <li>
 <Input
          handleChange={handleChange}
          value="Hoodie"
          title="Hoodie"
          name="test"
        />
 </li>
 <li>
 <Input
          handleChange={handleChange}
          value="Round"
          title="Round"
          name="test"
        />
 </li>

        
        
       
       </ul>
       
      </div>
    </div>
  );
}

export default Category;
