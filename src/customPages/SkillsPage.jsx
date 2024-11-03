import Header from "../customComponents/header";
import ItemLogoList from "../customComponents/ItemLogoList";

function SkillsPage() {
    return (<>
    <section className="skills">
        <ItemLogoList arr={['./src/assets/MySQL-Logo.png',
            './src/assets/sql-server-logo.png',
            './src/assets/oracle.png',
            './src/assets/post.png']} title="Database" />
        <ItemLogoList arr={['./src/assets/Amazon-Web-Services-AWS-Logo.png',
            './src/assets/sales.png',
            './src/assets/azure.png',
            './src/assets/Denodo-Corporate-Logo.png',
            './src/assets/share.png']} title="Cloud Technologies" />
        <ItemLogoList arr={['./src/assets/python.png', './src/assets/sql.png', './src/assets/java.png']} title="Programming Language" />
        <ItemLogoList arr={['./src/assets/power.png',
            './src/assets/tableau.jpg',
            './src/assets/alt.png',
            './src/assets/looker.png',
            './src/assets/qlik.png']} title="Data Analytics" />
            </section>
    </>);
}
export default SkillsPage