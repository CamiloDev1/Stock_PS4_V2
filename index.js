const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 3000

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json())

let products = [

  {
  id:1,
  name:'Ghost of Sushima',
  price: 1200,
  image: "images/Producto1.jpg",
  stock:3
},

{
  id:2,
  name:'Resident Evil 2',
  price: 1200,
  image: "images/Producto2.jpg",
  stock:50
},

{
  id:3,
  name:'Spiderman Miles Morales',
  price: 1200,
  image: "images/Producto3.jpg",
  stock:50
},

{
  id:4,
  name:'Spideman PS4',
  price: 1200,
  image: "images/Producto4.jpg",
  stock:50
},

{
  id:5,
  name:'Resident Evil 3',
  price: 1200,
  image: "images/Producto5.jpg",
  stock:50
}

]

app.get('/api/products', (req, res) => {
  res.send(products)
})

app.post('/api/pay', (req, res) => {
  const ids = req.body
  const procutsCopy = products.map(p => ({...p}));
  ids.forEach(id => {
    const product = procutsCopy.find(p => p.id === id);
    if(product.stock > 0){
      product.stock--;
    }
    else{
      throw("Sin stock");
    }
  });
  products = procutsCopy;
  res.send(products); 
});



app.use("/", express.static("fe"));

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});