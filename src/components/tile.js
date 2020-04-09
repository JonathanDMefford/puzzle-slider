import React from 'react';
import { Col } from 'reactstrap';



function Tile(props) {
    return (
        <Col 
            className='col-3 border border-dark rounded text-center'
            id={props.tileprops.id}
            tileprops={props.tileprops}
            onClick={() => {props.moveTiles(props.tileprops.id)}}>
            {props.tileprops.currPos}
        </Col>
    )
}


export default Tile