<template>
  <div style="display: flex; justify-content: center; align-items: center; ">
    <h1>Pet Profile</h1>
  </div>

  <section class="PetProfile">
    <div class="cardProfile">
      <div v-for="p in pets" :key="p.id" class="product-box">
        <img :src="p.photoUrl" alt="pet" class="petImg">
        <div class="petInfo">
        <div class="attributes">
          <h2>ID:</h2>
          <br>
          <h2>Animal:</h2>
          <br>
          <h2>Name:</h2>
          <br>
          <h2>Breed:</h2>
          <br>
          <h2>Weight:</h2>
        </div>
        <div class="data">
          <h2>{{p.id}}</h2>
          <br>
          <h2>{{p.type}}</h2>
          <br>
          <h2>{{p.name}}</h2>
          <br>
          <h2>{{p.breed}}</h2>
          <br>
          <h2>{{p.weight}}</h2>
        </div>
        </div>
      </div>
    </div>
  </section>

  <router-link to="/create-petprofile">
  <pv-button label="Added Pet" class="create-btn"></pv-button>
  </router-link>

</template>

<script>

export default {

  data(){
    return {
      pets:[],
      newPet: {
        id: '',
        type: '',
        name: '',
        breed: '',
        weight: '',
        photoUrl: '',
      },
      mostrarFormulario: false,
    };
  },
  mounted() {
    // Carga los datos de la API
    this.cargarDatos();
  },
  methods: {
    cargarDatos() {
      fetch('http://localhost:5108/api/v1/pets')
          .then((res) => res.json())
          .then((data) => {
            this.pets = data;
          })
          .catch((error) => {
            console.error('Error al cargar los datos:', error);
          });
    },
    agregarMascota() {
      // Realiza una solicitud POST al servidor JSON para agregar la nueva mascota
      fetch('http://localhost:5108/api/v1/pets', {
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
              type: '',
              name: '',
              breed: '',
              weight: '',
              photoUrl: '',
            };
            // Oculta el formulario nuevamente
            this.mostrarFormulario = false;
          })
          .catch((error) => {
            console.error('Error al agregar la mascota:', error);
          });
    },
  },
};


</script>

<style scoped>
.PetProfile{
  flex: 2;
  display: flex;
  background: rgba(255, 240, 203, 1);
  margin: 20px;
}
.cardProfile{
  width: 250px;
  text-align: center;
  margin: auto;
}
.petInfo{
  display: flex;

}

.attributes{
  padding: 5px;
  width: 125px;
}
.data{
  padding: 5px;
  width: 125px;
}
.data h2{
  font-family: 'Inria Sans', sans-serif;
  color: #08857C;
  background: white;
  border-radius: 10px;
}
.attributes h2{
  font-family: 'Inria Sans', sans-serif;
  color: #08857C;
  border-radius: 10px;
}

.petImg {
  width: 250px;
  height: 250px;
  display: block;
  margin: 0 auto;
  border-radius: 50%;
  object-fit: cover;
}

.create-btn {
  font-family: 'Inria Sans', sans-serif;
  font-weight: bold;
  padding: 10px 20px;
  margin: 1cm auto 1cm;

  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  background-color: #31b4a7;
  color: #fff;

}

</style>