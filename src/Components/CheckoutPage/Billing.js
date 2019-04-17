import React, { Component } from 'react';


class Billing extends Component {
  render() {
    return (
        <div className="col-lg-6">
            <div className="billing">
                <div className="checkout_title">Hóa đơn</div>
                  <div className="checkout_form_container">
                    <form action="#" id="checkout_form" className="checkout_form">
                        <div>
                            {/* Tên */}
                            <input type="text" id="checkout_name" placeholder="Tên" className="checkout_input" />
                        </div>
                        <div>
                            {/* Ngày Sinh */}
                            <input type="text" id="checkout_address" className="checkout_input" placeholder="Ngày Sinh" required="required" />
                        </div>
                         <div>
                            {/* Giới tính */}
                            <select name="checkout_gender" id="checkout_gender" className="dropdown_item_select checkout_input" require="required">
                              <option>Nam</option>
                              <option>Nữ</option>
                            </select>
                        </div>
                        <div>
                            {/* Địa chỉ */}
                            <input type="text" id="checkout_zipcode" className="checkout_input" placeholder="Địa chỉ" required="required" />
                        </div>
                            {/* Số điện thoại */}
                        <div>
                            <input type="number" id="checkout_zipcode" className="checkout_input" placeholder="Số điện thoại" required="required" />
                        </div>
                        <div>
                            {/* Email */}
                            <input type="phone" id="checkout_email" className="checkout_input" placeholder="Email" required="required" />
                        </div>
                       {/* <div className="checkout_extra">
                            <ul>
                              <li className="billing_info d-flex flex-row align-items-center justify-content-start">
                                <label className="checkbox_container">
                                  <input type="checkbox" id="cb_1" name="billing_checkbox" className="billing_checkbox" />
                                  <span className="checkbox_mark" />
                                  <span className="checkbox_text">Terms and conditions</span>
                                </label>
                              </li>
                              <li className="billing_info d-flex flex-row align-items-center justify-content-start">
                                <label className="checkbox_container">
                                  <input type="checkbox" id="cb_2" name="billing_checkbox" className="billing_checkbox" />
                                  <span className="checkbox_mark" />
                                  <span className="checkbox_text">Create an account</span>
                                </label>
                              </li>
                              <li className="billing_info d-flex flex-row align-items-center justify-content-start">
                                <label className="checkbox_container">
                                  <input type="checkbox" id="cb_3" name="billing_checkbox" className="billing_checkbox" />
                                  <span className="checkbox_mark" />
                                  <span className="checkbox_text">Subscribe to our newsletter</span>
                                </label>
                              </li>
                            </ul>
                        </div>*/}
                    </form>
                </div>
            </div>
        </div>
    );
  }
}

export default Billing;
