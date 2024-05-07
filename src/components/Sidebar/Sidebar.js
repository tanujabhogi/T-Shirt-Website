import Category from "./Category/Category";
import Price from "./Price/Price";
import Colors from "./Colors/Colors";
import { GiSettingsKnobs } from "react-icons/gi";
import { VscSettings } from "react-icons/vsc";
import "./Sidebar.css";

const Sidebar = ({ handleChange,handlePrice }) => {
  return (
    <div className="sidebar">
      <div className="sidebar1 mb-2 ">
        <button
          className="btn btn-outline-dark"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasWithBothOptions"
          aria-controls="offcanvasWithBothOptions"
        >
          <GiSettingsKnobs  className="fw-bold fs-5" />
        </button>

        <div
          className="offcanvas offcanvas-start w-50 "
          data-bs-scroll="true"
          tabindex="-1"
          id="offcanvasWithBothOptions"
          aria-labelledby="offcanvasWithBothOptionsLabel"
        >
          <div className="offcanvas-header ">
            <h5 className="offcanvas-title" id="offcanvasWithBothOptionsLabel">
              {" "}
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div className="offcanvas-body ">
            <Category handleChange={handleChange} />
            <Colors handleChange={handleChange} />
            <Price handlePrice={handlePrice} />
          </div>
        </div>
      </div>
      <div className="sidebar2">
        <div className="card shadow p-3 mx-5 bg-body-tertiary rounded ">
          <div className="card-body">
            <Category handleChange={handleChange} />
            <Colors handleChange={handleChange} />
            <Price handlePrice={handlePrice} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
