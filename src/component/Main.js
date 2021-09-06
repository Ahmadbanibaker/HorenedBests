import React, { Component } from 'react';
import HornedBeasts from './HornedBeasts';
import Data from './Data.json';

 class Main extends Component {
    render() {
        
           
        return (
            
                <div>
               {Data.map(apps => {
                   return  <HornedBeasts title={apps.title} imageUrl={apps.image_url} description={apps.description} />
                   
               })};
            
            </div>
    
        )
    
}}

export default Main
