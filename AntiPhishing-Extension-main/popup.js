document.addEventListener('DOMContentLoaded', function () {
    document.querySelector('button').addEventListener('click',
        onclick, false)
    function onclick() {
        chrome.tabs.query({ currentWindow: true, active: true },
            function (tabs) {
                chrome.tabs.sendMessage(tabs[0].id, 'test', message)
            })
    }

    function message(res) {
        if (document.getElementById("msg") === null){
            const div = document.createElement('div')
            div.id = "msg"
            div.style.cssText = "color:red;font-weight:800;font-size:16px;"
            div.textContent = `${res.count}`
            document.body.appendChild(div)
        }
    }
}, false)