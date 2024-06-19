const userList = document.getElementById('user-list');

fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => {
        users.forEach(user => {
            const userCard = `
            <div class="col-md-4 mb-3">
            <div class="card border-primary rounded shadow">
            <div class="card-body">
                <h5 class="card-title text-primary"><b>${user.name}</b></h5>
              <p class="card-text">
                <span class="fw-bold"><b>ID:</b></span> ${user.id}<br>
                <span class="fw-bold"><b>Ім'я користувача:</b></span> ${user.username}<br>
                <span class="fw-bold"><b>Email:</b></span> ${user.email}<br>
                <span class="fw-bold"><b>Адреса:</b></span> ${user.address.street}, ${user.address.city}, ${user.address.zipcode}<br>
                <span class="fw-bold"><b>Телефон:</b></span> ${user.phone}<br>
                <span class="fw-bold"><b>Веб-сайт:</b></span> <a href="${user.website}">${user.website}</a>
              </p>
            </div>
          </div>
        </div>
      `;

            userList.innerHTML += userCard;
        });
    });