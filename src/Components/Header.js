import React, { Component } from 'react';


class Header extends Component {
  render() {
    return (

      <header className="header">
        <div className="header_overlay" />
        <div className="header_content d-flex flex-row align-items-center justify-content-start">
          <div className="logo">
            <a href="#">
              <div className="d-flex flex-row align-items-center justify-content-start">
                <div><img src="images/logo_1.png" alt /></div>
                <div>Cửa Hàng Thời Trang</div>
              </div>
            </a>	
          </div>
          <div className="header_right d-flex flex-row align-items-center justify-content-start ml-auto">
            {/* Search */}
            <div className="header_search">
              <form action="#" id="header_search_form">
                <input type="text" className="search_input" placeholder="Tìm kiếm sản phẩm" required="required" />
                <button className="header_search_button"><img src="images/search.png" alt /></button>
              </form>
            </div>
            {/* User */}
            <div className="user"><a href="#"><div><img src="images/user.svg" alt="https://www.flaticon.com/authors/freepik" /></div></a></div>
            {/* Cart */}
            <div className="cart"><a href="cart.html"><div><img src="images/cart.svg" alt="https://www.flaticon.com/authors/freepik" /></div></a></div>
            {/* Phone */}
            <div className="header_phone d-flex flex-row align-items-center justify-content-start">
              <div><div><img src="images/phone.svg" alt="https://www.flaticon.com/authors/freepik" /></div></div>
              <div>+84372109881</div>
            </div>
          </div>
        </div>
      </header>

    );
  }
}

export default Header;
