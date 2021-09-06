import React, { Component } from 'react';

 class HornedBeasts extends Component {
     constructor(props){
         super(props);
         this.state={
             stateLikes:0,
         }

     }
     raiseLikes=()=>{
         this.setState({
             stateLikes:this.state.stateLikes+1
         })
     }
    render() {
        return (
            <div>
                <h2> title :  {this.props.title} </h2>
               <img src = {this.props.imageUrl} alt={this.props.title} title='animal image'/>
               <p> description : {this.props.description} </p>
               <button onClick={this.raiseLikes}> Likes </button>
               <h2> {this.state.stateLikes}</h2>
            </div>
        )
    }
}

export default HornedBeasts
