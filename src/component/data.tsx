
export type Product = {
    id: number;
    title: string;
    price: number;
    images: string;
    shippingInformation:string;
  };
  
  type Products = {
    filterFunction?: (product: Product) => boolean;
    limit?: number;
    hideTitle?: boolean; 
    id?:number
  };

  export default Products;
  