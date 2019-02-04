fetch('https://api.github.com/users/6thSence')
        .then(response => response.json())
        .then(data => showData(data))
        .catch(err => console.log('Информация о пользователе не доступна'));

    function showData(data) {
        //console.log(data);
        if (data.message === "Not Found") {
            const wrongUser = document.createElement("h1");
            const wrongUserMessage = document.createTextNode("Извините, информация о таком пользователе не найдена.");
            wrongUser.appendChild(wrongUserMessage);
            document.body.appendChild(wrongUser);
        }

        let imgUrl = data.avatar_url;
        if (imgUrl != null) {
            const gitAvatar = document.createElement("img");
            gitAvatar.setAttribute('alt', 'аватарка');
            gitAvatar.setAttribute('src', imgUrl);
            document.body.appendChild(gitAvatar);
        } else {
            console.log('Информация об аватарке пользователе не доступна');
        }

        let userName = data.name;
        if (userName != null) {
            const gitName = document.createElement("h1");

            const gitUrl = document.createElement("a");
            gitUrl.setAttribute('href', data.html_url);
            gitUrl.setAttribute('target', '_blank');

            const gitLinkName = document.createTextNode(userName);
            gitName.appendChild(gitUrl);
            gitUrl.appendChild(gitLinkName);
            document.body.appendChild(gitName);
        } else {
            console.log('Информация об имени пользователя не доступна');
        }

        let profileDescription = data.bio;
        if (profileDescription != null) {
            const gitBio = document.createElement("div");
            document.body.appendChild(gitBio);
            gitBio.appendChild(document.createTextNode(profileDescription));
        } else {
            console.log('Информация об описании профиля пользователя не доступна');
        }
};
