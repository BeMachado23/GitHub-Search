function getProfile() {
    event.preventDefault();
    const username = document.getElementById('usernameInput').value;
    fetch(`https://api.github.com/users/${username}`)
      .then(res => res.json())
      .then(data => {
        const profile = document.getElementById('profile-info');
        if (data.message === 'Not Found') {
          profile.innerHTML = "No profile";
        } else {
          profile.innerHTML = `
            <img src="${data.avatar_url}" class="profileImg"><br> <p>Nome: ${data.name}<br> Seguidores: ${data.followers} <br> Repositorios: ${data.repos}</p>
           
          `;
        }
      });
  }
  