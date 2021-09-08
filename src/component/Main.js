import React, { Component } from 'react';
import Data from './Data.json';
import HornedBeasts from './HornedBeasts';

class Main extends Component {
    render() {


        return (

            <div className="row">

                {this.props.Data.map(app => {
                    return <HornedBeasts
                        handleclose={this.props.handleclose}
                        handleOpen={this.props.handleOpen}
                        title={app.title}
                        image_url={app.image_url}
                        description={app.description}
                        keyword={app.keyword}
                        horns={app.horns}
                        
                        
                    />

                })};

            </div>

        )

    }
}

export default Main
