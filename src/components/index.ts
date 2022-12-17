import { ProductCard as ProducCardHOC } from './ProductCard';
import { ProductCardHOCProps } from '../interfaces/intefaces';

import { ProductButtons } from './ProductButtons';
import { ProductImage } from './ProductImage';
import { ProductTitle } from './ProductTitle';


export { ProductButtons } from './ProductButtons';
export { ProductImage } from './ProductImage';
export { ProductTitle } from './ProductTitle';



export const ProductCard: ProductCardHOCProps = Object.assign( ProducCardHOC, {

    Title: ProductTitle,
    Image: ProductImage,
    Buttons: ProductButtons
})
