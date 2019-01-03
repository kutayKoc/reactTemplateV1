import React,{Component} from 'react'
import {
    Link
} from 'react-router-dom'
import './RelatedPosts.css'
export default class RelatedPosts extends Component{
    render(){
        return(
            <div className="relatedPosts">
                    <p>Related Posts</p>
                    <Link to="/posts/1"> data1</Link>
                    <Link to="/posts/2"> data2</Link>
                    <Link to="/posts/3"> data3</Link>
                    <Link to="/posts/4"> data4</Link>
                    <Link to="/posts/5"> data5</Link>
            </div>
        )
    }
}