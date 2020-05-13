export interface Product {
  id?: number;
  name:string;
  description:string;
  unidades: number;
  price: number;
  kilos:number;
  image?:string;
  created_at?:Date;
}
