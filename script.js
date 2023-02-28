


var url=`https://makeup-api.herokuapp.com/api/v1/products.json`
async function repo(){
  try  {var data = await fetch(url)
    var gt=await data.json()
    console.log(data)
    // gt.filter((e)=>{
    //     console.log(e)
    //     // console.log(e.category)
    //     // if(e.category==="lipstick"){
    //     //     console.log(e)
    //     // }
    // })
    makeupItems(gt)

    }catch(err){
        console.log(err)
       
    }
}
repo()

document.body.innerHTML=`
<div >
<nav class="navbar navbar-dark navbarColor">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">My Makeup</a>
    <div>
    <input type="search" name="" id="search"><button id="searchButton" type="submit"><i class="fa fa-search"></i></button>
    </div>
  </div>
</nav>
<div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-xl-4 g-4 m-1" id="mainContainer">
 
</div>
</div>`




var searchButton=document.getElementById("searchButton")
let mainContainer=document.getElementById('mainContainer')

function makeupItems(items){
     console.log(items)
    items.forEach((element,index)=>{
      //  if(element.category=='lipstick'){
   
    if(index<=50){
        console.log(index)

        console.log(element)

        var itemdiv=document.createElement('div')

        itemdiv.classList.add("col","item")
        itemdiv.innerHTML=`
        <div class="card h-100">
            <img src=${element.image_link} class="card-img-top" alt="..." />
            <div class="card-body p-0 m-1">
              <div class="">
              <h5 class="card-title">Brand = ${element.brand}</h5>
              <h5 class="card-title" id="name">Name = ${element.name}</h5>
              <h5 class="card-title">price =${element.price_sign} ${element.price}</h5>
              <h5 class="card-title">Link = <a href="${element.product_link}">click here for product</a> </h5>
              </div>
              <div class="card card-header Description">
                <p>Description</p>
                <p class="riko" id="rexo${index}">${element.description}</p>
              </div>
            </div>        
          </div>
        `
        
        // search()
        mainContainer.append(itemdiv)
       
    }
      //  }
    })
    
}
searchButton.addEventListener("click",search)

function search(){
    let text=document.getElementById("search").value;
    let pattern=new RegExp(`${text}`, "gi");
    console.log(pattern)
    mainContainer.innerHTML=mainContainer.textContent.replace(pattern, match=>`<span style="background:red;">${match}</span>`)
    
}

async function imageExists(url){
    try{
    var het=await fetch(`${url}`)
    return het.status
    }
    catch(err){
        console.log(err)
    }
}


