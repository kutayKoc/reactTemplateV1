import React,{Component} from 'react';
import './Footer.css';
export default class Footer extends Component{
    render(){
        return(
            <div className="footer">
               <nav className="footer__navigation">
                    <div className="divider"></div>
                    <div className="footer_navigation_items">
                        <ul>
                            <li><i className="IconsFooter fa fa-github"><a href="https://github.com" target="_blank" rel="noopener noreferrer">Github</a></i></li>
                            <li><i className="IconsFooter fa fa-twitter"><a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a></i></li>
                            <li><i className="IconsFooter fa fa-facebook"><a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a></i></li>
                            <li><i className="IconsFooter fa fa-instagram"><a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a></i></li>
                        </ul>
                    </div>
                </nav>
            </div>
        )
    }
}