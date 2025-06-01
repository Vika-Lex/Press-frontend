import CompanyIntro from "@/src/components/Site/Products/CompanyIntro/CompanyIntro";
import ProductList from "@/src/components/Site/Products/ProductList/ProductList";
import Guarantee from "@/src/components/Site/Products/Guarantee/Guarantee";

interface Props {
    className?: string
}


const ProductsPage = ({}: Props) => {
    return (
        <div>
            <CompanyIntro/>
            <ProductList/>
            <Guarantee/>
        </div>
    );
};
export default ProductsPage