import React from 'react';
import Tile from './tile';
import { Row, Col } from 'reactstrap';




class Board extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tiles: []
        }
        this.moveTiles = this.moveTiles.bind(this);
    }

    buildPuzzle() {
        let tileAmount = 16;
        let newTiles = [];
        for (let i = 0; i < tileAmount; i++) {
            let tileProperties = {
                id: i,
                currPos: i
            }
            newTiles.push(tileProperties);
        }
        console.log(newTiles);
        this.setState({
            tiles: newTiles
        })
    }

    componentDidMount() {
        this.buildPuzzle();
    }

    moveTiles() {
        console.log('here');
    }


    render() {
        return (
            <Row className='mt-5'>
                {this.state.tiles.map((item, idx) => (
                    <Tile
                        moveTiles={this.moveTiles}
                    />
                ))}
            </Row>
        )
    }
}


export default Board