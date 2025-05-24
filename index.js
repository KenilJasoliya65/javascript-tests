let cartItem = []
let totalSum = 0
const productDetails = [
    {
        name : "Hair Serum",
        price : 10,
        image : "product1.jpg"
    },
    {
        name : "Vitamin E Drops",
        price : 20,
        image : "product2.jpg"
    },
    {
        name : "JAM Hair Oil",
        price : 30,
        image : "product3.jpg"
    },
    {
        name : "Winter Bodylotion",
        price : 40,
        image : "product4.jpg"
    },
    {
        name : "NIVEA Bodylotion",
        price : 50,
        image : "product5.jpg"
    },
    {
        name : "GREEN OLIVE Scalp oil",
        price : 60,
        image : "product6.jpg"
    },
    {
        name : "Organic Beauty Kit",
        price : 70,
        image : "product7.jpg"
    },
    {
        name : "Hydra Skincare kit",
        price : 80,
        image : "product8.jpg"
    },
    {
        name : "face Oil",
        price : 90,
        image : "product9.jpg"
    },
    {
        name : "Lip-Stick",
        price : 100,
        image : "product10.jpg"
    }
]
const productContainer = document.getElementById("product-list")

productDetails.forEach((product , index)=>
{
    console.log(product)
    const productDiv = document.createElement("div")
    productDiv.classList.add("product")

    productDiv.innerHTML = `
    <img src="${product.image}" alt="${product.name}"/>
    <p>Name : ${product.name}</p>
    <p class = "price">Price: ${product.price}</p>
    <button class = "add-to-cart">Add to Cart</button>`

    productContainer.appendChild(productDiv)

    const addToCartButton = productContainer.querySelectorAll(".add-to-cart");

    addToCartButton[index].addEventListener('click',() =>
    {
        cartItem.push({
            name : product.name,
            price : product.price,
            image : product.image
        })
        totalSum += product.price
        updateCart()
    })
    console.log(cartItem)
})
const updateCart = () =>
{
    const cartList = document.getElementById("cart-item")
    const totalEle = document.getElementById("total-price")

    cartList.innerHTML = ""

    cartItem.forEach((item , index) =>
    {
        const li = document.createElement("li")
        const img = document.createElement("img")

        img.src = item.image
        img.alt = item.name
        img.style.width = "100px"
        img.style.height = "100px"

        li.appendChild(img)

        const details = document.createElement("span")
        details.textContent = item.name + " - $ " + item.price
        li.appendChild(details)

        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.classList.add("delete-item");
        deleteButton.addEventListener("click", () =>{
            cartItem.splice(index , 1);
            totalSum -= item.price;
            updateCart();
        });
        li.appendChild(deleteButton);

        const br = document.createElement("br")
        li.appendChild(br)
        const br1 = document.createElement("br")
        li.appendChild(br1)

        const hori = document.createElement("hr");
        li.appendChild(hori)
        
        let br2 = document.createElement("br")
        li.appendChild(br2)

        cartList.appendChild(li)
    });
    totalEle.textContent = "$" + totalSum
}