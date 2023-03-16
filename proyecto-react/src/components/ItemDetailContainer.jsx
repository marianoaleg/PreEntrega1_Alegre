import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import { doc, getDoc, getFirestore } from "firebase/firestore";
import Carga from "./Carga";
const ItemDetailContainer = ()=>{
    const [item, setItem] = useState({});
    const {id} = useParams();
    const [carga, setCarga] = useState(true)

    useEffect(() => {
        const db = getFirestore();
        const document = doc(db, "motor", id);
        getDoc(document).then(element => {
            setItem({id:element.id, ...element.data()});
            setCarga(false)
        });
    }, [id]);
    
    
    return(
        <div>
            {carga ? <Carga/> : <ItemDetail item={item} />}
        </div>
    )
}
export default ItemDetailContainer;