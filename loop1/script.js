const arr=[{name:"olcha",price:6e3,relevance:0},{name:"olma",price:3e3,relevance:1},{name:"behi",price:4e3,relevance:2},{name:"banan",price:4700,relevance:3},{name:"nok",price:8400,relevance:4},{name:"kiwi",price:6500,relevance:5},{name:"shaptoli",price:3400,relevance:6},{name:"o'rik",price:6540,relevance:7},{name:"yong'oq",price:6528,relevance:8},{name:"gilos",price:6430,relevance:9},{name:"qulpunoy",price:3400,relevance:10},{name:"acchiq gilos",price:3800,relevance:11},{name:"olhori",price:7300,relevance:12},{name:"anjir",price:83e3,relevance:13},{name:"hurmo",price:65e3,relevance:14}];function checking(e){document.getElementById(e).checked=!0,document.getElementById("sorting-method").value=e,"name"==e?byName():"price"==e?byPrice():byID()}let fruitTemp=document.querySelector(".fruits__table").content,table=document.querySelector(".table");function createTable(e){var n=fruitTemp.cloneNode(!0);return n.querySelector(".name").textContent=e.name,n.querySelector(".cost").textContent=e.price,n.querySelector(".id").textContent=e.relevance,n}function byName(){let e=document.createDocumentFragment();arr.slice().sort((e,n)=>e.name>n.name?1:e.name<n.name?-1:0).forEach(n=>{e.appendChild(createTable(n))}),table.innerHTML="",table.appendChild(e)}function byPrice(){let e=document.createDocumentFragment();arr.slice().sort((e,n)=>e.price-n.price).forEach(n=>{e.appendChild(createTable(n))}),table.innerHTML="",table.appendChild(e)}function byID(){let e=document.createDocumentFragment();arr.slice().sort((e,n)=>e.relevance-n.relevance).forEach(n=>{e.appendChild(createTable(n))}),table.innerHTML="",table.appendChild(e)}byPrice();








/*const arr = [
    { name: `olcha`, price: 6000, relevance: 0 },
    { name: `olma`, price: 3000, relevance: 1 },
    { name: `behi`, price: 4000, relevance: 2 },
    { name: `banan`, price: 4700, relevance: 3 },
    { name: `nok`, price: 8400, relevance: 4 },
    { name: `kiwi`, price: 6500, relevance: 5 },
    { name: `shaptoli`, price: 3400, relevance: 6 },
    { name: `o'rik`, price: 6540, relevance: 7 },
    { name: `yong'oq`, price: 6528, relevance: 8 },
    { name: `gilos`, price: 6430, relevance: 9 },
    { name: `qulpunoy`, price: 3400, relevance: 10 },
    { name: `acchiq gilos`, price: 3800, relevance: 11 },
    { name: `olhori`, price: 7300, relevance: 12 },
    { name: `anjir`, price: 83000, relevance: 13 },
    { name: `hurmo`, price: 65000, relevance: 14 }
]

function checking(value) {
    document.getElementById(value).checked = true;
    document.getElementById("sorting-method").value = value;
    //Hoisting
    if (value == 'name') {
        byName()
    } else if (value == 'price') {
        byPrice()
    } else {
        byID()
    }
}

let fruitTemp = document.querySelector('.fruits__table').content;
let table = document.querySelector('.table');


function createTable(item) {
    var fruitTemplate = fruitTemp.cloneNode(true);
    fruitTemplate.querySelector('.name').textContent = item.name;
    fruitTemplate.querySelector('.cost').textContent = item.price;
    fruitTemplate.querySelector('.id').textContent = item.relevance;
    return fruitTemplate
}
// Hoisting
byPrice()

function byName() {
    let fragment = document.createDocumentFragment();
    arr.slice()
        .sort((a, b) => {
            if (a.name > b.name) {
                return 1
            } else if (a.name < b.name) {
                return -1
            }
            return 0
        })
        .forEach(item => {
            fragment.appendChild(createTable(item))
        })
    table.innerHTML = ''
    table.appendChild(fragment)
}

function byPrice() {
    let fragment = document.createDocumentFragment();
    arr.slice()
        .sort((a, b) => {
            return a.price - b.price
        })
        .forEach(item => {
            fragment.appendChild(createTable(item))
        })
    table.innerHTML = ''
    table.appendChild(fragment)
}


function byID() {
    let fragment = document.createDocumentFragment();
    arr.slice()
        .sort((a, b) => {
            return a.relevance - b.relevance
        })
        .forEach(item => {
            fragment.appendChild(createTable(item))
        })
    table.innerHTML = ''
    table.appendChild(fragment)
}


*/