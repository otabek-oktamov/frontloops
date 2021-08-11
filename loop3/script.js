const switcher1 = document.getElementById("switch1");
const switcher2 = document.getElementById("switch2");
const switcher3 = document.getElementById("switch3");
const switcher4 = document.getElementById("switch4");
const switcher5 = document.getElementById("switch5");

var allSwitchers = [switcher1, switcher2, switcher3, switcher4, switcher5];

let switchCheck = false;


switcher1.addEventListener("input", function() {
    rdmSwitch(switcher1, 0);
});

switcher2.addEventListener("input", function() {
    rdmSwitch(switcher2, 1);
});

switcher3.addEventListener("input", function() {
    rdmSwitch(switcher3, 2);
});

switcher4.addEventListener("input", function() {
    rdmSwitch(switcher4, 3);
});

switcher5.addEventListener("input", function() {
    rdmSwitch(switcher5, 4);
});

function rdmSwitch(switcher, index) {
    if (switchCheck === false) {
        switcher.checked = true;
        switchCheck = true;
    } else {
        switcher = false;
        switchCheck = false;
    };
    allSwitchers.splice(index,1);
    allSwitchers.forEach(element => {
        rdm = Math.floor(Math.random() * 2);
        console.log(element);
        if (rdm === 1) {
            element.checked = true;
           
        } else {
            element.checked = false;
        }

    });
    
    allSwitchers = [switcher1, switcher2, switcher3, switcher4, switcher5];
};











// const inputs = document.querySelectorAll('input');
// const container = document.querySelector('.container');
// inputs.forEach(item => {
//     item.addEventListener('click', (evt) => {
//         item.value = Math.random();
//         let math = Math.random()
//         if (item.value > math) {
//             item.setAttribute('checked', '')
//         } else {
//             item.removeAttribute('checked', '')
//         }
//         inputs.forEach(item => {
//             item.value = Math.random();
//             let math = Math.random()
//             if (item.value > math) {
//                 item.setAttribute('checked', '')
//             } else {
//                 item.removeAttribute('checked', '')
//             }
//         })
//     })
// })