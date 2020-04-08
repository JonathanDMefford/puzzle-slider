import React from 'react';
import { Col } from 'reactstrap';




class Tile extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        this.props.moveTiles(e);
    }


    render() {
        return (
            <Col className='col-3 border border-dark rounded text-center'
                tileProps={this.props.tileProps}
                onClick={this.handleClick}>
                {this.props.tileProps.id}
            </Col>
        )
    }
}


export default Tile