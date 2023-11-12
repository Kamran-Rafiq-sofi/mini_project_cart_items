// import React from "react";
// class Navbar extends React.Component{
//     render(){
//         // function Navbar=()=>{
//         //     const
//         // }
// return (
//     <div style={styles.nav}>
//         <div style={styles.cartIconContainer}>
//             <img src="https://cdn-icons-png.flaticon.com/128/1170/1170678.png" alt="loading" style={styles.cartIcon}/>
//             <span style={styles.cartCount}>7</span>

//         </div>

//     </div>
// )
        
//     }
// }
// const styles={
//     nav:{
//         height:70,
//         background:'#4267b2',
//         display:'flex',
//         justifyContent:'flex-end',
//         alignItems:'center'


//     },
//     cartIconContainer:{
//         position:'relative'

//     },
//     cartIcon:{
//         height:32,
//         marginRight:20


//     },
//     cartCount:{
//         background:'yellow',
//         borderRadius:'50%',
//         padding:'4px 8px',
//         position:'absolute',
//         right:0,
//         top:-9

//     }
    
// }
// export default Navbar;

import React from "react";

        // function Navbar=(props){
        
const Navbar=(props)=>{
return (
    <div style={styles.nav}>
        <div style={styles.cartIconContainer}>
            <img src="https://cdn-icons-png.flaticon.com/128/1170/1170678.png" alt="loading" style={styles.cartIcon}/>
            <span style={styles.cartCount}>{props.count}</span>

        </div>

    </div>
)
        
    }

const styles={
    nav:{
        height:70,
        background:'#4267b2',
        display:'flex',
        justifyContent:'flex-end',
        alignItems:'center'


    },
    cartIconContainer:{
        position:'relative'

    },
    cartIcon:{
        height:32,
        marginRight:20


    },
    cartCount:{
        background:'yellow',
        borderRadius:'50%',
        padding:'8px 8px',
        position:'absolute',
        right:0,
        top:-9

    }
    
}
export default Navbar;