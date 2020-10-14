import React from 'react';
import { Jumbotron, Button, Container } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

const JumbrotonComponent = (props) => {
  return (
    <div>
        <Container>
            <div>
                <br></br>
                <Jumbotron>
                <h1 className="display-3">{props.title}</h1>
                <p className="lead">Ini Saya Sedang Belajar React Terstuktur</p>
                <hr className="my-2" />
                <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
                <p className="lead">
                <Button color="primary"><FontAwesomeIcon icon={faCoffee} />Learn More</Button>
                </p>
                </Jumbotron>
            </div> 
        </Container>
    </div>
  );
};

export default JumbrotonComponent;