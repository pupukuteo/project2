import React, {Component} from 'react';

class Order extends Component {
	render() {
		return (
			<div className="col-lg-6 cart_col">
	        	<div className="cart_total">
	         		<div className="cart_extra_content cart_extra_total">
	            		<div className="checkout_title">Tổng giỏ hàng</div>
	            			<ul className="cart_extra_total_list">
	             				<li className="d-flex flex-row align-items-center justify-content-start">
				                	<div className="cart_extra_total_title">Áo phông</div>
				                	<div className="cart_extra_total_value ml-auto">200.000 VND</div>
	              				</li>
	              				<li className="d-flex flex-row align-items-center justify-content-start">
				                	<div className="cart_extra_total_title">Áo Khoác</div>
				                	<div className="cart_extra_total_value ml-auto">500.000 VND</div>
	              				</li>
	              				<li className="d-flex flex-row align-items-center justify-content-start">
					                <div className="cart_extra_total_title">Tiền ship</div>
					                <div className="cart_extra_total_value ml-auto">Miễn phí</div>
	             				</li>
	              				<li className="d-flex flex-row align-items-center justify-content-start">
					                <div className="cart_extra_total_title">Tổng cộng</div>
					                <div className="cart_extra_total_value ml-auto">700. 000 VND</div>
	             				</li>
	           				</ul>
	           		 	<div className="cart_text">
	              			<p>Cách thức giao hàng tiện lợi nhanh chóng. Thanh toán sau khi nhận hàng, có thể đổi trả nếu không đúng yêu cầu chất lượng sản phẩm.</p>
	              			<p>Cửa hàng thời trang luôn mang đến sự tin dùng cho khách hàng</p>
	            		</div>
	            		<div className="checkout_button trans_200"><a href="checkout.html">Đặt hàng</a></div>
	          		</div>
	        	</div>
	      	</div>
    	);
	}
}
export default Order;