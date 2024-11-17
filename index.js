let myLeads = [];

const inputEl = document.getElementById('input-el')
const inputBtn = document.getElementById('input-btn')
const ulEl = document.getElementById('ul-el')
const deleteBtn = document.getElementById('delete-btn')
const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))
const tabBtn = document.getElementById('tab-btn')

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

tabBtn.addEventListener('click', () => {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        myLeads.push(tabs[tabs.length - 1].url);
        localStorage.setItem("myLeads", JSON.stringify(myLeads) )
        render(myLeads)
    })

})

deleteBtn.addEventListener('dblclick', () => {
    localStorage.clear()
    myLeads = []
    render(myLeads)
})

function save() {
    let url = inputEl.value
    if (!url.startsWith('http://') && !url.startsWith('https://')) {
        url = 'https://' + url;  // Add http:// if not present
    }
    myLeads.push(url)
    inputEl.value = ""
    localStorage.setItem("myLeads", JSON.stringify(myLeads))
    render(myLeads)
}

const events = ['keydown', 'click']

events.forEach(eventType => {
    inputEl.addEventListener(eventType, function(event) {
        if (eventType === 'keydown' && event.key === 'Enter') {
            save()
        }
    });
});

inputBtn.addEventListener('click', () => {
    save()
})

