import React from 'react';
import { Row, Col } from 'reactstrap';




class Tile extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        this.props.moveTiles();
    }


    render() {
        return (
            <Col className='col-3 border text-center' onClick={this.handleClick}>
                Hello
            </Col>
        )
    }
}


export default Tile