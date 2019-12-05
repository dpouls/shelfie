module.exports = {
    getInventory: (req,res) => {
        const db = req.app.get('db')
        db.get_inventory().then(products => {
            res.status(200).send(products)
        }).catch(err => {
            res.status(500).send({errorMessage: 'Sorry mate'})
            console.log(err)
        })
    },
    createProduct: (req,res) => {
        const db = req.app.get('db')
        const {product_name, price, image} = req.body
        db.create_product([product_name, price, image]).then(product => {
            res.status(200).send(product)
        }).catch(err => {
            res.status(500).send({errorMessage: 'Sorry mate'})
            console.log(err)
        })
    },
    deleteProduct: (req, res) => {
        const db = req.app.get('db')
        const {id} = req.params
        // console.log(req)
        db.delete_product(id).then(products => {
            res.status(200).send(products)
        }).catch(err => {
            res.status(500).send({errorMessage: 'Sorry mate'})
            console.log(err)
        })
    },
    editProduct: (req, res) => {
        const db = req.app.get('db')
        const {params, query} = req
        const {product_name, price, image} = req.body
        console.log("params",params)
        console.log("body",req.body)
        console.log("query",req.query)
        db.edit_product([product_name,price,image,params.id])
        .then(product => {
            res.status(200).send(product)
        }).catch(err => {
            res.status(500).send({errorMessage: 'Sorry mate'})
            console.log(err)
        })
    }
}