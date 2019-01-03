import React,{Component} from 'react'
import {
    Link
} from 'react-router-dom';
import './Sidebar.css';
import userImage from '../images/user.png'
export default class Sidebar extends Component{

    
    render(){
        let sidebarClases='side-drawer';
        if(this.props.show){
            sidebarClases='side-drawer open';
        }
        return(
            <nav className={sidebarClases}>
                <div className="Hero">
                <Link to="/profile"><img src={userImage} className="userLogo"   alt="user"/><br/>
                    Kutay Koc</Link>
                </div>
                <ul>
                    <li><i className="Icons fa fa-home"><Link to="/"> Home</Link></i></li>
                    <li><i className="Icons fa fa-book"><Link to="/team"> Our Team</Link></i></li>
                    <li><i className="Icons fa fa-user"><Link to="/profile">  Profile</Link></i></li>
                    <li><i className="Icons fa fa-gear"><Link to="/settings"> Settings</Link></i></li>
                </ul>
            </nav>
        )
    }
}