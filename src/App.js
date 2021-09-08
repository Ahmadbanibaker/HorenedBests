import React, { Component } from 'react';
import Header from './component/Header';
import Main from './component/Main';
import Footer from './component/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBarCustom from './component/NavBarCustom';
import BsModal from './component/BsModal';
import Form from './component/Form';
import Data from './component/Data.json';

 class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      Data:Data , 
       showModal: false,
       image_url:"",
       description:"",
       title:""
    }

}

handleSubmit = (e) => {
  let newData =[];
  let value = e.target.value;
  newData = Data.filter(element => {
    if (element.horns == value)
     { return element  }  
     }) 
     this.setState({Data:newData })
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
        <Form handleSubmit={this.handleSubmit}/>
        <br/>
        <Main handleOpen={this.handleOpen} Data={this.state.Data}/>
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


