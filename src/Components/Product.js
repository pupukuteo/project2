import React, { Component } from 'react';
import ProductImage from '../Components/DetailProductPage/ProductImage';
import ProductInfo from '../Components/DetailProductPage/ProductInfo';
import Header from '../Components/Header';
import Footer from '../Components/Footer';


class Product extends Component {
  render() {
    return (
       
            <div class="super_container">
                <Header />
                <div class="super_container_inner">
                    <div class="product">
                        <div class="container">
                            <div class="row">
                                <ProductImage />
                                <ProductInfo />
                            </div>
                        </div>
                    </div>
                   
                    <Footer />
                </div>
            </div>

      
    );
  }
}

export default Product;
