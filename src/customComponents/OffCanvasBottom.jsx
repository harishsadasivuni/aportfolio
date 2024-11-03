import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
function OffCanvasBottom({ name, ...props }) {
        const [show, setShow] = useState(false);
        const handleClose = () => setShow(false);
        const handleShow = () => setShow(true);
    return(<>
        <Button variant="primary" onClick={handleShow} className="me-2">
        {name}
      </Button>
      <Offcanvas show={show} onHide={handleClose} {...props}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Resume</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <iframe className='custom-iframe-web' src={props.url}></iframe>
        </Offcanvas.Body>
      </Offcanvas>
    </>);
}
export default OffCanvasBottom