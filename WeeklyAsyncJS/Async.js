fetch("https://striveschool-api.herokuapp.com/api/product/", {
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTcyZjMzOWZlMDMxZTAwMTliYTE0OTQiLCJpYXQiOjE3MDIwMzIxODUsImV4cCI6MTcwMzI0MTc4NX0.VmyV1SpSEf0zJriMxTKGspiqiqzI_VZtFVIYETf4VbI",
    },
  })
    .then((responseObj) => {
      if (responseObj.ok) {
        return responseObj.json();
      }
    })
    .then((products) => {
      console.log(products);

      products.forEach((product) => {
        const onlineShop = document.getElementById("shop");
        const cardHtml = `<div class="col-4">
              <div class="card mb-5">
    <img src="${product.imageUrl}" class="card-img-top" alt="..."/>
    <div class="card-body mb-5">
      <h5 class="card-title">${product.name}</h5>
      <p class="card-text">Prezzo: ${product.price} €</p>
      <p class="card-text">Descrizione: ${product.description}</p>
      <button type="button" class="btn btn-success"><a class="text-reset text-decoration-none" href="./backoffice.html?id=${product._id}">Modifica</a></button>
      <button type="button" class="btn btn-outline-warning ms-4"> <a class="text-decoration-none text-reset " href="./products.html?id=${product._id}"> More</a>
      </button>

  </div>
    </div>
  </div> `;
        onlineShop.innerHTML += cardHtml;
      });
    })
    .catch((error) => console.error(error));