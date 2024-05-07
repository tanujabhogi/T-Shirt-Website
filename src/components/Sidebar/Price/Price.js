import Input from "../../priceinput/Input";

import "./Price.css";

const Price = ({ handlePrice }) => {
  return (
    <>
      <div className="ml">
        <h2 className="sidebar-title price-title d-flex">Price</h2>

        <ul className="list-unstyled">
          <li>
            <Input
              handlePrice={handlePrice}
              value="0-500"
              title="Rs 0 - 500"
              name="test2"
            />
          </li>
          <li>
            <Input
              handlePrice={handlePrice}
              value="501-600"
              title="Rs 501 - 600"
              name="test2"
            />
          </li>
          <li>
            <Input
              handlePrice={handlePrice}
              value="601-800"
              title="Rs 601 - 800"
              name="test2"
            />
          </li>
        </ul>
      </div>
    </>
  );
};

export default Price;
