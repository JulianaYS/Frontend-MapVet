<script setup>

</script>

<template>
  <div class="profile-container">
    <h1>Profile</h1>
    <div class="profile-info">
      <img :src="user.photo" alt="Profile Photo" class="profile-photo" />
      <div class="attributes">
        <p>Name: </p>
        <p>Email: </p>
        <p>Gender: </p>
        <p>Birthdate: </p>
      </div>
      <div class="data">
        <div class="editable-data">
          <p>{{ user.name }}</p>
          <i class="fas fa-pencil"></i>
        </div>
        <div class="editable-data">
          <p>{{ user.email }}</p>
          <i class="fas fa-pencil"></i>
        </div>
        <div class="editable-data">
          <p>{{ user.gender }}</p>
          <i class="fas fa-pencil"></i>
        </div>
        <div class="editable-data">
          <p>{{ user.birthDate }}</p>
          <i class="fas fa-pencil"></i>
        </div>
      </div>
    </div>
    <router-link to="/petprofile">
      <button class="view-pets-button" style="font-size: 1rem; padding: 15px 30px;">See pets</button>
    </router-link>
  </div>

</template>

<style scoped>

</style>