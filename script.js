var res = fetch("https://restcountries.com/v2/all");
res.then((data)=>data.json()).then((data1)=>{
    for(var i=0; i<data1.length; i++){
        console.log(data1[i].name);
        var div = document.createElement("div");
        div.innerHTML= `<div class="row row-cols-lg-4 row-cols-sm-12">
        <div class="col-lg-4">

        <div class="card" style="width: 18rem;">
        <header class="title">${data1[i].name}</header>
        <img src="${data1[i].flag}" class="card-img-top" alt="..." width="500px" height="200px">
        <div class="card-body">
          <h5 class="card-title"> Capital: ${data1[i].capital}</h5>
          <h6 class="card-text"> Region: ${data1[i].region}</h6>
          <h6 class="card-text"> Country-code: ${data1[i].alpha3Code}</h6><br>
          <button type="button" class="btn btn-primary">weather</button>
          
        </div></div></div>
      </div>`  
        document.body.append(div);
    
    }
    
});
      