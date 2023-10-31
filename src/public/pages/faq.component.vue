<template>
  <div style="display: flex; justify-content: center; align-items: center; ">

    <h1>Frequently Asked Questions</h1>


  </div>
  <section class="content">
    <div class="questions">
      <div v-for="p in questions" :key="p.id" class="product-box">
        <h1 style="text-align: center;">
          {{p.question}}
        </h1>
        <br>
        <p>{{p.answer}}</p>


      </div>
    </div>
  </section>




</template>

<script>

export default {
  data(){
    return {
      questions:[],
    };
  },
  mounted() {
    fetch("https://my-json-server.typicode.com/Yorusito/VetCareDB/faq")
        .then((res) => res.json())
        .then((data) => {
          // Si los datos se devuelven como un array directamente, asigna data a products directamente
          this.questions = data;
        })
        .catch((error) => {
          console.error("Error al cargar los datos:", error);
        });
  },
};


</script>

<style scoped>


.content {
  flex: 2;
  display: flex;
  background: rgba(255, 240, 203, 1);
  margin: 20px;
  align-items: center;
  justify-content: center;
}

.product-box {
  font-family: 'Nunito', sans-serif;
  margin: 0;
  padding: 0;
}

div.questions {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 50px;
  max-width: 800px;
  margin-left: 15px;
}

.product-box {
  border: 1px solid #DDF3F6;
  border-radius: 10px;
  padding: 10px;
  max-width: 400px; /* Opcional: limita el ancho máximo de los cuadros para evitar que sean demasiado anchos */
  background: #DDF3F6;
}
</style>