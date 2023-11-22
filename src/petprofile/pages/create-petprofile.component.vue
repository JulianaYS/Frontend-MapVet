<template>
  <div class="create-pet-profile">
    <div class="card">
      <div class="content">

        <div class="form">
          <div class="field">
            <img src="https://media.discordapp.net/attachments/1014323196859781182/1177024564040040509/png-transparent-add-animal-cat-domestic-pet-wild-animals-icon-removebg-preview.png?ex=6571008c&is=655e8b8c&hm=8a34e2ebb51a00db46bb8ddca33c3107a5b9e12a44e5303c4139c12c5f5b120b&=&format=webp" alt="Default Photo" style="width: 200px; height: 200px; display: block; margin: 0 auto;" />
          </div>

          <div class="field">
            <label for="animal" class="label">Animal</label>
            <input type="text" id="animal" v-model="pet.animal" class="input" />
          </div>
          <div class="field">
            <label for="name" class="label">Name</label>
            <input type="text" id="name" v-model="pet.name" class="input"/>
          </div>
          <div class="field">
            <label for="breed" class="label">Breed</label>
            <input type="text" id="breed" v-model="pet.breed" class="input"/>
          </div>
          <div class="field">
            <label for="weight" class="label">Weight</label>
            <input type="text" id="weight" v-model="pet.weight" class="input"/>
          </div>
          <div class="field">
            <label for="photoUrl" class="label">Photo URL</label>
            <input type="text" id="photoUrl" v-model="pet.photoUrl" class="input"/>
          </div>
          <pv-button class="add-pet-button" @click="addPet" style="font-size: 1rem; padding: 15px 30px;">Add Pet</pv-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      pet: {
        animal: '',
        name: '',
        breed: '',
        weight: '',
        photoUrl: ''
      }
    };
  },
  methods: {
    addPet() {
      window.alert('¡Mascota creada!');
      // Realiza una solicitud POST al servidor JSON para agregar la nueva mascota
      fetch('https://my-json-server.typicode.com/Yorusito/VetCareDB/pets', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(this.newPet),
      })
          .then((response) => response.json())
          .then((data) => {
            // Agrega la nueva mascota a la lista local
            this.pets.push(data);
            // Limpia los valores del formulario
            this.newPet = {
              animal: '',
              name: '',
              breed: '',
              weight: '',
              photoUrl: '',
            };

            this.mostrarFormulario = false;
          })
          .catch((error) => {
            console.error('Error al agregar la mascota:', error);
          });
    },
  }
};
</script>

<style scoped>

.create-pet-profile {
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
  width: 600px;
}

.content {
  display: flex;
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

.add-pet-button {
  display: block;
  margin: 0 auto;
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
    flex-direction: row;
    align-items: flex-start;
  }
}

@media screen and (max-width: 600px) {
  .content {
    align-items: center;
  }
}
</style>
