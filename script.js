async function searchUser() {
  event.preventDefault();

  let username = document.getElementById("username").value;
  let info = document.getElementById("info");

  try {
      let response = await fetch(`https://api.github.com/users/${username}`);
      let data = await response.json();

      if (data.message === "Not Found") {
          info.innerHTML = "❌ Invalid User: User does not exist"; //I am unable to use fontawesome coz javascript.
      } else {
          info.innerHTML = `
              <img src="${data.avatar_url}" width="100" height="100" style="border-radius: 50%;">
              <p><strong>User:</strong> ${data.login}</p>
              <hr><br>
              <p><strong>Bio:</strong> ${data.bio || "No bio available"}</p>
          
              <p><strong>Public Repositories:</strong> ${data.public_repos || "No Public Repo"
              }</p>
              <p><strong>Followers:</strong> ${data.followers}</p>
              <p><strong>Following:</strong> ${data.following}</p>
          `;
      }
  } catch (error) {
      info.innerHTML = "⚠️ Error fetching data";
      console.error("Error:", error);
  }
}

//Also tried this but this will not Work!!
/*
async function searchUser() {
  event.preventDefault(); 
  let username = document.getElementById("username").value;
  let info = document.getElementById("info");

  try {
    let response = await fetch('https://api.github.com/users/${username}');
    let data = await response.json();

    if (data.status === "OK") {
      resultElement.innerHTML = `User: ${user.handle} <br> Bio: ${data.bio || "No Bio available"} <br> Public Repo: ${data.public_repos} <br> No. of followers: ${data.followers} <br> No. of following: ${data.following} <br>`;
    } else {
      resultElement.innerHTML = "Invalid User: User does not exist";
    }
  }
  catch (error) {
    resultElement.innerHTML = "Error fetching data";
    console.error("Error", error);
  }
}
*/
