import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { productSearch } from "../redux/productAction";

const Header = () => {
  const result = useSelector((state) => state.cartData);
  const dispatch = useDispatch();
  // console.warn("data in header", result);
  const typingTimeoutRef = useRef(null);
  // useRef giúp tạo ra 1 object và object này không thay đổi giữa những lần render

  const handleSearch = (e) => {
    const value = e.target.value;
    // cần tạo 1 var to keep e.target.value vì e.target.value sẽ release

    // debounce
    if (typingTimeoutRef.current) {
      clearTimeout(typingTimeoutRef.current);
    }

    typingTimeoutRef.current = setTimeout(() => {
      dispatch(productSearch(value));
    }, 500);
  };

  return (
    <div className="header">
      <Link to="/">
        <h1 className="logo">E-Comm</h1>
      </Link>
      <div className="search-box">
        <input
          type="text"
          onChange={handleSearch}
          placeholder="Search Product"
        />
      </div>

      <Link to="/cart">
        <div className="cart-div">
          <span>{result.length}</span>
          <img
            src="https://cdn-icons-png.flaticon.com/512/263/263142.png"
            alt=""
          />
        </div>
      </Link>
    </div>
  );
};

export default Header;
