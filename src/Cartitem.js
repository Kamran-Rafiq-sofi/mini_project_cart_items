import React from "react";
class Cartitem extends React.Component {
    render() {
        return(
            <div className="cart-item">
                <div className="left-block">
                    <img alt=""style={styles.image}/>
                </div>
                <div className="right-block">
                    <div style={{fontSize:25}}>Title</div>
                    <div style={{color:'#777'}}>Rs:</div>
                    <div style={{color:'#777'}}>Qty:</div>
                    <div className="cart-item-actions">
                       {/* buttons  */}
                    </div>
                </div>
            </div>

        );
    }
}
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