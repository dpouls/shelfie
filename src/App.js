import React from "react";
import "./App.css";
import Dashboard from "./Components/Dashboard/Dashboard";
import Form from "./Components/Form/Form";
import Header from "./Components/Header/Header";
import Axios from "axios";




class App extends React.Component {
  constructor(){
    super()
    this.state = {
      inventory: [],
      editProduct: {}
    }
    this.getInventory = this.getInventory.bind(this)
    this.update = this.update.bind(this)
    this.selectProduct = this.selectProduct.bind(this)
  }


  selectProduct(i){
    // console.log(i)
    this.setState({
      editProduct:  i
    })
    // console.log(this.state.editProduct)
  }

  update(id, body){
    Axios.put(`/api/product/${id}`,body).then(res =>{
      this.setState({
        inventory: res.data
      })
    })
  }

  componentDidMount(){
    this.getInventory()
  }

  getInventory = () => {
    Axios.get('/api/inventory').then(res => {
      this.setState({
        inventory: res.data
      })
    })
  }
  render() {
    return (
      <div className="App">
        <Header />
        <Dashboard 
        refreshFn={this.componentDidMount}
        getInventoryFn={this.getInventory}
        inventory={this.state.inventory}
        selectFn={this.selectProduct} />
        <Form 
        updateFn={this.update}
        editProduct={this.state.editProduct} 
        refreshFn={this.componentDidMount} 
        inventory={this.state.inventory} 
        getInventoryFn={this.getInventory}/>
      </div>
    );
  }
}
export default App;
