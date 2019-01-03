import React,{Component} from 'react'
import './SidebarToggleButton.css';
export default class SidebarToggleButton extends Component{
    render(){
        return(
            <button className="toggle-button" onClick={this.props.click}>
                <div className="toggle-button__line"/>
                <div className="toggle-button__line"/>
                <div className="toggle-button__line"/>
            </button>
        )
    }
}