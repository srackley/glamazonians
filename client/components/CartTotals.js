import React, {Component} from 'react';

export class CartTotals extends Component {

  getCartTotal() {
    const individualPrices = this.props.cart.map(
      el => el.quantityInCart * el.price / 100
    );
    const total = individualPrices.reduce((sum, value) => sum + value);
    return Number(total.toFixed(2));
  }

  componentWillUpdate() {
    this.getCartTotal();
  }

  render(){
  return (
    <div className="totals">
    <div className="totals-item">
      <label>Subtotal</label>
      <div className="totals-value">
        {this.getCartTotal()}
      </div>
    </div>
    <div className="totals-item">
      <label>Tax (5%)</label>
      <div className="totals-value">
        {(this.getCartTotal() * 0.0635).toFixed(2)}
      </div>
    </div>
    <div className="totals-item">
      <label>Shipping</label>
      <div className="totals-value">
        {(this.getCartTotal() * 0.08).toFixed(2)}
      </div>
    </div>
    <div className="totals-item totals-item-total">
      <label>Total:</label>
      <div className="totals-value">
        {' '}
        {(this.getCartTotal() * 1.1435).toFixed(2)}
      </div>
    </div>
  </div>
  );
}
}

export default CartTotals;
