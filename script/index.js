
function getElement(id){
    const element = document.getElementById(id);
    return element;
}


document.getElementById("add-to-cart").addEventListener("click", function(){
    const title = getElement("product-name").innerText;
    const price = getElement("product-price").innerText;
    console.log(price);

    const totalPrice = getElement("total-price").innerText;
    currentTotal = Number(price) + Number(totalPrice);
    getElement("total-price").innerText = currentTotal;

    const cartElement = document.createElement("div");
    cartElement.innerHTML = `
        <div class="bg-gray-200 flex justify-around items-center my-5 rounded">
            <img src="./assets/kitchen-1.png" alt="" class="w-22 ml-[-20px] p-2">
            <div>
                <h2 class="font-bold text-xl">${title}</h2>
                <p class="text-[#111111]/50 text-xl">${price}TK</p>
            </div>
        </div>
    `;
    getElement("cart-container").append(cartElement);

})