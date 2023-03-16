import Item from "./Item";
const ItemList = ({items})=>{
    
    
    return(
        <div className="row">
        {items.map(item => (
<<<<<<< Updated upstream
        <div className="col-md-4" key={item.id}>
=======
        <div className="col-md-4 mt-3 " key={item.id}>
>>>>>>> Stashed changes
            <Item item={item} />
        </div>
    ))}
    </div>
    )
}
export default ItemList;