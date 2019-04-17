import React, { Component } from 'react';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import Billing from '../Components/CheckoutPage/Billing';
import Order from '../Components/CheckoutPage/Order';

class Checkout extends Component {
  render() {
    return (
       
            <div class="super_container">
                <Header />
                <div class="super_container_inner">
                    <div class="super_overlay"></div>
                    <div class="checkout">
                        <div class="container">
                            <div class="row">
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
