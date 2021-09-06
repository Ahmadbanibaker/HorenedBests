import React, { Component } from 'react';

 class HornedBeasts extends Component {
    render() {
        return (
            <div>
                <h2> title :  {this.props.title} </h2>
               <img src = {this.props.imageUrl} alt={this.props.title} title='animal image'/>
               <p> description : {this.props.description} </p>
               <button> Likes </button>
            </div>
        )
    }
}

export default HornedBeasts
