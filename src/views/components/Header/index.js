import React from 'react';
import './index.scss';
import { InputGroup, FormControl, Button } from 'react-bootstrap';
import { FaSearch } from 'react-icons/fa';

const Header = () => (
    <header className="Header">
        <h1>Your favorite movies. Explained.</h1>
        <p>
            Figure out what happened. Then find out why.
        </p>
        <InputGroup className="Header_search">
            <FormControl
                placeholder="Seach for a movie..."
                aria-label="Seach for a movie..."
                aria-describedby="basic-addon2"
            />
            <InputGroup.Append>
                <Button variant="outline-secondary"><FaSearch /></Button>
            </InputGroup.Append>
        </InputGroup>
    </header>
)

export default Header;