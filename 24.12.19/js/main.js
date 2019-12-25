const reachedBar = document.querySelector('#reachedBar');
const value = document.querySelector('#curentValue');
const balance = document.querySelector('#balance');
const info = document.querySelector('#info');
const target = document.querySelector('#target');
const targetValue = parseInt(document.querySelector('#targetValue').innerHTML.replace(/\D+/g, ''));

const xhr = new XMLHttpRequest;
xhr.open('GET', 'https://alex.devel.softservice.org/testapi/');
xhr.send();

xhr.onreadystatechange = () => {
  if (xhr.readyState == 4) {
    if (xhr.status !== 200) {
      info.children[0].innerHTML = "Server is not available. Try again";
      info.children[0].classList.add('error')
      value.classList.add('progress-bar__curent-value_opacity')
    } else {
      const firstValue = JSON.parse(xhr.response).balance_usd;
      value.innerHTML = `${firstValue}$`;
      reachedBar.style = `width: ${(((100 / targetValue) * firstValue) / 10) * 10}%`;
      let curentValue = parseInt(document.querySelector('#curentValue').innerHTML.replace(/\D+/g, ''));
      progress = (step) => {
        if (curentValue < targetValue - step) {
          setTimeout(() => {
            curentValue = curentValue + step;
            let convectValue = (100 / targetValue) * curentValue;
            reachedBar.style = `width: ${Math.round(convectValue)}%`;
            value.innerHTML = `${(Math.round(curentValue * 10) / 10)}%`;
            balance.innerHTML = Math.round((targetValue - curentValue) * 10) / 10;
            progress(step);
            if ((Math.round(curentValue * 10) / 10) == targetValue) {
              info.classList.add('reached__info_opacity');
              target.classList.add('success');
            }
          }, 500)
        } else {
          stop
        }
      }
      progress(0.2);
    }
  }
}