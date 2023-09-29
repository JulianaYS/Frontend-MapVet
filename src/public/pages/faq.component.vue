
<template>
  <div style="display: flex; justify-content: center; align-items: center; height: 200px;">

    <h1>Frequently Asked Questions</h1>
  </div>


  <div v-for="p in questions" :key="p.id" class="product-box">
    <h3>
      {{p.question}}
      <br>
      {{p.answer}}
    </h3>


  </div>

</template>

<script>

export default {
  data(){
    return {
      questions:[],
    };
  },
  mounted() {
    fetch("https://my-json-server.typicode.com/Yorusito/VetCareDB/data")
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
.product-box {
  border: 1px solid #ccc;
  padding: 10px;
  margin-bottom: 10px;
  max-width: 400px; /* Opcional: limita el ancho máximo de los cuadros para evitar que sean demasiado anchos */
  margin-left: auto;
  margin-right: auto;
}
</style>
