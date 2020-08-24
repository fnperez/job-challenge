import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import './index.scss';
import { Link } from 'react-router-dom';
import routes from '@routes';
import { FaHome } from 'react-icons/fa';

const FatalError = () => {
    return (
        <Container className="FatalError">
            <Row>
                <Col>
                    <div class="error-template">
                        <h1>Oops!</h1>
                        <h2>500 Fatal Error</h2>
                        <div class="error-details">
                            Sorry, an error has occured, please try later!
                        </div>
                        <div class="error-actions">
                            <Button variant="dark" as={Link} to={routes.route('HOME')}>
                                <FaHome /> Go back home
                            </Button>
                        </div>
                    </div>
                </Col>   
            </Row> 
        </Container>
    )
}

export default FatalError;