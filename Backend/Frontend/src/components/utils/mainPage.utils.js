export async function fetchCurrentUser(currentUser) {
  const res = await fetch(`https://random-data-api.com/api/v2/users`);
  currentUser.value = await res.json();
}

export async function saveVisitingUserInDatabase(currentUser) {
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ userId: currentUser.id }),
  };

  try {
    await fetch("http://localhost:3000/users/create-user", requestOptions);
  } catch (error) {
    console.error(`Error saving user...: ${error} `);
  }
}

export async function sendUserDataToSession(currentUser) {
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ userId: currentUser.id }),
  };

  try {
    await fetch("http://localhost:3000/", requestOptions);
  } catch (error) {
    console.error(`Error sending data...: ${error} `);
  }
}

export async function updateUserWhenScrollToImage(currentUser) {
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ userId: currentUser.id, userSawImage: true }),
  };

  try {
    await fetch("http://localhost:3000/users/update-user", requestOptions);
  } catch (error) {
    console.error(`Error sending data...: ${error} `);
  }
}
