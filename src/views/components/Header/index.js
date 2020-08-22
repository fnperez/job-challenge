import React, { useState } from 'react';
import './index.scss';
import { InputGroup, FormControl, Button } from 'react-bootstrap';
import { FaSearch } from 'react-icons/fa';

const Header = ({onSearch}) => {
    const [value, setValue] = useState('');

    function sendForm() {
        if (! onSearch) return; 
    
        onSearch(value);
    }

    return (
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
                    value={value}
                    onKeyUp={e => e.keyCode === 13 ? sendForm() : null}
                    onChange={event => setValue(event.target.value)}
                />
                <InputGroup.Append>
                    <Button variant="outline-secondary" onClick={sendForm}><FaSearch /></Button>
                </InputGroup.Append>
            </InputGroup>
        </header>
   )
}

export default Header;