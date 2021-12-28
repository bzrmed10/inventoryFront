export class Product {
  constructor (
      public product_name : string ,
      public product_code : string ,
      public root : string,
      public buying_price : string,
      public selling_price : string,
      public category_id : number,
      public supplier_id : number,
      public buying_date : string,
      public product_quantity : string,
      public product_image : string,
      public fileSource : string ){}
}
