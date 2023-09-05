import db from '../utils/firebase'; // Importing Firestore instance
import { doc, getDoc } from 'firebase/firestore';

export async function getStaticProps() {
    const docRef = doc(db, "Products", "2");
    const docSnap = await getDoc(docRef);

    if (!docSnap.exists()) {
        return {
            notFound: true
        }
    }

    const product = docSnap.data();

    return {
        props: { product }
    }
}

function ProductSSG({ product }) {
    return (
        <div>
            <h1>{product.name}</h1>
            <p>{product.description}</p>
            <p>{product.price}</p>
        </div>
    );
}

export default ProductSSG;
