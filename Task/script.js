// console.log("Hello Sir")
// async function fetchData(){
//     const url = "https://jsonplaceholder.typicode.com/todos"
//     let result = fetch(url)
//     result = await result.json();
//     console.log(result)
// }
// let res = fetchData();
// fetchData()
// console.log(res)

async function getData() {
    let response = await fetch('https://jsonplaceholder.typicode.com/todos');
    let data = await response.json();

    var table = "<table border=1>";

    table += `<tr>  
            <th>UserID</th>
            <th>id</th>
            <th>Title</th>
            <th>Completed</th>
          </tr>`;

    var tr = "";
    for (let i = 0; i < data.length; i++) {
        tr += "<tr>";
        tr += `<td>${data[i].userId}</td>`;
        tr += `<td>${data[i].id}</td>`;
        tr += `<td>${data[i].title}</td>`;
        tr += `<td>${data[i].completed}</td>`;
        tr += "</tr>"
    }
    table += tr + "</table>";

    document.body.innerHTML += table;
}

getData()