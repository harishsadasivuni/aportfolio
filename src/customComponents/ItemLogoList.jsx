function ItemLogoList(props) {
    let container = [];
    //let arr = [1, 2, 3] //can be anything array, object
    props.arr.forEach((val, index) => {
        container.push(<>
            <li><img className="custom-item-logo" src={val}></img></li></>)
});
    return(<>
       <div>
        <h2 className="custom-list-heading">{props.title}</h2>
        <ul className="custom-list-collection">
        {container}
        </ul>
        <hr className="horizon-line"/>
       </div>
    </>);
}
export default ItemLogoList