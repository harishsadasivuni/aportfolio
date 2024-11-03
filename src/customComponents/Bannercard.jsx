import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
function Bannercard(props) {
    return(<>
        <section id={props.linktext}>
            <h3 className="cutom-bannercard-title">{props.name}</h3>
            <p className="cutom-bannercard-para">{props.text}</p>
            <Button size="lg" className='custom-button-bannercard' variant="outline-warning"><Link to={props.url}>{props.linktext}</Link></Button>
        </section>
    </>);
}
export default Bannercard