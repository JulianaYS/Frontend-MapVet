<template>
  <div>
    <pv-toast></pv-toast>
    <header v-if="showHeader">
      <pv-toolbar class="bg-red">
        <template #start>
          <pv-button
              class="p-button-text text-white"
              icon="pi pi-bars"
              @click="drawer = !drawer"
          ></pv-button>
          <img
              alt="user header"
              src="https://upc-coders.github.io/MapVet-LandingPage-Final/assets/images/logo2.png"
              style="width: 10%; height: auto;"
          />
          <h1>VetMap</h1>
        </template>
        <template #end>
          <div class="flex-column">
            <!-- Mostrar solo las opciones específicas para la ruta /login -->
            <router-link
                v-if="showFaqLink"
                to="/faq"
                custom
                v-slot="{ navigate, href }"
            >
              <pv-button
                  class="p-button-text text-white header-link-home"
                  :href="href"
                  @click="navigate"
              >
                Faq
              </pv-button>
            </router-link>
            <router-link
                v-if="showPetProfileLink"
                to="/petprofile"
                custom
                v-slot="{ navigate, href }"
            >
              <pv-button
                  class="p-button-text text-white header-link-home"
                  :href="href"
                  @click="navigate"
              >
                Profile
              </pv-button>
            </router-link>
            <router-link
                v-if="showRecommendationsLink"
                to="/about"
                custom
                v-slot="{ navigate, href }"
            >
              <pv-button
                  class="p-button-text text-white header-link-home"
                  :href="href"
                  @click="navigate"
              >
                Recommendations
              </pv-button>
            </router-link>
            <router-link
                v-if="showUserProfileLink"
                to="/profile"
                custom
                v-slot="{ navigate, href }"
            >
              <pv-button
                  class="p-button-text text-white header-link-home"
                  :href="href"
                  @click="navigate"
              >
                Profile
              </pv-button>
            </router-link>


            <router-link
                v-if="showMapLink"
                to="/map"
                custom
                v-slot="{ navigate, href }"
            >
              <pv-button
                  class="p-button-text text-white header-link-home"
                  :href="href"
                  @click="navigate"
              >
                Map
              </pv-button>
            </router-link>
            <router-link
                v-if="showStoreLink"
                to="/store"
                custom
                v-slot="{ navigate, href }"
            >
              <pv-button
                  class="p-button-text text-white header-link-home"
                  :href="href"
                  @click="navigate"
              >Store</pv-button>
            </router-link>
            <router-link
                v-if="showAppointmentLink"
                to="/appointment"
                custom
                v-slot="{ navigate, href }"
            >
              <pv-button
                  class="p-button-text text-white header-link-home"
                  :href="href"
                  @click="navigate"
              >Appointment</pv-button>
            </router-link>

          </div>
        </template>
      </pv-toolbar>
    </header>
    <pv-sidebar v-model:visible="drawer"></pv-sidebar>
    <RouterView />
  </div>
</template>

<script>
export default {
  name: "app",
  data() {
    return {
      drawer: false,
      items: [
        { label: "Profile", to: "/petprofile" },
        { label: "Map", to: "/map" },
        { label: "Recommendations", to: "/about" },
        { label: "Appointments", to: "/appointment" },
        { label: "Store", to: "/store" },
        { label: "Faq", to: "/faq" },
        { label: "Register", to: "/register" },
        { label: "Login", to: "/login" },
        { label: "Profile", to: "/profile" },
      ],
    };
  },
  computed: {
    showHeader() {
      const allowedRoutes = ["/petprofile", "/map", "/home", "/about","/store","/faq","/profile", "/appointment"];
      return allowedRoutes.includes(this.$route.path);
    },
    showMapLink() {
      return this.$route.path === "/petprofile" || "/about" || "/store" || "/faq" || "/profile"|| "/appointment";
    },
    showStoreLink() {
      return this.$route.path === "/petprofile" || "/about" || "/map" || "/faq" || "/profile"|| "/appointment";
    },
    showFaqLink() {
      return this.$route.path === "/petprofile" || "/about" || "/map" || "/store" || "/profile"|| "/appointment";
    },
    showPetProfileLink() {
      return this.$route.path === "/faq" || "/about" || "/map" || "/store" || "/profile"|| "/appointment";
    },
    showRecommendationsLink() {
      return this.$route.path === "/faq" || "/petprofile" || "/map" || "/store" || "/profile"|| "/appointment";
    },
    showUserProfileLink() {
      return this.$route.path === "/faq" || "/petprofile" || "/map" || "/store" || "/about"|| "/appointment";
    },
    showAppointmentLink(){
      return this.$route.path ==="/faq" || "/petprofile" || "/map" || "/store" || "/about" || "/appointment";
    }
  },
};
</script>

<style scoped>
.bg-red {
  background-color: #31b4a7;
}

.header-link-home {
  margin-right: 30px;
}
</style>
