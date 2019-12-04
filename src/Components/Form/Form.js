import React from 'react'
import Axios from 'axios'

class Form extends React.Component {
    constructor(){
        super()
        this.state = {
            id: 0,
            product_name: '',
            price: 0,
            image: ''
        }
        this.handleInput = this.handleInput.bind(this)
        this.cancel = this.cancel.bind(this)
        // this.create = this.create.bind(this)
    }
    componentDidUpdate(prevProps,prevState){
        if(prevState.editProduct !== this.state){
            console.log('things are different here')
        }

    }
    handleInput(e){
        this.setState({
            [e.target.name]: e.target.value
        })
        // console.log(this.state)
    }
    cancel(){
        this.setState({
            product_name: '',
            price: 0,
            image: ''
        })
    }
    componentDidMount(){
        this.props.getInventoryFn()
    }
    create = (body) => {
        Axios.post('/api/product', body).then(
            res => {
                this.setState({
                    inventory: res.data
                })
            }
        )
        this.componentDidMount()
        this.cancel()
    }
    render(){
        const {product_name,image,price} = this.state
        return(
            <div>
                <input placeholder='Image URL' name='image' value={image} onChange={(e) => this.handleInput(e)} type="text"/>
                <input placeholder='Product Name' name='product_name' value={product_name} onChange={(e) => this.handleInput(e)} type="text"/>
                <input placeholder='Price' name='price' value={price} onChange={(e) => this.handleInput(e)} type="number"/>
                <button onClick={this.cancel}>Cancel</button>
                <button onClick={() => this.create({product_name,price,image})}>Add Inventory</button>
            </div>
        )
    }
}


export default Form