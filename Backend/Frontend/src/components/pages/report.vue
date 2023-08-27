<script setup>
import { ref, watch, onBeforeMount } from "vue";
import { fetchReportData } from "../utils/report.utils";
const usersData = ref(null);
onBeforeMount(() => {
  fetchReportData(usersData);
});
</script>

<template>
  <div>
    <table v-if="usersData" id="green-table">
      <thead>
        <tr>
          <th>Total Users</th>
          <th>% of users which saw image</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{{ usersData.listOfUsers ? usersData.listOfUsers : 0 }}</td>
          <td>
            {{
              usersData.numberOfUsersWhichSawImageInPercentage
                ? `${usersData.numberOfUsersWhichSawImageInPercentage}%`
                : "0%"
            }}
          </td>
        </tr>
      </tbody>
    </table>
    <div v-else><p>No data to display</p></div>
  </div>
</template>
<style>
#green-table {
  margin-top: 20px;
}

#green-table {
  border-collapse: collapse;
  margin: 25px 0;
  font-size: 0.9em;
  font-family: sans-serif;
  min-width: 400px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);
}

#green-table thead tr {
  background-color: #009879;
  color: #ffffff;
  text-align: left;
}

#green-table th,
#green-table td {
  padding: 12px 15px;
}

#green-table tbody tr {
  border-bottom: 1px solid #dddddd;
}

#green-table tbody tr:nth-of-type(even) {
  background-color: #f3f3f3;
}

#green-table tbody tr:last-of-type {
  border-bottom: 2px solid #009879;
}

#green-table tbody tr.active-row {
  font-weight: bold;
  color: #009879;
}
</style>
