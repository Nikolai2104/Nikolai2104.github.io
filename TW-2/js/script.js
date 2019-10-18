$(window).ready(function(){

    // function insertPerson(e){
    //     var person = document.createElement("span");
    //     person.innerText = e;
    //     document.body.appendChild(element);
    // }

    // insertPerson(personAll[0].name);

    var xhr = new XMLHttpRequest();
    xhr.open("GET", "http://demo.sibers.com/users", "true");
    xhr.onload = function(response) {
        // console.log(JSON.parse(response.target.response));
    var personAll = JSON.parse(response.target.response)
    console.log(personAll);
    for( var i = 0; i < personAll.length; i++){
        console.log(personAll[i].address);
        let element = document.createElement("span");
        document.body.appendChild(element);
        let textNode = document.createTextNode(personAll[i].name);
        element.appendChild(textNode);
    }
    }
    xhr.send();

});