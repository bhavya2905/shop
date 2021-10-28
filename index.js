let box=document.getElementById('box');
let html=[];
for(let i=1;i<10;i++){
    fetch(`https://fakestoreapi.com/products/${i}`).then(
        e => e.json()
        ).then(

            data => {
                
                html.push({
                    image:data.image,
                    title:data.title,
                    price:data.price,
                    category:data.category
                })
                console.log(html);
       
            }
           
        ).then(()=>{
            let inner="";
            for(let i=0;i<html.length;i++){
               
                inner+=`
            
            <div class="col-sm-3 ">
            <div class=thumbnail >
                <div class="image" ><img  src="${html[i].image}"></div>
                
            </div>
            <div class="caption">
                    <h3>${html[i].title}</h3>
                    <p>${html[i].price}</p>
                    <p>${html[i].category}</p>
                </div>
            </div>
            `;
           
            console.log(inner);
            }
            console.log(inner);
            box.innerHTML=inner;  
        }
            
        );
       
       
}
console.log(html);


