var data = [{
    "time": "2020/04/28",
    "money": 100000,
    "content": "abc2",
    "status": "abc1"
}, {
    "time": "2020/04/28",
    "money": 1000200,
    "content": "abc21",
    "status": "abc32"
}, {
    "time": "2020/04/28",
    "money": 1002000,
    "content": "abc",
    "status": "abc"
}, {
    "time": "2020/04/28",
    "money": 1000400,
    "content": "abc23",
    "status": "a4bc"
}, {
    "time": "2020/04/28",
    "money": 100000,
    "content": "abc",
    "status": "abc"
}]

var result = [];
var obj = {};
for (let index = 0; index < 100; index++) {
    obj = {};
    obj.id = index + 1;
    obj = Object.assign(obj, data[Math.floor(Math.random() * Math.floor(data.length))]);
    result.push(obj);
}
var tbody = document.getElementById('table_data_id');
var tr;
var td;
for (const ele of result) {
    tr = document.createElement('tr');
    var arrObject = Object.keys(ele);
    for (const key of arrObject) {
        td = document.createElement('td');
        td.innerText = ele[key];
        tr.appendChild(td);
        if (key === 'id') {
            td.addEventListener('click', function() {
                showData(ele)
            })
        }
    }
    tbody.appendChild(tr);
}

function showData(param) {
    document.getElementById('show_data').innerHTML = '<p>' + param.time + '</p><p>' + param.money + '</p><p>' + param.content + '</p><p>' + param.status + '</p>';
    document.getElementById('popup_data').style.display = 'block';
}

function closePopup() {
    document.getElementById('popup_data').style.display = 'none';
}