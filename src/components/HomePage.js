import React,{Component} from 'react';
import MainContent from './mainContent/MainContent'
import ExtraContent from './mainContent/ExtraContent'
import RelatedImages from './mainContent/RelatedImages'
import RelatedPosts from './mainContent/RelatedPosts';
import './HomePage.css'
export default class HomePage extends Component{
    render(){
        return(
            <div className="container">
                <MainContent/>
                <ExtraContent/>
                <div className="container_inside">
                    <RelatedImages/>
                    <RelatedPosts/>
                </div>
            </div>
        )
    }
}