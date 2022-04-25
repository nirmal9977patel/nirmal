//store the products array in localstorage as "data"
function createobj(a,b,c,d){
    // event.preventDefault();
    this.brand=a;
    this.name=b;
    this.price=c;
    this.image_url=d;
}
 let p2= new createobj("NIKE","SHOES",4000,"image_url")
 console.log("product:", p2);