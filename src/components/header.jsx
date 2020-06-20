import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [active, setactive] = useState({ active: false });

  return (
    <>
      <header>
        <nav className="nav">
          <h1>Kiddo</h1>
          <ul className="nav-ul">
            <li>
              <Link to="/"> Home</Link>
            </li>
            <li>
              <Link to="/categories">Categories</Link>
            </li>
            <li>
              <Link to="/store">Store</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
            <li>
              <a href="#f">
                <i className="fas fa-search"></i>
              </a>
            </li>
            <li>
              <a href="#noto">
                <i className="far fa-bell"></i>
              </a>
            </li>
            <li>
              {/*  */}
              <div className="dropdown dropdown--active">
                <a href="#profile" className="nav__img">
                  <img
                    src="./img/avatar.svg"
                    alt="kid"
                    onClick={() =>
                      setactive({
                        active: active.active === true ? false : true,
                      })
                    }
                  />
                </a>
                {/* dropdown */}

                {active.active && (
                  <div className="dropdown__menu">
                    <div className="dropdown__arrowup"></div>
                    <ul className="dropdown dropdown__list">
                      <li className="dropdown dropdown__item">
                        <Link to="/kid">
                          <i className="fa fa-heart"></i> My Profile
                        </Link>
                      </li>
                      <li className="dropdown dropdown__item">
                        <a href="/">
                          <i className="fa fa-heart"></i> Logout
                        </a>
                      </li>
                    </ul>
                  </div>
                )}
              </div>
            </li>
            <li>
              <a href="#lang">EN</a>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Header;
