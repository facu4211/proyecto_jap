//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
var currentProductArray = [];

document.addEventListener("DOMContentLoaded", function (e) {
    /*llamo a getJSONData inicializada en init.js y le paso como parametro PRODUCTS_URL para hacerle una peticion al servidor y con el then recepciono la informacion que entra*/
    getJSONData(PRODUCTS_URL).then(function (result) {
        if (result.status === "ok") {
            mostrarProductos(result.data)
        }
    });
    //funcion que almacena todo el htmlContentToAppend
    function showProductList() {

        let htmlContentToAppend = "";
        //recorre la lista y agrega los productos
        for (let i = 0; i < currentProductArray.length; i++) {
            let product = currentProductArray[i];

            htmlContentToAppend += `
            <a href="product-info.html" class="list-group-item list-group-item-action">
                <div class="row">
                    <div class="col-3">
                        <img src="` + product.imgSrc + `" alt="` + product.description + `" class="img-thumbnail">
                    </div>
                    <div class="col">
                        <div class="d-flex w-100 justify-content-between">
                            <h4 class="mb-1">`+ product.name + `</h4>
                            <small class="text-muted">` + product.soldCount + ` artículos</small>
                            <small class="text-muted">` + product.currency + product.cost + `</small>
                        </div>
                        <p class="mb-1">` + product.description + `</p>
                    </div>
                </div>
            </a>
            `

            //es necesario para poder mostrar todo en el html mediante el getElementById
            document.getElementById("prod-list-container").innerHTML = htmlContentToAppend;
        }
    }


    function mostrarProductos(listaProduct) {
        if (listaProduct != undefined) {
            currentProductArray = listaProduct;
        }
        //llamo la funcion para mostrar los productos
        showProductList();
    }

});