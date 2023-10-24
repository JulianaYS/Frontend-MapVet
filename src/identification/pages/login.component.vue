<script setup>

</script>

<template>
  <img src="public/identification/animals2.jpg" class="p-6" style="width: 60%;height: 80vh; ">


  <div class="container">
    <div class="card" >

      <pv-card class=" border-transparent ">

        <join />
        <template #title><h2 class="title with-margin" style="margin-top: 2cm;">Log in</h2></template>
        <template #content>

          <div class="form grid with-margin">
            <div class="field col">
              <input id="Email" type="text" v-model="email" required class=" border border-transparent rounded p-3  w-full text-lg text-decoration underline"  placeholder="Email">
            </div>
          </div>
          <div class="form grid with-margin">
            <div class="field col">

              <input id="Password" type="text" v-model="password" required class="border border-transparent rounded p-3  w-full text-lg text-decoration underline" placeholder="Password">
              <label for="Password" style="margin-left: 0.5cm; color: dimgray;" > Forgot your password?</label>
            </div>
          </div>31115




          <div class="form grid with-margin">
            <div class="field col flex justify-content-center">
              <pv-button @click.prevent="submitForm()" type="button"
                         class=" btn-google text-black text-base border-1 border-solid  border-round cursor-pointer transition-all transition-duration-200 hover:bg-primary-600 hover:border-primary-600 active:bg-primary-700 active:border-primary-700"
                         style="font-size: 1rem; padding: 10px 30px; border-radius: 15px; background: #ffffff; color: black;"> <i class="fab fa-google" style="margin-right: 10px;"></i> Continue with Google</pv-button>
            </div>
          </div>

          <div class="form grid with-margin">
            <div class="field col flex justify-content-center">
              <pv-button @click.prevent="submitForm()" type="button"
                         class=" btn-facebook text-white text-base border-1 border-solid  border-round cursor-pointer transition-all transition-duration-200 hover:bg-primary-600 hover:border-primary-600 active:bg-primary-700 active:border-primary-700"
                         style="  font-size: 1rem; padding: 10px 20px; border-radius: 15px; background: #2196F3; "> <i class="fab fa-facebook" style="margin-right: 10px;"></i> Continue with Facebook</pv-button>
            </div>
          </div>

          <div class="form grid with-margin">
            <div class="field col flex justify-content-center">
              <pv-button @click.prevent="submitForm()" type="button"
                         class=" btn-login text-white text-base border-1 border-solid  border-round cursor-pointer transition-all transition-duration-200 hover:bg-primary-600 hover:border-primary-600 active:bg-primary-700 active:border-primary-700"
                         style="font-size: 1.5rem; padding: 15px 30px; border-radius: 15px;">Login</pv-button>
            </div>
          </div>


        </template>
      </pv-card>
    </div>
  </div>

</template>

<style scoped>

</style>