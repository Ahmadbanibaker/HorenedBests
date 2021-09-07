import React, { Component } from 'react';
import { Card, Button, Col, } from 'react-bootstrap';

class HornedBeasts extends Component {
    getHandleOpen=()=>{
        let image_url=this.props.image_url;
        let title=this.props.title;
        let description=this.props.description;
        this.props.handleOpen(image_url,description,title)
    }
        constructor(props) {
            super(props);
            this.state = {
                likes: 0
            }
    
        }
        likesCount = () => {
            this.setState({
                likes: this.state.likes + 1,
    
            })
        }
    
    
    render() {
        
        return (
            
            <Col>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={this.props.image_url} />
                    <Card.Body>
                        <Card.Title>{this.props.title}</Card.Title>
                        <Card.Text>
                            {this.props.description}
                            <br />
                            {this.props.keyword}
                            <br />
                            {this.props.horns}
                            <br/>
                            {this.state.likes}
                            <Button variant="danger" onClick={this.likesCount}>Like</Button>{' '}
                        </Card.Text>
                        <Button onClick={this.getHandleOpen} variant="primary">Go somewhere</Button>
                    </Card.Body>
                </Card>
            </Col>
            
        
        )
        }    
    }


export default HornedBeasts
