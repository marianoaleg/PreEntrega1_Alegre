import Item from "./Item";
const ItemList = ({items})=>{
    
    
    return(
        <div className="row">
        {items.map(item => (
        <div className="col-md-4 mt-3" key={item.id}>
            <Item item={item} />
        </div>
    ))}
    </div>
    )
}
export default ItemList;