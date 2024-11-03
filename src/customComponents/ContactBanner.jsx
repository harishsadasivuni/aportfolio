import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

function ContactBanner() {
    return (<>
    <section id='Contact'>
        <h4 className='custom-contact-banner'>Wanna learn more about me?</h4>
        <p className='custom-contact-text'>Please fill the contact details, I will reach you out like a flash!</p>
        <div className="d-grid gap-2 align-self-center mx-auto">
            <Button variant="warning" size="lg" className='contact-button'>
                <Link to="/contact">Contact Me</Link>
            </Button>
        </div>
        </section>
    </>);
}
export default ContactBanner