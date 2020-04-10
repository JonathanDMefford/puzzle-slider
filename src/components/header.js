import React from 'react';
import { Row, Col, Form, FormGroup, Label, Input, FormText } from 'reactstrap';



function Header(props) {
    return (
        // <React.Frament>
        <Row>
            <Col sm="12" md={{ size: 6, offset: 3 }}
                className='mt-5 border border-dark text-center'><h1>Puzzle Slider</h1></Col>
        </Row>
        /* <Row>
            <Form>
                <FormGroup row>
                    <Label for="exampleFile" sm={2}>File</Label>
                    <Col sm={10}>
                        <Input type="file" name="file" id="exampleFile" />
                        <FormText color="muted">
                            This is some placeholder block-level help text for the above input.
                            It's a bit lighter and easily wraps to a new line.
                        </FormText>
                    </Col>
                </FormGroup>
            </Form>
        </Row> */
        /* </React.Frament> */
    )
}


export default Header