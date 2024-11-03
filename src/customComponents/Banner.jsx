import OffCanvasBottom from "./OffCanvasBottom";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

function Banner() {
    return (<>
    <banner>
        <div className="custom-banner-left">
        <h1 className="custom-main-title">Aparna Darapaneni</h1>
        <p className="custom-main-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.</p>
        <OffCanvasBottom key="bottom" placement="bottom" name="View Resume" url="https://media.geeksforgeeks.org/wp-content/cdn-uploads/20210101201653/PDF.pdf"/>
        </div>
        <div className="custom-banner-right banner-hide">
        <img className="banner-image" src=".\src\assets\profilepic-removebg.png"></img>
        </div>
    </banner>
    </>);
}
export default Banner