import React,{Component} from 'react';
import {
    Link
} from 'react-router-dom';
import './Header.css';
import SidebarToggleButton from './SidebarToggleButton';
export default class Header extends Component{
    render(){

        return(
            <header className="toolbar">
                <nav className="toolbar__navigation">
                    <div className="toolbar__toggle-button">
                        <SidebarToggleButton click={this.props.menuHandler}/>
                    </div>
                    <div className="toolbar__logo"><Link to="/">Home</Link></div>
                    <div className="divider"></div>
                    <div className="toolbar_navigation_items">
                        <ul>
                            <li><Link to="/">Search</Link></li>
                            <li><Link to="/posts">Posts</Link></li>
                        </ul>
                    </div>
                </nav>
            </header>
        )
    }
}