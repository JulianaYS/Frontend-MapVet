<template>
  <div class="appointment-detail">
    <div class="card">
      <div class="content">
        <div class="image-container">
          <img :src="veterinary.image" alt="Veterinary Image" style="width: 400px; height: 300px;" />
        </div>
        <div class="form">
          <div class="field">
            <label for="veterinaryName" class="label">Veterinary</label>
            <input type="text" id="veterinaryName" v-model="veterinary.name" class="input" />
          </div>
          <div class="field">
            <label for="petName" class="label">Pet Name</label>
            <input type="text" id="petName" v-model="pet.name" class="input"/>
          </div>
          <div class="field">
            <label for="description" class="label">Description</label>
            <textarea id="description" v-model="appointment.description" class="input large-input"></textarea>
          </div>
          <div class="field">
            <label for="status" class="label">Status</label>
            <select id="status" v-model="appointment.status" class="input">
              <option value="published">Published</option>
              <option value="unpublished">Unpublished</option>
            </select>
          </div>
          <button class="reserve-button" @click="reserve" style="font-size: 1rem; padding: 15px 30px;">Reserve</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    veterinary: {
      type: Object,
      default: () => ({ name: 'MediCat', image: 'https://th.bing.com/th/id/OIP.ViNdF2Vm7VAw8dRqn_VR6gHaE4?rs=1&pid=ImgDetMain' })
    },
    pet: {
      type: Object,
      default: () => ({ name: 'Abogato' })
    },
    appointment: {
      type: Object,
      default: () => ({ description: 'cita para consulta medica mensual', status: 'published' })
    }
  },
  methods: {
    reserve() {

      console.log('Appointment reserved');
    }
  }
};
</script>

<style scoped>

.appointment-detail {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
}

.card {
  background-color: rgba(255, 240, 203, 1);
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  padding: 20px;
  width: 900px; /* Adjust the width as needed */
}

.content {
  display: flex;
}

.image-container {
  margin-right: 20px;
}

.form {
  width: 100%;
}

.field {
  margin-bottom: 10px;
}

.label {
  font-family: 'Inria Sans', sans-serif;
  font-weight: bold;
}

.input {
  width: 100%;
  padding: 8px;
  box-sizing: border-box;
  font-family: 'Inria Sans', sans-serif;
  border: none;
  border-radius: 5px;
}

.large-input {
  height: 100px;
}

.reserve-button {
  font-family: 'Inria Sans', sans-serif;
  padding: 9px;
  background-color: #31b4a7;
  color: #ffffff;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  font-weight: bold;
}

@media screen and (min-width: 600px) {
  .content {
    flex-direction: row; /* Vuelve a la disposición en fila en pantallas más grandes */
    align-items: flex-start;
  }

  .image-container {
    margin-bottom: 0;
    margin-right: 20px;
  }

  .input {
    width: calc(100% - 16px); /* Ajusta el ancho teniendo en cuenta el relleno */
  }
}

@media screen and (max-width: 600px) {
  .content {
    align-items: center; /* Centra los elementos en pantallas más pequeñas */
  }

  .image-container {
    margin-bottom: 10px;
  }
}

</style>