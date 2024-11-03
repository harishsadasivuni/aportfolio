import Header from '../customComponents/header';
import Footer from '../customComponents/Footer';
import Banner from '../customComponents/Banner';
import Bannercard from '../customComponents/Bannercard';
import Education from '../customComponents/Education';
import ContactBanner from '../customComponents/ContactBanner';
import ItemLogoList from '../customComponents/ItemLogoList';
function Home() {
    return (<>
        
        <Banner />
        <Bannercard name="Skills" linktext="Skills" url="/skills" text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries."/>
        <Bannercard name="Personal Projects" linktext="Projects" url="/projects" text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries."/>
        <Education/>
        <ContactBanner/>
        
           
    </>);
}
export default Home