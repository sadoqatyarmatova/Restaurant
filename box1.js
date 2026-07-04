
let API = "https://6a45064baab3faec3f694115.mockapi.io/Products"
let DEFAULT_MENTOR_IMG = "./img/user.png";
let box1 = document.getElementById("box1")

async function get() {
    try {
        let menu = await fetch(API,{method: "GET"})
        let food = await menu.json()

        food.forEach ((e)=>{
            let div = document.createElement("div")
            div.innerHTML = `
            <div class="card">
                <img class="card-img" src="${e.logoProduct}" alt="">
                <button class="like-btn">${e.isLiked}</button>
             <div class="card-row">
                <h3 class="card-name">${e.nameProduct}</h3>
                <p class="card-time">${e.cookingTime}</p>
             </div>
                 <p class="card-desc">${e.descriptionProduct}</p>
             <div class="card-price-row">
                <h5 class="card-price">${e.priceProduct}</h5>
                <button class="add-btn">Add</button>
              </div>
            </div>
        `

            box1.appendChild(div)
        })
    }
    catch (error) {
        console.log(error)
    }
}

get()