// import React from "react";
// // import Cart from "./Cart"
// // import props from 'prop-types';
// class Cartitem extends React.Component {
//   /* constructor() {
//         super();
//         this.state = {
//             title: "Mobile Phone",
//             price: 999,
//             qty: 1,
//             img: ''


//         }
//         // this.increaseQuantity=this.increaseQuantity.bind(this);
//         // this.testing();
//     }
// */
    

// /*

// //     testing(){
// //         const promise=new Promise((resolve,reject)=>{
// //             setTimeout(()=>{
// //                 resolve('done');
// //             },5000);
// //         });
// //             promise.then(()=>{
// //                 this.setState({qty:100});
// //                 console.log("this.state",this.state);
// //             });
    
// // }
    
//      increaseQuantity(){
//         //    qty= qty+1;
//         alert("windows")
//         console.log("this.state",this.state) // error
//         console.log("this",this) //undefined

//             }
//     */
// //     increaseQuantity = () => {
// //         // alert("windows")
// //         //console.log("this.state", this.state) // error
// //         // console.log("this", this) //undefined

// //         /*
// //             //one way but it wont be rendered
// //                  this.state.qty+=1;
// //         */

// //         /*
// //           //one way is using concept of object using setState property use if prev value noy used
// //              this.setState(
// //                     {
// //                         qty:this.state.qty+1
// //                     },
// //                 ()=>{
// //                     console.log("this.state",this.state)
// //                 });
// //         */
        
// //           // 2nd way is using function concept use this if previous value is needed
// //            this.setState((prevState)=>{
// //             return{
// //                 qty:prevState.qty+1
// //             }
// //            },()=>{
// //             console.log("this.state",this.state);
// //            }); 
        
// //     }


// //     decreaseQuantity = () => {
// //         /*
// //          const{qty}=this.state;
// //          if(qty==0){
// //             return;
// //          }
// //         */ 
// //         if(this.state.qty>0){

// //            this.setState((prevState)=>{
// //             return{
// //                 qty:prevState.qty-1
// //             }
// //            },()=>{
// //             console.log("this.state",this.state)
// //            }); 
        
// //     }
    
    
// // }
// // */


//     render() {
//         console.log("this.props",this.props);
//         // destructuring
//         // const { title, price, qty } = this.state;
//         const {title, price, qty} = this.props.product;
//         const {product,onIncreaseQuantity, onDecreaseQuantity,onDelete} = this.props;



//         return (
//             <div className="cart-item">
//                 <div className="left-block">
//                     <img alt="" style={styles.image} />
//                 </div>
//                 <div className="right-block">
//                     {/* <div style={{fontSize:25}}>Title</div>
//                     <div style={{color:'#777'}}>Rs:</div>
//                     <div style={{color:'#777'}}>Qty:</div> */}
//                     {/* <div style={{fontSize:25}}>{this.state.title}</div>
//                     <div style={{color:'#777'}}>Rs:{this.state.price}</div>
//                     <div style={{color:'#777'}}>Qty:{this.state.qty}</div> */}
//                     <div style={{ fontSize: 25 }}>{title}</div>
//                     <div style={{ color: '#777' }}>Rs:{price}</div>
//                     <div style={{ color: '#777' }}>Qty:{qty}</div>
//                     <div className="cart-item-actions">
//                         <img alt="increase"
//                             className="action-icons"
//                             src="https://cdn-icons-png.flaticon.com/128/992/992651.png"
//                             //    onClick={this.increaseQuantity}
//                             // // one way
//                             //    onClick={this.increaseQuantity.bind(this)}

//                             // onClick={this.increaseQuantity}
//                             // onClick={()=>this.props.onIncreaseQuantity(this.props.product)}
//                             onClick={()=>onIncreaseQuantity(product)}


//                         />

//                         <img alt="decrease"
//                             className="action-icons"
//                             src="https://cdn-icons-png.flaticon.com/128/1828/1828906.png"
//                             // onClick={this.decreaseQuantity}
//                             // onClick={()=>this.props.onDecreaseQuantity(this.props.product)}
//                             onClick={()=>onDecreaseQuantity(product)}


//                         />

//                         <img alt="delete"
//                             className="action-icons"
//                             src="https://cdn-icons-png.flaticon.com/128/1214/1214428.png" 
//                             // onClick={()=>this.props.onDelete(this.props.product)}
//                             onClick={()=>onDelete(product.id)}

//                         />
//                     </div>
//                 </div>
//             </div>

//         );
//     }
// }
// // styling using object type
// const styles = {
//     image: {
//         height: 110,
//         width: 110,
//         borderRadius: 4,
//         // padding:10,
//         background: '#ccc'
//     }
// }
// export default Cartitem;



import React from "react";
// import Cart from "./Cart"
// import props from 'prop-types';
const Cartitem =(props)=> {



    
        // console.log("this.props",this.props);
        // destructuring
        // const { title, price, qty } = this.state;
        const {title, price, qty} = props.product;
        const {product,onIncreaseQuantity, onDecreaseQuantity,onDelete} = props;



        return (
            <div className="cart-item">
                <div className="left-block">
                    <img alt="" style={styles.image} src={product.img} />
                </div>
                <div className="right-block">
                    {/* <div style={{fontSize:25}}>Title</div>
                    <div style={{color:'#777'}}>Rs:</div>
                    <div style={{color:'#777'}}>Qty:</div> */}
                    {/* <div style={{fontSize:25}}>{this.state.title}</div>
                    <div style={{color:'#777'}}>Rs:{this.state.price}</div>
                    <div style={{color:'#777'}}>Qty:{this.state.qty}</div> */}
                    <div style={{ fontSize: 25 }}>{title}</div>
                    <div style={{ color: '#777' }}>Rs:{price}</div>
                    <div style={{ color: '#777' }}>Qty:{qty}</div>
                    <div className="cart-item-actions">
                        <img alt="increase"
                            className="action-icons"
                            src="https://cdn-icons-png.flaticon.com/128/992/992651.png"
                            //    onClick={this.increaseQuantity}
                            // // one way
                            //    onClick={this.increaseQuantity.bind(this)}

                            // onClick={this.increaseQuantity}
                            // onClick={()=>this.props.onIncreaseQuantity(this.props.product)}
                            onClick={()=>onIncreaseQuantity(product)}


                        />

                        <img alt="decrease"
                            className="action-icons"
                            src="https://cdn-icons-png.flaticon.com/128/1828/1828906.png"
                            // onClick={this.decreaseQuantity}
                            // onClick={()=>this.props.onDecreaseQuantity(this.props.product)}
                            onClick={()=>onDecreaseQuantity(product)}


                        />

                        <img alt="delete"
                            className="action-icons"
                            src="https://cdn-icons-png.flaticon.com/128/1214/1214428.png" 
                            // onClick={()=>this.props.onDelete(this.props.product)}
                            onClick={()=>onDelete(product.id)}

                        />
                    </div>
                </div>
            </div>

        );
    }

// styling using object type
const styles = {
    image: {
        height: 110,
        width: 110,
        borderRadius: 4,
        // padding:10,
        background: '#ccc'
    }
}
export default Cartitem;