import React from "react";

class Product extends React.Component {
    // componentDidMount(){
    //     this.props.getProductsFn()
    // }
  render() {
    return (
      <div>
        <div>Product</div>
        <h3>{this.props.inventory.product_name}</h3>
        <h3>${this.props.inventory.price}</h3>
        <img src={this.props.inventory.image} alt="item" />
        <button onClick={() => this.props.deleteFn(this.props.id)}>Delete</button>
        <button onClick={() => this.props.select(this.props.index)}>Edit</button>
      </div>
    );
  }
}

export default Product;
