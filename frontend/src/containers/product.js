import ProductCard from '../components/productsCard';
import ProductData from '../db/product';
import "./product.css";

const ProductContents = ProductData.map((item, index)=>(
    <ProductCard item={item} key={index}/>
))
const Product = () =>{
    return(
        <>
            <section className="Product">
                <div >
                    {ProductContents}
                </div>
            </section>
        </>
    );
}

export default Product;