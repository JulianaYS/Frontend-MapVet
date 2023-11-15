
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

<script >
export default {
  data() {
    return {
      user: {
        name: 'Berta Palomino',
        email: 'berta.palomino@gmail.com',
        gender: 'Femenino',
        birthDate: '15/10/1992',
        photo: 'https://i.pinimg.com/564x/9e/60/d6/9e60d6c2edb408fa57049b183255e936.jpg', // Reemplaza con la URL real de la foto
      }
    };
  },
  mounted() {
    // Carga los datos de la API
    this.cargarDatos();
  },
  methods: {
    cargarDatos() {
      fetch('  ')//cambiar
          .then((res) => res.json())
          .then((data) => {
            this.user = data;
          })
          .catch((error) => {
            console.error('Error al cargar los datos:', error);
          });
    },

  }
};

</script>


<style scoped>

.profile-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 87vh;
  background: rgba(255, 240, 203, 1);
}

.profile-info {
  display: flex;
  align-items: center;
}

.profile-photo {
  width: 300px; height: 300px;
  border-radius: 50%;
  margin-right: 50px;
}
.editable-data {
  display: flex;
  align-items: baseline;
}

.fa-pencil {
  cursor: pointer;
}

.data,
.attributes {
  padding: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.data p{
  font-family: 'Inria Sans', sans-serif;
  background: white;
  border-radius: 10px;
  width: 350px;
  height: 30px;
  font-weight: bold;
  justify-content: center;
  display: flex;
  align-items: center;
  margin-bottom: 60px;
}

.attributes p{
  font-family: 'Inria Sans', sans-serif;
  justify-content: center;
  margin-bottom: 60px;
}

.view-pets-button {
  font-family: 'Inria Sans', sans-serif;
  padding: 9px;
  background-color: #31b4a7;
  color: #ffffff;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  font-weight: bold;
}
h1 {
  font-family: 'Inria Sans', sans-serif;
  font-size: 3em;
  text-align: center;
}

@media screen and (max-width: 600px) {
  .profile-info {
    flex-direction: column;
    text-align: center;
  }

  .attributes p,
  .data p {
    width: auto;
  }
}

</style>