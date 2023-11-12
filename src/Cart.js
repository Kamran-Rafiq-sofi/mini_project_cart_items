import React from "react";
import Cartitem from "./Cartitem";
// class Cart extends React.Component{
    const Cart=(props)=>{
//     constructor() {
//         super()
//         this.state={
//             products:[
//                 {
//                     price: 9999,
//                     title: 'MobilePhone',
//                     qty: 160,
//                     img: '',
//                     id: 1,
//                 },
//                 {
//                     price: 1999,
//                     title: 'Watch',
//                     qty: 100,
//                     img: '',
//                     id: 2,
//                 },
//                 {
//                     price: 59999,
//                     title: 'Laptop',
//                     qty: 1,
//                     img: '',
//                     id: 3,
//                 },
//             ]
//         // this.increaseQuantity=this.increaseQuantity.bind(this);
//         // this.testing();
//     }
// }

//     // cart=()=>{
//     //     for(let i=0;i<6;i++){
//     //         return{
//     //             <div>
//     //             <cartitem>
//     //             </div>
//     //         }
//     //     }
//     // }
//     // cart=()=>{
//     //     for(let i=0;i<6;i++){
//     //         return{
                
//     //             {cartitem}
                
//     //         }
//     //     }
//     // }
//     handleIncreaseQuantity=(product)=>{
//     console.log("increasing quantity of product",product);
//     const{products}=this.state;
//     const index=products.indexOf(product); 
//     products[index].qty+=1;
//     this.setState({
//         products:products
//     })
//     }

//     handleDecreaseQuantity=(product)=>{
//         console.log("decreasing quantity of product",product);
//         const{products}=this.state;
//         const index=products.indexOf(product); 
//         products[index].qty-=1;
        
//         this.setState({
            
//             products:products
//         })
//         }
//         handleDelete=(id)=>{
//             console.log("deleting specified product",id);
//         const{products}=this.state;
//         // const index=products.indexOf(product); 
//         // products[index].qty-=1;
//         // this.setState({
//         //     products:products
//         // })
// const items=products.filter((item)=>
//     item.id!==id);
//     this.setState({ products: items});

// }

        
//     render(){
        // const arr=[1,2,3,4,5];
        // const arr=[1,2,3,"something"];
        const{products}=props;
      
        
        return(
            <div className="cart">
            {/* {arr}
            {arr.map((item)=>{
                return item+3;
            })} */}
                <h1>Cart</h1>
                {/* <Cartitem qty={1} price={999} title={"watch"} img={''}/>
                // <Cartitem/>
                // <Cartitem/> */}

                {products.map((product)=>{
                      return(
                    <Cartitem 
                      product={product} 
                      key={product.id}
                    //   onIncreaseQuantity={this.handleIncreaseQuantity}
                    //   onDecreaseQuantity={this.handleDecreaseQuantity}
                    //   onDelete={this.handleDelete}

                    onIncreaseQuantity={props.onIncreaseQuantity}
                    onDecreaseQuantity={props.onDecreaseQuantity}
                    onDelete={props.onDelete}
                    />
                      )
                    })};
                {/* <Cartitem/>
                <Cartitem/> */}
                

            </div>
        )
    

}
export default Cart;