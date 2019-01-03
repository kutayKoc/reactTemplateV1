import React,{Component} from 'react'
import{
    Link
}from 'react-router-dom';
import './RelatedImages.css'
export default class RelatedImages extends Component{
    render(){

        return(
            <div className="RelatedImages">
                    <p>Related Images</p>
                    <Link to="/posts/1"> <img src="http://www.hdnicewallpapers.com/Walls/Big/Others/Lord_of_The_Rings_Map_Wallpaper.jpg" alt="main"/></Link>
                    <Link to="/posts/2"> <img src="https://stmed.net/sites/default/files/the-lord-of-the-rings-hd-wallpapers-33796-142656.jpg" alt="main"/></Link>
                    <Link to="/posts/3"> <img src="http://www.hdnicewallpapers.com/Walls/Big/Others/Lord_of_The_Rings_Map_Wallpaper.jpg" alt="main"/></Link>
                    <Link to="/posts/4"> <img src="http://www.hdnicewallpapers.com/Walls/Big/Others/Lord_of_The_Rings_Map_Wallpaper.jpg" alt="main"/></Link>
                    <Link to="/posts/5"> <img src="http://www.hdnicewallpapers.com/Walls/Big/Others/Lord_of_The_Rings_Map_Wallpaper.jpg" alt="main"/></Link>
                   
            </div>
            
        )
    }
}