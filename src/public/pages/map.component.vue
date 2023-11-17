<script setup>
import { ref } from 'vue';

const veterinaries = ref([
  {
    id: 1,
    name: 'Pecas Derm',
    rating: '⭐️⭐️⭐️⭐️⭐️',
    address: '📍 Av. los Fresnos 1205, La Molina 15024',
    phone: '☎️ 012750806',
    image: 'img/vt1.png',
    link: 'infoveterinary.html'
  },
  {
    id: 2,
    name: 'Hemvet',
    rating: '⭐️⭐️⭐️⭐️',
    address: '📍 Plaza San José, 72190 Puebla, Pue., México',
    phone: '☎️ 012740159',
    image: 'img/vt2.png',
    link: 'infoveterinary.html'
  },
  {
    id: 3,
    name: 'MediCan',
    rating: '⭐️⭐️⭐️⭐️',
    address: '📍 Av. Villa María 749, Villa María del Triunfo 15809',
    phone: '☎️ 012811046',
    image: 'img/vt3.png',
    link: 'infoveterinary.html'
  }
]);

const googleMapEmbedURL = 'https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d15620.173868197724!2d-77.11399785!3d-11.83222965!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses-419!2spe!4v1686435004255!5m2!1ses-419!2spe';

</script>

<template>
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <link href="https://fonts.googleapis.com/css2?family=Nunito:ital@1&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Chakra+Petch:wght@300&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@600&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Inria+Sans:wght@300&display=swap" rel="stylesheet">
    <title>MapVet-Map</title>
  </head>
  <body>

  <div class="content">
    <div class="vetcards">
      <div v-for="vet in veterinaries" :key="vet.id" class="veterinary">
        <div class="info">
          <h1>{{ vet.name }}</h1>
          <h2>{{ vet.rating }}</h2>
          <h2>{{ vet.address }}</h2>
          <h2>{{ vet.phone }}</h2>
        </div>
        <pv-button>
          <a :href="vet.link"><img :src="vet.image" alt="veterinarylocal" class="veterinary"></a>
        </pv-button>
      </div>
    </div>
    <iframe :src="googleMapEmbedURL" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
  </div>
  </body>
</template>

<style scoped>
* {
  font-family: 'Nunito', sans-serif;
  margin: 0;
  padding: 0;
}
body{
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  margin: 0;
}
html {
  scroll-behavior: smooth;

}
/*Header*/
.Header{
  flex:0
}
.headerContent{
  padding: 10px;
}
.logo {
  float: left;
  margin-left: 10px;
  margin-right: 10px;
  height: 70px;
  width: 80px;
}
.logo2 {
  float: right;
  margin-left: 10px;
  margin-right: 10px;
  height: 70px;
  width: 70px;
}
.headerContent h1{
  text-align: center;
  font-family: 'Ubuntu', sans-serif;
  font-size: 40px;
}

/*NAVBAR*/
.navbar{
  width: 70%;
  margin-left: auto ;
  margin-right: auto;
}
nav {
  padding: 10px;
  height: 80px;
  font-size: 20px;
  background: rgba(49, 180, 167, 1);

}
.navbar-options{
  padding: 25px;
}
nav ul {
  list-style-type: none;
  text-align: center;
}

nav li {
  display: inline;
  background: rgba(255, 240, 203, 1);
  border-radius: 8px;
  margin-left: 25px;
  margin-right: 25px;
  padding: 5px;
}

nav a {
  font-family: 'Montserrat', sans-serif;
  font-size: 20px;
  text-decoration: none;
  color: #333;
  padding: 10px;
}


/*veterinary list*/
.content {
  flex: 2;
  display: flex;
  background: rgba(255, 240, 203, 1);
  margin: 20px;
  align-items: center;
  justify-content: center;
}
.veterinary{
  display: flex;
  padding: 10px;
  margin-right: 30px;
  font-size: 10px;
  align-items: center;
}
.info{
  width: 180px;
}
.veterinary img{
  width: 200px;
  height: 100px;
}
.veterinary button{
  cursor: pointer;
  background-color: transparent;
  border: 0;
}
/*MAP*/
</style>