import React, { Component } from 'react';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import Billing from '../Components/CheckoutPage/Billing';
import Order from '../Components/CheckoutPage/Order';

class Checkout extends Component {
  render() {
    return (
       
            <div className="super_container">
                <Header />
                <div className="super_container_inner">
                    <div className="super_overlay"></div>
                    <div className="checkout">
                        <div className="container">
                            <div className="row">
                                <Billing />
                                <Order />
                            </div>
                        </div>
                    </div>
                <Footer />
                </div>
            </div>

      
    );
  }
}

export default Checkout;
