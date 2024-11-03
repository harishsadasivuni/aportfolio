import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
function ContactForm() {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        const data = {name, email, phone, message};
        console.log(data);

        
    }


    return (
        <>
            <Form onSubmit={handleSubmit}>
                <h2>Please Fill Below Form</h2>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label className='custom-form-label'>Name: </Form.Label>
                    <Form.Control className='custom-form-input'
                        type='text' required value={name} onChange={(e) => setName(e.target.value)}>
                    </Form.Control>
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
                    <Form.Label className='custom-form-label'>Email: </Form.Label>
                    <Form.Control className='custom-form-input'
                        type='email' required value={email} onChange={(e) => setEmail(e.target.value)}>
                    </Form.Control>
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput3">
                    <Form.Label className='custom-form-label'>Phone: </Form.Label>
                    <Form.Control className='custom-form-input'
                        type='phone' required value={phone} onChange={(e) => setPhone(e.target.value)}>
                    </Form.Control>
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput4">
                    <Form.Label className='custom-form-label'>Message (optional) : </Form.Label>
                    <Form.Control className='custom-form-input'
                        as="textarea" value={message} onChange={(e) => setMessage(e.target.value)}>
                    </Form.Control>
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>

        </>
    );
}
export default ContactForm