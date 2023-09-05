import { useEffect, useState } from 'react';
import db from '../utils/firebase'; // Importing Firestore instance
import { doc, getDoc } from 'firebase/firestore';

function ProductCSR() {
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            const docRef = doc(db, "Products", "2");
            const docSnap = await getDoc(docRef);
            
            if (docSnap.exists()) {
                setProduct(docSnap.data());
            } else {
                console.error("No such document!");
            }

            setLoading(false);
        };

        fetchData();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h1>{product.name}</h1>
            <p>{product.description}</p>
            <p>{product.price}</p>
        </div>
    );
}

export default ProductCSR;
