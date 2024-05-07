import "./Colors.css";
import Input from "../../input/Input";

const Colors = ({ handleChange }) => {
  return (
    <>
      <div>
        <h2 className="sidebar-title color-title d-flex">Colors</h2>
        <ul className="list-unstyled">
<li>
<Input
          handleChange={handleChange}
          value="black"
          title="Black"
          name="test1"
          color="black"
        />
  </li>
 <li><Input
          handleChange={handleChange}
          value="white"
          title="White"
          name="test1"
          color="white"
        />
 
 </li>
 <li>
 <Input
          handleChange={handleChange}
          value="red"
          title="Red"
          name="test1"
          color="red"
        />

 
 </li>
<li>
<Input
          handleChange={handleChange}
          value="purple"
          title="Purple"
          name="test1"
          color="purple"
        />
  </li>
        
        
       
       </ul>

       

        

       
       

      </div>
    </>
  );
};

export default Colors;
