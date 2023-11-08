import React from "react";
import Cartitem from "./Cartitem";
class Cart extends React.Component{
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
    render(){
      
        
        return(
            <div className="cart">
                <h1>Cart</h1>
                <Cartitem/>
                <Cartitem/>
                <Cartitem/>
                

            </div>
        )
    }

}
export default Cart;