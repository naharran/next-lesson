import { useRouter } from 'next/router';
import db from '../../utils/firebase'; // Importing Firestore instance
import { doc, getDoc } from 'firebase/firestore';

export async function getStaticPaths() {
    const productsIds = ["1", "2", "3"];
    const paths = productsIds.map(id => ({
        params: { id }
    }));

    return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
    const docRef = doc(db, "Products", params.id);
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

function ProductDynamic({ product }) {
    const router = useRouter();

    if (router.isFallback) {
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

export default ProductDynamic;
