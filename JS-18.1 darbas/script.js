// Šablonas fetch
// fetch(url)
//   .then(res => res.json())
//   .then(data => console.log(data))
//   .catch(e => console.log(e.message))


// 1. Jums paskambino pažinčių portalas – jiems reikia staigiai sukurti front-endą, kuris pasiimtų duomenis iš https://randomuser.me/api/ ir juos atvaizduotų panašioje kortelėje kaip čia (dizainas neturi atitikti, bet padarykit tvarkingai - jį galite pilnai su HTML pasirašyti, bet norintiems sunkumo - pabandykite su JS sukurti html elementus).


const apiUrl = 'https://randomuser.me/api/'

function retrieveAndDisplayUsers() {
  fetch(apiUrl)
  .then(response => response.json())
   .then(data => {
    const user = data.results[0]

    const userCard = document.createElement('div')
     userCard.classList.add('user-card');
     userCard.innerHTML = `
      <img src="${user.picture.large}" alt="User Avatar">
       <h3>${user.name.first} ${user.name.last}</h3>
       <p>Email: ${user.email}</p>
       <p>Location: ${user.location.city}, ${user.location.country}</p>
            `

        const usersContainer = document.getElementById('users-container')
         usersContainer.appendChild(userCard)
        })
        .catch(error => console.log(error.message))
}

document.addEventListener('DOMContentLoaded', retrieveAndDisplayUsers)