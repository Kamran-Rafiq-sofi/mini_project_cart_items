import './App.css';
// import Cartitem from "./Cartitem";
import Cart from "./Cart";
import Navbar from './Navbar';
import React from 'react';

// function App() {
  class App extends React.Component{
    constructor() {
      super()
      this.state={
          products:[
              {
                  price: 9999,
                  title: 'MobilePhone',
                  qty: 160,
                  img: 'https://th.bing.com/th/id/OIP.k_g1iJ08lJx2Cu6De4ICUAHaD4?pid=ImgDet&rs=1',
                  id: 1,
              },
              {
                  price: 1999,
                  title: 'Watch',
                  qty: 100,
                  img: 'https://th.bing.com/th/id/OIP.kUws0OQJhTBr6E52Quq-fQHaHa?pid=ImgDet&rs=1',
                  id: 2,
              },
              {
                  price: 59999,
                  title: 'Laptop',
                  qty: 1,
                  img: 'https://th.bing.com/th/id/OIP.QMA0sC1zV5qVD3cA_Ytx1AHaGS?pid=ImgDet&rs=1',
                  id: 3,
              },
          ]
      // this.increaseQuantity=this.increaseQuantity.bind(this);
      // this.testing();
  }
}

  // cart=()=>{
  //     for(let i=0;i<6;i++){
  //         return{
  //             <div>
  //             <cartitem>
  //             </div>
  //         }
  //     }
  // }
  // cart=()=>{
  //     for(let i=0;i<6;i++){
  //         return{
              
  //             {cartitem}
              
  //         }
  //     }
  // }
  handleIncreaseQuantity=(product)=>{
  console.log("increasing quantity of product",product);
  const{products}=this.state;
  const index=products.indexOf(product); 
  products[index].qty+=1;
  this.setState({
      products:products
  })
  }

  handleDecreaseQuantity=(product)=>{
      console.log("decreasing quantity of product",product);
      const{products}=this.state;
      const index=products.indexOf(product); 
      products[index].qty-=1;
      
      this.setState({
          
          products:products
      })
      }
      handleDelete=(id)=>{
          console.log("deleting specified product",id);
      const{products}=this.state;
      // const index=products.indexOf(product); 
      // products[index].qty-=1;
      // this.setState({
      //     products:products
      // })
const items=products.filter((item)=>
  item.id!==id);
  this.setState({ products: items});

}
getCartCount=()=>{
  const{products}=this.state;
  let count=0;
  products.forEach((product)=>{
    count+=product.qty;

  })
  

return count;
}
getCartTotal=()=>{
  const{products}=this.state;
  let cartTotal=0;
  products.map((product)=>{
    cartTotal+=(product.qty*product.price);

  });
  return cartTotal;
}

      
 
    render(){
      const {products}=this.state;
  return (
    <div className="App">
      <Navbar count={this.getCartCount()}/>
      <h1>Cart_Items</h1>
      {/* <Cartitem/> */}
      <Cart
      products={products}
          onIncreaseQuantity={this.handleIncreaseQuantity}
          onDecreaseQuantity={this.handleDecreaseQuantity}
          onDelete={this.handleDelete}
      />
      <div style={styles.cartTotal}>Total:{this.getCartTotal()}</div>
    </div>
  );
}
  }
  const styles={
    cartTotal:{
      fontSize:40,
      paddingLeft:10
    }
  }

export default App;
