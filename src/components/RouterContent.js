import React,{Component} from 'react'

export default class RouterContent extends Component{
    render(){
        return(
            <div>
            {this.props.children}
            </div>
        )
    }
}