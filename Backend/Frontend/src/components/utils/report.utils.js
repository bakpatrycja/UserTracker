export async function fetchReportData(usersData) {
  const res = await fetch(`http://localhost:3000/users/get-users-data`);
  usersData.value = await res.json();
}
