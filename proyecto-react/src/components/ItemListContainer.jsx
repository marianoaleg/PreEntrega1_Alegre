import { useEffect, useState } from "react";
import {useParams} from "react-router-dom";
import ItemList from "./ItemList";
import { collection, getDocs, getFirestore, query, where } from "firebase/firestore";
import Carga from "./Carga";
const ItemListContainer = ()=>{
    const [items, setItems] = useState([]);
    const {id} = useParams();
    const [carga, setCarga] = useState(true);

    useEffect(() => {
        const db = getFirestore();
        const itemsCollection = collection(db, "motor");
        const filter = id ? query(itemsCollection, where("categoria", "==", id)) : itemsCollection;
        getDocs(filter).then(elements => {
            setItems(elements.docs.map(element => ({id:element.id, ...element.data()})));
            setCarga(false)
        });
    }, [id]);
    
    return(
            <div className="container">
                {carga ? <Carga /> : <ItemList items={items} />}
            </div>
    
    )
}

export default ItemListContainer;