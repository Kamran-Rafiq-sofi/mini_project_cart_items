import React from "react";
class Cartitem extends React.Component {
     constructor(){
        super();
        this.state={
            title:"Mobile Phone",
            price:999,
            qty:1,
            img:''


        }
        this.increaseQuantity=this.increaseQuantity.bind(this);
     }
    //  increaseQuantity(){
    //     //    qty= qty+1;
    //     alert("windows")
    //     console.log("this.state",this.state) // error
    //     console.log("this",this) //undefined

    //         }

    increaseQuantity=()=>{
        //    qty= qty+1;
        alert("windows")
        console.log("this.state",this.state) // error
        console.log("this",this) //undefined

            }
    render() {
        // destructuring
        const {title, price, qty}=this.state;
        
        return(
            <div className="cart-item">
                <div className="left-block">
                    <img alt=""style={styles.image}/>
                </div>
                <div className="right-block">
                    {/* <div style={{fontSize:25}}>Title</div>
                    <div style={{color:'#777'}}>Rs:</div>
                    <div style={{color:'#777'}}>Qty:</div> */}
                    {/* <div style={{fontSize:25}}>{this.state.title}</div>
                    <div style={{color:'#777'}}>Rs:{this.state.price}</div>
                    <div style={{color:'#777'}}>Qty:{this.state.qty}</div> */}
                    <div style={{fontSize:25}}>{title}</div>
                    <div style={{color:'#777'}}>Rs:{price}</div>
                    <div style={{color:'#777'}}>Qty:{qty}</div>
                    <div className="cart-item-actions">
                       <img alt="increase" 
                       className="action-icons" 
                       src="https://cdn-icons-png.flaticon.com/128/992/992651.png" 
                    //    onClick={this.increaseQuantity}
                    // // one way
                    //    onClick={this.increaseQuantity.bind(this)}

                    onClick={this.increaseQuantity}


                       />

                       <img alt="decrease" 
                       className="action-icons" 
                       src="https://cdn-icons-png.flaticon.com/128/1828/1828906.png"/>

                       <img alt="delete" 
                       className="action-icons" 
                       src="https://cdn-icons-png.flaticon.com/128/1214/1214428.png"/>
                    </div>
                </div>
            </div>

        );
    }
}
// styling using object type
const styles={
    image:{
        height:110,
        width:110,
        borderRadius:4,
        // padding:10,
        background:'#ccc'
    }
}
export default Cartitem;