<template>
  <div class="container">
    <swiper :navigation="true" :modules="modules" class="mySwiper">

      <swiper-slide v-for="card in cards" :key="card.id">
        <pv-card class="card" >
          <template #header>
            <img :src="card.imageUrl" alt="Card Image" style="width: 30%; height: auto;"/>
          </template>
          <template #title> <h2>{{ card.title }}</h2></template>
          <template #subtitle>&#11088; &#11088; &#11088; &#11088;</template>
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
      cards: [
        {
          id: 1,
          title: 'Pecas Derm',
          subtitle: '&#11088; &#11088; &#11088; &#11088',
          description: 'Tu clínica veterinaria especializada en dermatología animal. Nuestros expertos cuidan la piel y pelaje de tus mascotas con pasión y precisión. Garantizamos su salud y confort en cada visita.\n',
          address: 'Plaza San José, 72190 Puebla, Pue., México',
          phoneNumber: '012740159',
          imageUrl: 'https://www.simbiotia.com/wp-content/uploads/diseno-de-clinicas-veterinarias.jpg'
        },
        {
          id: 2,
          title: 'Hemvet',
          subtitle: 'Subtitle 2',
          description: 'Tu clínica veterinaria de confianza. Nos dedicamos a la salud y el bienestar de tus mascotas. Nuestros veterinarios altamente calificados están aquí para cuidar y proteger a tus fieles amigos\n' ,
          address: 'Av. Villa María 749, Villa María del Triunfo 15809',
          phoneNumber: '012811046',
          imageUrl: 'https://images.pexels.com/photos/5731866/pexels-photo-5731866.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        },
        {
          id: 3,
          title: ' MediCan',
          subtitle: 'Subtitle 3',
          description: ' Confía en nuestros médicos veterinarios y groomers dedicados, quienes están comprometidos en brindar un servicio excepcional para el cuidado y la felicidad de tu querida mascota. Siempre a tu disposición\n' ,
          address: 'Av. los Fresnos 1205, La Molina 15024',
          phoneNumber: ' 012750806',
          imageUrl: 'https://medios.clinicaveterinariamadrid.es/logo_web_cvmedican.svg',
        }]
    };
  },
};
</script>


<style>
.card-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-gap: 60px;
  max-width: 800px;
  margin: 0 auto; /* Centrar el contenedor en la página */
  padding: 20px;
}
</style>