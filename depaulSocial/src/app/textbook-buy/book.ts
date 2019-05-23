export class book {
  private _title:string;
  private _isbn:number;
  private _price:number = null;
  private _info:string;

  constructor(title:string, isbn:number, price:number) {
    this._title = title;
    this._isbn  = isbn;
    this._price = price;
  }

  get title(): string {
    return this._title;
  }

  set title(title: string) {
    this._title = title;
  }

  get isbn(): number {
    return this._isbn;
  }

  set isbn(value: number) {
    this._isbn = value;
  }

  get price(): number {
    return this._price;
  }

  set price(value: number) {
    this._price = value;
  }

  toString(){
      this._info =
        ("Title: " + this._title + "     " +
          "ISBN: " + this._isbn +  "     " +
          "Price: " + this._price);
    return this._info;
  }
}
