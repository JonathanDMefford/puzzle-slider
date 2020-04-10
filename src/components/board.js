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
        if (newTiles[newTiles.length - 1].type === 'regular') {
            newTiles[newTiles.length - 1].type = 'blank';
        }

        this.setState({
            tiles: newTiles
        })
    }

    componentDidMount() {
        this.buildPuzzle();
    }

    moveTiles(currTile) {
        let newTiles = this.state.tiles;
        let neighbors = false;
        let clickedTile = currTile;
        let blankTile = this.state.tiles.findIndex(i => i.currPos === this.state.tiles.length - 1);
        let clickedRow = parseInt(clickedTile / 4);
        let clickedCol = clickedTile % 4;
        let blankRow = parseInt(blankTile / 4);
        let blankCol = blankTile % 4;

        if (clickedRow === blankRow && Math.abs(clickedCol - blankCol) === 1) {
            neighbors = true;
        } else if (Math.abs(clickedRow - blankRow) === 1 && clickedCol === blankCol) {
            neighbors = true;
        } else {
            neighbors = false;
        }

        if (neighbors === true) {
            newTiles[currTile].type = 'blank';
            newTiles[blankTile].type = 'regular';
            let newPos = newTiles[currTile].currPos;
            newTiles[currTile].currPos = newTiles[blankTile].currPos;
            newTiles[blankTile].currPos = newPos;
        }

        this.setState({
            tiles: newTiles
        })
    }

    randomizePuzzle() {
        //method to scramble puzzle
        for (let i = this.state.tiles.length; i > 0; i--) {

        }
    }


    render() {
        return (
            <Row className='mt-5'>
                <Col sm="12" md={{ size: 6, offset: 3 }}>
                    <Row className='mb-5'>
                        {this.state.tiles.map((item, idx) => (
                            <Tile
                                key={idx}
                                tileprops={item}
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