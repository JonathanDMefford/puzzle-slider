import React from 'react';
import Tile from './tile';
import { Row, Col, Button } from 'reactstrap';




class Board extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tiles: []
        }
        this.moveTiles = this.moveTiles.bind(this);
        this.randomizePuzzle = this.randomizePuzzle.bind(this);
    }

    buildPuzzle() {
        let tileAmount = 16;
        let newTiles = [];
        for (let i = 0; i < tileAmount; i++) {
            let tileProperties = {
                id: i,
                currPos: i,
                winPos: i,
                type: 'regular'
            }
            newTiles.push(tileProperties);
        }
        if (newTiles[newTiles.length - 1].type == 'regular') {
            newTiles[newTiles.length - 1].type = 'blank';
            newTiles[newTiles.length - 1].id = '';
        }
        console.log(newTiles);
        this.setState({
            tiles: newTiles
        })
    }

    componentDidMount() {
        this.buildPuzzle();
    }

    moveTiles(e) {
        console.log(e.target.id);
    }

    randomizePuzzle() {
        //method to randomize puzzle
    }


    render() {
        return (
            <Row className='mt-5'>
                <Col sm="12" md={{ size: 6, offset: 3 }}>
                    <Row className='my-5'>
                        {this.state.tiles.map((item, idx) => (
                            <Tile
                                key={idx}
                                tileProps={item}
                                moveTiles={this.moveTiles}
                            />
                        ))}
                    </Row>
                    <Button color='info' onClick={this.randomizePuzzle()} block>Randomize</Button>
                </Col>
            </Row>
        )
    }
}


export default Board