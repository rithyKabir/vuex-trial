<template>
  <div class="container mt-3">
    <div class="row">
      <div class="col">
        <p class="h3 text-success">User List</p>
        <p class="fst-italic">Used Async Action to fetch the data from end point.</p>
      </div>
    </div>
  </div>

  <div v-if="userStore.loading" class="container">
    <div class="row">
      <div class="col">
        Loading....
      </div>
    </div>
  </div>

  <div v-if="!userStore.loading && userStore.error" class="container">
    <div class="row">
      <div class="col">
        <p class="fw-bold text-danger">{{ userStore.errorMessage }}</p>
      </div>
    </div>
  </div>

  <div v-if="!userStore.loading && userStore.userList.length > 0" class="container">
    <div class="row">
      <div class="col">
        <table class="table table-hover text-center table-striped">
          <thead class="bg-secondary text-white">
          <tr>
            <th>SNO</th>
            <th>Name</th>
            <th>Email</th>
            <th>Website</th>
            <th>Company</th>
            <th>Location</th>
          </tr>
          </thead>
          <tbody>
          <tr v-for="user in userStore.userList" :key="user.id">
            <td>{{ user.id }}</td>
            <td>{{ user.name }}</td>
            <td>{{ user.email }}</td>
            <td>{{ user.website }}</td>
            <td>{{ user.company.name }}</td>
            <td>{{ user.address.city }}</td>
          </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import {useUserListStore} from '../../pinia store/UserListStore'


export default {

    setup(){
        const userStore = useUserListStore();
        userStore.getUserList();
        return {userStore}
    }
  
}
</script>

<style scoped>

</style>
