function myFunction(smallimg) {
    var fullimg = document.getElementById("imageBox");
    fullimg.src = smallimg.src;
}


var product = {};

//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded", function (e) {
    getJSONData(PRODUCT_INFO_URL).then(function (resultObj) {
        if (resultObj.status === "ok") {
            product = resultObj.data;

            let productNameHTML = document.getElementById("productName");
            let descriptionHTML = document.getElementById("description");
            let soldCountHTML = document.getElementById("soldCount");
            let productCategoryHTML = document.getElementById("productCat");
            let productCurrencyHTML = document.getElementById("currency");
            let productCostHTML = document.getElementById("cost");


            productNameHTML.innerHTML = product.name;
            descriptionHTML.innerHTML = product.description;
            soldCountHTML.innerHTML = product.soldCount;
            productCategoryHTML.innerHTML = product.category;
            productCurrencyHTML.innerHTML = product.currency;
            productCostHTML.innerHTML = product.cost;

        }
    });
});

