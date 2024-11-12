let myLeads = [];

const inputEl = document.getElementById('input-el');
const inputBtn = document.getElementById('input-btn');
const ulEl = document.getElementById('ul-el')

let leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))
console.log(leadsFromLocalStorage)


inputBtn.addEventListener('click', () => {
    myLeads.push(inputEl.value)
    inputEl.value = ""
    localStorage.setItem("myLeads", JSON.stringify(myLeads))
    renderLeads()
})

function renderLeads() {
    let itemList = ""
    for (let i = 0; i < myLeads.length; i++) {
        itemList +=
            `<li>
                <a href='${myLeads[i]}' target='_blank'>
                ${myLeads[i]}
                </a>
            </li>`
    }
    ulEl.innerHTML = itemList
}



