import React, { Component } from 'react'

class Form extends Component {

    render() {
        return (
            <div>
                <form onChange={this.props.handleSubmit}>
                <label value="">pick number</label>
                    <select onChange={ this.props.handleSubmit}>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="100">100</option>
                    </select>
                </form>
            </div>
        )
    }
}

export default Form
