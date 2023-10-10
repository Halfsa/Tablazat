export class Product{
    constructor(public name:string, public price:number, public productCode:string) {
        if(name.trim() ==""){
            throw new Error("A név mező nem lehet üres");
        }
        else if(price < 100 || isNaN(price) )
        {
            throw new Error("Az ár mező értéke nem megfelelő");
        }
        else if(productCode.trim()=="" || productCode.length != 11){
            throw new Error("A kód mező nem lehet üres és pontosan 11 karaktert kell tartalmaznia");
        }
    }
}