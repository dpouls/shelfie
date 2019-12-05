import React from 'react'
import Axios from 'axios'

class Form extends React.Component {
    constructor(){
        super()
        this.state = {
            id: null,
            product_name: '',
            price: 0,
            image: '',
            edit: false
        }
        this.handleInput = this.handleInput.bind(this)
        this.cancel = this.cancel.bind(this)
        // this.create = this.create.bind(this)
    }
    componentDidUpdate(oldProps){
        let { id, name, price, img } = this.props.editProduct;
        if(oldProps.editProduct.id !== this.props.editProduct.id){
            this.setState({
                id,name,price,img,edit: true
            })
            // this.props.getInventoryFn()
            // console.log(id)
            // console.log(this.state)
            console.log('things are different here')
        }

    }
    handleInput(e){
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    cancel(){
        this.setState({
            product_name: '',
            price: 0,
            image: ''
        })
    }
    handleSave(){
        const {product_name,image,price} = this.state
        const {id} = this.props.editProduct
        this.props.updateFn(id,{product_name,price,image})
        this.cancel()
        this.setState({
            edit: !this.state.edit
        })



    }
    create = (body) => {
        Axios.post('/api/product', body).then(
            res => {
                this.setState({
                    inventory: res.data
                })
                this.props.getInventoryFn()
                this.cancel()
            }
        )      
    }
    render(){
    const {product_name,image,price} = this.state
        return(
            <div>
                <input placeholder='Image URL' name='image' value={image} onChange={(e) => this.handleInput(e)} type="text"/>
                <input placeholder='Product Name' name='product_name' value={product_name} onChange={(e) => this.handleInput(e)} type="text"/>
                <input placeholder='Price' name='price' value={price} onChange={(e) => this.handleInput(e)} type="number"/>
                <button onClick={this.cancel}>Cancel</button>
                {!this.state.edit ? <button onClick={() => this.create({product_name,price,image})}>Add Inventory</button> : <button onClick={() => this.handleSave()}>Save Changes</button> }
                
            </div>
        )
    }
}


export default Form