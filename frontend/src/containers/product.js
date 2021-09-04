import ProductCard from '../components/productsCard';
import ProductData from '../db/product';
import "./product.css";

const Product = () =>{
    return(
        <>
            <section className="Product">
                <div >
                    <ProductCard/>
                </div>
            </section>
        </>
    );
}

export default Product;