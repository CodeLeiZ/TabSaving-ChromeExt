let myLeads = [];

const inputEl = document.getElementById('input-el');
const inputBtn = document.getElementById('input-btn');
const ulEl = document.getElementById('ul-el')
const deleteBtn = document.getElementById('delete-btn')
const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))

if (leadsFromLocalStorage) {
    myLeads = leadsFromLocalStorage
    render(myLeads)
}

function render(leads) {
    let itemList = ""
    for (let i = 0; i < leads.length; i++) {
        itemList +=
            `<li>
                <a href='${leads[i]}' target='_blank'>
                ${leads[i]}
                </a>
            </li>`
    }
    ulEl.innerHTML = itemList
}

deleteBtn.addEventListener('dblclick', () => {
    localStorage.clear()
    myLeads = [];
    render(myLeads)
})

inputBtn.addEventListener('click', () => {
    myLeads.push(inputEl.value)
    inputEl.value = ""
    localStorage.setItem("myLeads", JSON.stringify(myLeads))
    render(myLeads)
})