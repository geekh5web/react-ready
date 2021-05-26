import React, { Component, Fragment } from "react"
class CounterItem extends Component{
    render(){
        console.log("childRender")
        return(
            <Fragment>
                <div>{this.props.number}</div>
            </Fragment>
        )
    }
}
export default CounterItem;