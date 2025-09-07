
function getElement(id){
    const element = document.getElementById(id);
    return element;
}

const cartBtns = document.getElementsByClassName("cart-btn");

for(let cartBtn of cartBtns){
    cartBtn.addEventListener("click", function(){
        productImage = cartBtn.parentNode.parentNode.children[0].children[0].src;
        console.log(productImage);
        productName = cartBtn.parentNode.children[1].innerText;
        productPrice = cartBtn.parentNode.children[2].innerText;
        console.log(productPrice);

        const totalPrice = getElement("total-price").innerText;
        currentTotal = Number(productPrice) + Number(totalPrice);
        getElement("total-price").innerText = currentTotal;

        const cartElement = document.createElement("div");
        cartElement.innerHTML = `
            <div class="bg-gray-200 flex justify-around items-center my-5 rounded">
                <img src="${productImage}" alt="" class="w-22 ml-[-20px] p-2">
                <div>
                    <h2 class="font-bold text-xl">${productName}</h2>
                    <p class="text-[#111111]/50 text-xl">${productPrice}TK</p>
                </div>
            </div>
        `;
        getElement("cart-container").append(cartElement);


        totalProduct = getElement("total-qurantity").innerText;
        totalProduct = Number(totalProduct) + 1;
        getElement("total-qurantity").innerText = totalProduct;


        getElement("btn-clr").addEventListener("click", function(){
            cartElement.innerHTML = ` `;
            getElement("total-price").innerText = "0 ";
            getElement("total-qurantity").innerText = "0";

        });
            

    })
}





//traditional DOM
// document.getElementById("add-to-cart").addEventListener("click", function(){
//     const title = getElement("product-name").innerText;
//     const price = getElement("product-price").innerText;
//     console.log(price);

//     const totalPrice = getElement("total-price").innerText;
//     currentTotal = Number(price) + Number(totalPrice);
//     getElement("total-price").innerText = currentTotal;

//     const cartElement = document.createElement("div");
//     cartElement.innerHTML = `
//         <div class="bg-gray-200 flex justify-around items-center my-5 rounded">
//             <img src="./assets/kitchen-1.png" alt="" class="w-22 ml-[-20px] p-2">
//             <div>
//                 <h2 class="font-bold text-xl">${title}</h2>
//                 <p class="text-[#111111]/50 text-xl">${price}TK</p>
//             </div>
//         </div>
//     `;
//     getElement("cart-container").append(cartElement);

// })