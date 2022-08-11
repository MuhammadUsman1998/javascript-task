
function dataSubmit() {
    firstname = document.getElementById("firstname").value;
    lastname = document.getElementById("lastname").value;
    Email = document.getElementById("Email").value;
    Education = document.getElementById("Education").value;
    Skills = document.getElementById("Skills").value;
    Organization = document.getElementById("Organization").value;
    const name = [firstname, lastname,Email, Education, Skills, Organization];


localStorage.setItem("firstname:",firstname);
localStorage.setItem("lastname:",lastname);
localStorage.setItem("Email:",Email);
localStorage.setItem("Education:",Education);
localStorage.setItem("Skills:",Skills);
localStorage.setItem("Organization:",Organization);

    if (localStorage.getItem('data') == null) {
        localStorage.setItem('data', '[]');
    }

    var old_data;
    old_data = JSON.parse(localStorage.getItem('data'));
    old_data.push(name);
    localStorage.setItem('data', JSON.stringify(old_data));
}

// Read Data
var read_all_data = document.getElementById("read_all_data");

function read_data() {
    var keys = Object.keys(localStorage);
    console.log(keys);
    for (var keys of keys) {
        console.log("Key: " + keys + "  :value:" + localStorage.getItem(keys))
    }
}

const formEl = document.querySelector("form");
const tbodyEl = document.querySelector('tbody');
const tableEl = document.querySelector('table');

formEl.addEventListener("Show", onAddClick);
tableEl.addEventListener('click', onDeleteRow);

function onAddClick(e) {
    e.preventDefault();
    firstname = document.getElementById("firstname").value;
    lastname = document.getElementById("lastname").value;
    Email = document.getElementById("Email").value;
    Education = document.getElementById("Education").value;
    Skills = document.getElementById("Skills").value;
    Organization = document.getElementById("Organization").value;
    tbodyEl.innerHTML += ` 
                        <tr>
                            <td>${firstname}</td>
                            <td>${lastname}</td>
                            <td>${Email}</td>
                            <td>${Education}</td>
                            <td>${Skills}</td>
                            <td>${Organization}</td>
                            <td><button class="deleteBtn">Delete</button></td>
                        </tr>`;
}

function renderTable() {
    let table_html = '';

    if (localStorage.getItem('data') == null) {
        localStorage.setItem('data', '[]');
    }
    else {
        let cvs = JSON.parse(localStorage.getItem('data'));
        if (cvs.length) {
            for (let index = 0; index < cvs.length; index++) {
                table_html +=  ` 
                <tr>
                    <td>${cvs[index][0]}</td>
                    <td>${cvs[index][1]}</td>
                    <td>${cvs[index][2]}</td>
                    <td>${cvs[index][3]}</td>
                    <td>${cvs[index][4]}</td>
                    <td>${cvs[index][5]}</td>
                    <td><button class="deleteBtn">Delete</button></td>
                  
                </tr>`;
            }
        }
    }

    tbodyEl.innerHTML = table_html;
}
function onDeleteRow(e) {
    // if (confirm('Are you sure want to delete this record?')) {
        if (!e.target.classList.contains("deleteBtn")) {
            return;
        }
    // }

    const btn = e.target
    btn.closest("tr").remove();
}


renderTable();



//Delete Data
var delete_data=document.getElementById('delete_data');
function delete_function(){
    localStorage.removeItem("data");
}
















//.3 Preview Button
// var newwin;

// function dataSubmit()
// {
//   newwin=window.open('result.html','width=100%');
// }

// var btn1 =document.getElementById("btn1")
// var btn2 =document.getElementById("btn2")
// var element =document.documentElement;
// btn1.addEventListener("click",()=>{
//   if(element.requestFullscreen){
//      element.requestFullscreen()
// }
// })
// btn2.addEventListener("click",()=>{
// if(document.exitFullscreen){
//    document.exitFullscreen()
// }
//})

// function addNewOrField(){
// let newNode;
// newNode =document.createElement("textarea");
// newNode.classList.add("form-control");
// newNode.classList.add("orfield");
// newNode.setAttribute("rows",3);

// let orOb =document.getElementById("or");
// let orAddButtonOb=document.getElementById("orAddButton");

// orOb.insertBefore(newNode,orAddButtonOb);
// }

// var delete_all_data=document.getElementById("delete_all_data");
// function delete_function(){
//     localStorage.removeItem('firstname');
//     localStorage.removeItem('lastname');
//     localStorage.removeItem('Education');
//     localStorage.removeItem('Skills');
//     localStorage.removeItem('Organization');
// }


// function editData(){
//     editRow=document.getElementById("editRow");
//     editRow.style.display='block';

//     firstname=document.getElementById("firstname").value;

//     window.click=function(){
//         if(event.target==editrow){
//             editRow.style.display='none';
//         }
//     }
// }