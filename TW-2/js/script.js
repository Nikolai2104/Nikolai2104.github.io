// create request in server 
var xhr = new XMLHttpRequest();
xhr.open("GET", "http://demo.sibers.com/users");
xhr.send();
xhr.onload = function box(response) {
    // list = JSON.parse(list.target.response);
    arr = response.target.response;
    localStorage.setItem('list', arr);
}

// save objects to storage
var list = JSON.parse(localStorage.getItem('list'));
//Выносим глобально переменную ИД
var idp;



// create sort
// sort by name 
var select = document.querySelector('.custom-select');
function sort() {
    if (select.value == 1) {
        for (let i = 0; i < list.length; i++) {
            for (let k = i; k < list.length; k++) {
                if (list[i].name > list[k].name) {
                    let temp = list[i];
                    list[i] = list[k];
                    list[k] = temp;
                }
            }
        }
    }

    // sort by username 
    if (select.value == 2) {
        for (let i = 0; i < list.length; i++) {
            for (let k = i; k < list.length; k++) {
                if (list[i].username > list[k].username) {
                    let temp = list[i];
                    list[i] = list[k];
                    list[k] = temp;
                }
            }
        }
    }

    // sort by phone 
    if (select.value == 3) {
        for (let i = 0; i < list.length; i++) {
            for (let k = i; k < list.length; k++) {
                if (list[i].phone > list[k].phone) {
                    let temp = list[i];
                    list[i] = list[k];
                    list[k] = temp;
                }
            }
        }
    }

    // sort by phone 
    if (select.value == 4) {
        for (let i = 0; i < list.length; i++) {
            for (let k = i; k < list.length; k++) {
                if (list[i].address.streetA > list[k].address.streetA) {
                    let temp = list[i];
                    list[i] = list[k];
                    list[k] = temp;
                }
            }
        }
    }
    // output data on the page
    const templates = list.map(list => createPerson(list))
    const html = templates.join(' ')
    document.querySelector('#userBox').innerHTML = html;

    function createPerson(list) {
        return `
        <div data-id="${list.id}" class="user-box">
            <div class="row person">
                <div class="col-lg-3 mt-2 mb-4 photo">
                    <img src="${list.avatar}" alt="">
                </div>
                <div class="col-lg-5 dataMain">
                    <h3>Имя: <span class="name">${list.name}</span></h3>
                    <h3>Имя пользователя: <span class="username">${list.username}</span></h3>
                    <h3>E-mail: <span class="email">${list.email}</span></h3>
                    <h3>Телефон: <span class="phone">${list.phone}</span></h3>
                    <h3>Сайт: <span class="website">${list.website}</span></h3>
                </div>
                <div class="col-lg-4 data-address">
                    <h3>Улица А: <span class="streetA">${list.address.streetA}</span></h3>
                    <h3>Улица B: <span class="streetB">${list.address.streetB}</span></h3>
                    <h3>Улица C: <span class="streetC">${list.address.streetC}</span></h3>
                    <h3>Улица D: <span class="streetD">${list.address.streetD}</span></h3>
                    <h3>Город: <span class="city">${list.address.city}</span></h3>
                </div>
            </div>
                <div class="change mt-3">
                    <button class="btn-edit btn btn-light" type="button">Изменить</button>
            </div>
        </div>
        `
    }

    // creating variables for working with change contacts
    var changePerson = document.querySelector('#chageBox');
    var changePersonAll = document.querySelectorAll('#chageBox');
    var btnEdit = document.querySelectorAll('.btn-edit');

    // function closing page of change
    document.querySelector('#cancel').addEventListener('click', function () {
        changePerson.classList.remove('active');
    });

    // cycle for pressing all buttons
    for (var l = 0; l < btnEdit.length; l++) {
        btnEdit[l].addEventListener('click', function () {

            changePerson.classList.add('active'); //open wondow of editing

            idp = this.parentNode.parentNode.getAttribute('data-id'); //search id

            for (var q = 0; q < list.length; q++) {
                if (list[q].id == idp) {
                    //entering data of person in the placeholder
                    document.querySelector('#photo').src = list[q].avatar;
                    document.querySelector('#name').placeholder = list[q].name;
                    document.querySelector('#username').placeholder = list[q].username;
                    document.querySelector('#email').placeholder = list[q].email;
                    document.querySelector('#phone').placeholder = list[q].phone;
                    document.querySelector('#website').placeholder = list[q].website;
                    document.querySelector('#streetA').placeholder = list[q].address.streetA;
                    document.querySelector('#streetB').placeholder = list[q].address.streetB;
                    document.querySelector('#streetC').placeholder = list[q].address.streetC;
                    document.querySelector('#streetD').placeholder = list[q].address.streetD;
                    document.querySelector('#city').placeholder = list[q].address.city;
                    //entering changes to data in the main list
                    document.querySelector('#save').addEventListener('click', function () {
                        for (var w = 0; w < list.length; w++) {
                            if (list[w].id === parseInt(idp)) {
                                if (document.querySelector('#name').value != "") {
                                    list[w].name = document.querySelector('#name').value;
                                }
                                if (document.querySelector('#username').value != "") {
                                    list[w].username = document.querySelector('#username').value;
                                }
                                if (document.querySelector('#email').value != "") {
                                    list[w].email = document.querySelector('#email').value;
                                }
                                if (document.querySelector('#phone').value != "") {
                                    list[w].phone = document.querySelector('#phone').value;
                                }
                                if (document.querySelector('#website').value != "") {
                                    list[w].website = document.querySelector('#website').value;
                                }
                                if (document.querySelector('#streetA').value != "") {
                                    list[w].address.streetA = document.querySelector('#streetA').value;
                                }
                                if (document.querySelector('#streetB').value != "") {
                                    list[w].address.streetB = document.querySelector('#streetB').value;
                                }
                                if (document.querySelector('#streetC').value != "") {
                                    list[w].address.streetC = document.querySelector('#streetC').value;
                                }
                                if (document.querySelector('#streetD').value != "") {
                                    list[w].address.streetD = document.querySelector('#streetD').value;
                                }
                                if (document.querySelector('#city').value != "") {
                                    list[w].address.city = document.querySelector('#city').value;
                                }

                                //close window of editing
                                document.querySelector('#chageBox').classList.remove('active');
                                
                            }
                        }
                        //calling new list
                        const templates = list.map(list => createPerson(list))
                        const html = templates.join(' ')
                        document.querySelector('#userBox').innerHTML = html;
                        createPerson(list);
                    });
                }
            }
            // console.log(idp);
        });
    }

}
sort();


//create live serch by name
document.querySelector('#elastic').oninput = function () {
    var val = this.value.trim();
    var elasticItems = document.querySelectorAll('h3 .name');
    console.log(elasticItems);
    if (val != "") {
        elasticItems.forEach(function(elem){
            if (elem.innerText.search(val) == -1) {
                elem.parentNode.parentNode.parentNode.parentNode.classList.add('hide');(elem.parentNode.parentNode.parentNode.parentNode);
            } else {
                elem.parentNode.parentNode.parentNode.parentNode.classList.remove('hide');
            }
        });
    } else {
        elasticItems.forEach(function (elem){
            elem.parentNode.parentNode.parentNode.parentNode.classList.remove('hide');
        });
    }
}