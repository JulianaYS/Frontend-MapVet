<template>
  <div class="container">
    <swiper :navigation="true" :modules="modules" class="mySwiper">
      <swiper-slide v-for="card in cards" :key="card.id">
        <pv-card class="card" >
          <template #header>
            <img :src="card.imageUrl" alt="Card Image" style="width: 30%; height: auto;"/>
          </template>
          <template #title> <h2>{{ card.title }}</h2></template>
          <template #subtitle>{{card.rating}}</template>
          <template #content>
            <p>{{ card.description }}</p>
            <p><strong>📍 Dirección:</strong> {{ card.address }}</p>
            <p><strong>&#128222; Teléfono:</strong> {{ card.phoneNumber }}</p>
          </template>
          <template #footer>
            <pv-button icon="pi pi-check" label="Call" severity="success" style="margin-left: 1.3em"/>
            <pv-button icon="pi pi-check" label="Share" style="margin-left: 1.3em" />
            <pv-button icon="pi pi-times" label="Cancel" severity="secondary" style="margin-left: 1.3em" />
          </template>
        </pv-card>
      </swiper-slide>
    </swiper>
  </div>
</template>


<script >
import { Swiper, SwiperSlide } from 'swiper/vue';
import {Navigation} from "swiper/modules";

import 'swiper/css';
import 'swiper/css/navigation';

import {RecommendationsApiService} from "@/public/services/recommendations-api.service";

export default {

  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [Navigation],
    };
  },
  data() {
    return {
      cards:[],
      recommendationsService:null
    };
  },
  created() {
    this.recommendationsService = new RecommendationsApiService();
    this.recommendationsService.getAll()
        .then(response => {
          this.cards = response.data;
          console.log(this.cards);
        })
        .catch(error => {
          console.error('Error:', error);
        });
  }
};
</script>

<style>
.container {
  display: flex;
  justify-content: center;
  align-items: center;

}
.card {
  display: grid;
  border: 1px solid #ddd;
  padding: 20px;
  margin: 10px;
  text-align: center;

}

</style>