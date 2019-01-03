import React, { Component } from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer'
import Sidebar from './components/Header/Sidebar';
import BackDrop from './components/Header/BackDrop'
import RouterContent from './components/RouterContent'
import HomePage from './components/HomePage'
import UserPage from './components/UserPage'
import Posts from './components/Posts'
import{
  Route,
  Switch,
  withRouter 
} from 'react-router-dom'
class App extends Component {
  state={
    isMenuOpen:false
  }

  sidebarToggleHandler=()=>{
    this.setState((prevState)=>{
      return {isMenuOpen:!this.isMenuOpen}
    });
  }

  backdropClickHandler=()=>{
    this.setState({isMenuOpen:false})
  }
  render() {
    let backdrop;
    if(this.state.isMenuOpen){
      backdrop=<BackDrop click={this.backdropClickHandler}/>
    }else{

    }
    return (
      <div className="App" style={{height:'100%'}}>
        <Header menuHandler={this.sidebarToggleHandler}/>
        <Sidebar show={this.state.isMenuOpen}/>
        {backdrop}
        <div style={{marginTop:"70px"}}>

        </div>
          <RouterContent>
              <Switch>
                <Route exact path="/" component={withRouter (HomePage)}/>
                <Route  path="/profile" component={withRouter(UserPage)}/>
                <Route  path="/posts/:id" component={withRouter(Posts)}/>
              </Switch>
          </RouterContent>
          <p className="bottom_divider"></p>
          <Footer/>
      </div>
    );
  }
}

export default App;
