import React, { Component } from 'react';
import ProductImage from '../Components/DetailProductPage/ProductImage';
import ProductInfo from '../Components/DetailProductPage/ProductInfo';
import Header from '../Components/Header';
import Footer from '../Components/Footer';


class Product extends Component {
  render() {
    return (
       
            <div className="super_container">
                <Header />
                <div className="super_container_inner">
                    <div className="product">
                        <div className="container">
                            <div className="row">
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
