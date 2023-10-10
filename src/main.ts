import { Product } from "./Product";
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle';

const r = new Product("alalalalla",2000,"01234567891");
const r2 = new Product("balalala",123,"01234567891");
const r3 = new Product("alalalalla",215,"01234567891");
const arucikkek : Product[] = [r,r2,r3]

function tablaKiir() {
  const tabla = document.getElementById("table");
  tabla!.innerHTML = "";
  const fejlec = document.createElement("thead");
  const nevmezo = document.createElement("td");
  const nev = document.createTextNode("Név");
  nevmezo.appendChild(nev);
  fejlec.appendChild(nevmezo);
  const ar = document.createElement("td");
  const arszoveg = document.createTextNode("Ár");
  ar.appendChild(arszoveg);
  fejlec.appendChild(ar);
  const termekkod = document.createElement("td");
  const terid = document.createTextNode("Termékkód");
  termekkod.appendChild(terid);
  fejlec.appendChild(termekkod);
  tabla!.appendChild(fejlec);
  const body = document.createElement("tbody");
  

  for(const aru of arucikkek)
  {
    const trow = document.createElement("tr");
    const tdn = document.createElement("td");
    const nev = document.createTextNode(aru.name);
    tdn.appendChild(nev);
    trow.appendChild(tdn);
    const tda = document.createElement("td");
    const ar = document.createTextNode(aru.price.toString());
    tda.appendChild(ar);
    trow.appendChild(tda);
    const tdt = document.createElement("td");
    const tkod = document.createTextNode(aru.productCode);
    tdt.appendChild(tkod);
    trow.appendChild(tdt);
    body.appendChild(trow);
  }
  tabla!.appendChild(body);
  tabla!.setAttribute("class","table table-striped");
}

function feltolt(){
  
  try{
    const name = (document.getElementById("name") as HTMLInputElement)!.value;
    const price = parseInt((document.getElementById("price") as HTMLInputElement)!.value);
    const productCode = (document.getElementById("productCode") as HTMLInputElement)!.value;
    const aru = new Product(name,price,productCode);
    arucikkek.push(aru);
    tablaKiir();


    (document.getElementById("name") as HTMLInputElement)!.value = "";
    (document.getElementById("price") as HTMLInputElement)!.value = "";
    (document.getElementById("productCode") as HTMLInputElement)!.value = "";
    document.getElementById("error")!.textContent = "";
  }
  catch(e){
    if(e instanceof Error) {
      document.getElementById("error")!.textContent = e.message;
    }
  }

}
function init(){
  document.getElementById("gomb")!.addEventListener("click",feltolt);
}
document.addEventListener("DOMContentLoaded",init);
