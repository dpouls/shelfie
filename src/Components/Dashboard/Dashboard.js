import React from 'react'
import Product from '../Product/Product'
import Axios from 'axios'

class Dashboard extends React.Component {
    delete = (id) =>  {
        Axios.delete(`/api/product/${id}`).then(res => {
            this.props.getInventoryFn()    
        })
    }

    render(){
        return(
            <div>
            <div>Dashboard</div>
              {this.props.inventory.map((el,i) => (
                  <div><Product 
                  id={el.id}
                  index={i}
                  key={el.id}
                  deleteFn={this.delete} 
                  inventory={this.props.inventory[i]}
                  select={this.props.selectFn}/></div>
                  ))}  
            </div>
        )
     }
}


export default Dashboard