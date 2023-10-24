<script>

export default {
  name: "app",
  data() {
    return {
      drawer: false,
      items: [
        { label: "Home", to: "/home" },
        { label: "Recommendations", to: "/about" },
        { label: 'Appointments', to: '/tutorials' },
        { label:'Store', to:'/store'},
        { label: "Faq", to: "/faq" },
        { label: 'Register', to: '/register'},
        { label: 'Login', to: '/login'}
      ],
    };
  },
};


</script>

<template>
  <pv-toast></pv-toast>
  <header>
    <pv-toolbar class="bg-red ">

      <template #start>
        <pv-button
            class="p-button-text text-white "
            icon="pi pi-bars"
            @click="drawer = !drawer"
        ></pv-button>
        <img alt="user header" src="https://upc-coders.github.io/MapVet-LandingPage-Final/assets/images/logo2.png" style="width: 10%; height: auto;" />
        <h1>VetMap</h1>

      </template>
      <template #end>
        <div class="flex-column">
          <router-link
              v-for="item in items"
              :to="item.to"
              custom
              v-slot="{ navigate, href }"
              :key="item.label"
          >
            <pv-button class="p-button-text text-white header-link-home"
                       :href="href"
                       @click="navigate">
              {{ item.label }}
            </pv-button>
          </router-link>
        </div>
      </template>
    </pv-toolbar>
  </header>
  <pv-sidebar v-model:visible="drawer"> </pv-sidebar>
  <RouterView />
</template>

<style scoped>

.bg-red {
  background-color: #31b4a7; /* Cambia "red" al color que desees */
}

.header-link-home {
  margin-right: 30px; /* Adjust the value as needed */
}


</style>