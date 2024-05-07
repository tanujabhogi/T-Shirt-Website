const Input = ({ handleChange, value, title, name }) => {
    return (
     
      <div className="form-check d-flex">
      <input onChange={handleChange} className="form-check-input " type="checkbox" id="inlineCheckbox1" value={value} name={name}></input>
  
      <label className="form-check-label mx-2" for="inlineCheckbox1">{title}</label>
    </div>
    );
  };
  
  export default Input;
  