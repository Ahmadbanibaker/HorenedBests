import React, { Component } from 'react';
import Header from './component/Header';
import Main from './component/Main';
import Footer from './component/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBarCustom from './component/NavBarCustom';
import BsModal from './component/BsModal';


 class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
       showModal: false,
       image_url:"",
       description:"",
       title:""
    }

}

  handleClose=()=>{
    this.setState({
      showModal:false
    })
  }
  handleOpen=(image_url,description, title)=>{
    this.setState({
      showModal:true,
      image_url:image_url,
      title:title,
      description:description

    })
  }
  render() {
    return (
      <>
      <NavBarCustom/>
        <Header/>
        <Main handleOpen={this.handleOpen}/>
        <BsModal  handleClose={this.handleClose}
         showModal={this.state.showModal}
         image_url={this.state.image_url}
         title={this.state.title}
         description={this.state.description}
         />
          
        <Footer/>
      </>
    )
  }
}

export default App
