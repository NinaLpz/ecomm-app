const wrapper = document.querySelector(".sliderWrapper")
const menuItems =document.querySelectorAll(".menuItem")

const products = [
    {
        id: 1,
        title: "Jumper",
        price:60,
        colors: [
            {
                code:"white",
                img:"./img/1989jump.png",
            },
            {
                code:"pink",
                img:"./img/1989jump.png",
            },
            {
                code:"black",
                img:"./img/1989jump.png",
            },
        ],
    },
    {
        id: 2,
        title: "1989 (Taylor's Version) T-shirt",
        price:40,
        colors: [
            {
                code:"white",
                img:"./img/1989tv.png",
            },
            {
                code:"pink",
                img:"./img/1989tv.png",
            },
            {
                code:"black",
                img:"./img/1989tv.png",
            },
        ],
    },
    {
        id: 3,
        title: "Folklore Cardigan",
        price:70,
        colors: [
            {
                code:"white",
                img:"./img/tscardigan.png",
            },
            {
                code:"black",
                img:"./img/tscardigan.png",
            },
        ],
    },
];

let chosenProduct = products[0]

const currentProductImg = document.querySelector(".productImg")
const currentProductTitle = document.querySelector(".productTitle")
const currentProductPrice = document.querySelector(".productPrice")
const currentProductColors = document.querySelectorAll(".color")
const currentProductSizes = document.querySelectorAll(".size")

menuItems.forEach((item,index)=>{
    item.addEventListener("click", ()=>{
        // change the current slide
        wrapper.style.transform = `translateX(${-100 * index}vw)`

        // change the chosen product
        chosenProduct = products[index]

        // change text of currentProduct
        currentProductTitle.textContent = chosenProduct.title;
        currentProductPrice.textContent = "$" + chosenProduct.price;
        currentProductImg.src = chosenProduct.colors[0].img;

        // choosing color
        currentProductColors.forEach((color,index)=>{
            color.style.backgroundColor = chosenProduct.colors[index].code;
        })
    });
});

currentProductColors.forEach((color, index) => {
    color.addEventListener("click", () => {
      currentProductImg.src = chosenProduct.colors[index].img;
    });
  });

currentProductSizes.forEach((size,index) => {
    size.addEventListener("click", () => {
        currentProductSizes.forEach(size => {
            size.style.backgroundColor = "white"
            size.style.color = "black"
        });
        size.style.backgroundColor = "black"
        size.style.color = "white"
    });
});

const productButton = document.querySelector(".productButton");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");

productButton.addEventListener("click", () => {
  payment.style.display = "flex";
});

close.addEventListener("click", () => {
  payment.style.display = "none";
});