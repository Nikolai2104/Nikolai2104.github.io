// import React from 'react';
// import './App.css';


// function App() {
//   return (
//     <div classNameName="App">
//       <h1>Hello world!</h1>
//     </div>
//   );
// }

// export default App;

import React from 'react';
import './App.css';


function App() {

  var xhr = new XMLHttpRequest();
  xhr.open("GET", "http://demo.sibers.com/users", "true");
  xhr.onload = function users(response) {
      // console.log(JSON.parse(response.target.response));
  
  // console.log(personAll);
  return JSON.parse(response.target.response);
  }
  xhr.send();

  console.log(users(response));

  
  return (
    <div>
      <div className="row person">
        <div className="col-md-6 data-main">
          <h3>Имя: <span id="name"></span></h3>
          <h3>Имя пользователя: <span id="username"></span></h3>
          <h3>E-mail: <span id="email"></span></h3>
          <h3>Телефон: <span id="phone"></span></h3>
        </div>
        <div className="col-md-6 data-address">
          <h3>Улица А: <span id="streetA"></span></h3>
          <h3>Улица B: <span id="streetB"></span></h3>
          <h3>Улица C: <span id="streetC"></span></h3>
          <h3>Улица D: <span id="streetD"></span></h3>
          <h3>Город: <span id="city"></span></h3>
        </div>
      </div>
      <div className="change">
        <button type="button" className="btn btn-primary">Изменить</button>
        <button type="button" className="btn btn-warning">Удалить</button>
      </div>
    </div>
  );
}

export default App;

