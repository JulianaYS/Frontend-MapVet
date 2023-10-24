<template>
  <div class="container">
    <div class="card">
      <pv-card>
        <template #title ><h2 class="title" style="margin-top: 0.8cm;">Register</h2></template>
        <template #content>
          <form class="form" style="margin-top: 1cm;">

            <div class="form grid with-margin">
              <div class="field col">
                <div class="form-group-inline">
                  <div class="form-group">
                    <input type="text" class="border border-transparent rounded p-3  w-full text-lg text-decoration underline"
                           id="firstName" placeholder="First Name" v-model="firstName" required/>
                  </div>
                </div>
              </div>

              <div class="field col">
                <div class="form-group-inline">
                  <div class="form-group">
                    <input type="text" class="border border-transparent rounded p-3  w-full text-lg text-decoration underline"
                           id="lastName" placeholder="Last Name" v-model="lastName" required/>
                  </div>
                </div>
              </div>
            </div>


            <div class="form grid with-margin">
              <div class="field col">
                <div class="form-group-inline">
                  <div class="form-group">
                    <input type="text" class="border border-transparent rounded p-3  w-full text-lg text-decoration underline"
                           id="email" placeholder="Email" v-model="email" required/>
                  </div>
                </div>
              </div>
            </div>

            <div class="form grid with-margin">
              <div class="field col">
                <div class="form-group-inline">
                  <div class="form-group">
                    <input type="password" class="border border-transparent rounded p-3  w-full text-lg text-decoration underline"
                           id="password" placeholder="Password" v-model="password" required/>
                  </div>
                </div>
              </div>

              <div class="field col">
                <div class="form-group-inline">
                  <div class="form-group">
                    <input type="password" class="border border-transparent rounded p-3  w-full text-lg text-decoration underline"
                           id="repeatPassword" placeholder="Repeat Password" v-model="repeatPassword" required/>
                           <!--<p v-if="incorrectPassword" class="error-message text-lg"  style="margin-left: 0.4cm; color: dimgray;">Passwords do not match.</p> -->
                  </div>
                </div>
              </div>
            </div>

            <div class="form grid with-margin">
              <div class="field col">
                <div class="form-group-inline">
                  <div class="form-group">
                    <input type="text" class="border border-transparent rounded p-3  w-full text-lg text-decoration underline"
                           id="birthdate" placeholder="Birthdate" v-model="birthdate" required/>
                    <label for="birthdate" class="font-light " style="margin-left: 0.4cm; color: dimgray; ">Format: (DD/MM/AAAA)</label>
                  </div>
                </div>
              </div>
            </div>

            <div class="form grid with-margin">
              <div class="field col">
                <div class="form-group-inline">
                  <div class="form-group-checkbox">
                    <input
                        type="checkbox" id="male" value="male" v-model="genderFemale"
                        style="width: 1.5rem; height: 1.5rem; border-radius: 80%; margin-right: 0.5cm;"
                    />
                    <label for="male" class="custom-label" style="margin-right: 2cm;">Male</label>

                    <input
                        type="checkbox" id="female" value="female" v-model="genderMale"
                        style="width: 1.5rem; height: 1.5rem; border-radius: 80%; margin-right: 0.5cm;"
                    />
                    <label for="female" class="custom-label" style="margin-right: 2cm;">Female</label>
                  </div>
                </div>
              </div>
            </div>

            <div class="form grid with-margin">
              <div class="field col">
                <div class="form-group-button" >
                  <router-link to="/about">
                    <pv-button type="button" class="text-white text-base border-1 border-solid border-round cursor-pointer transition-all transition-duration-200 hover:bg-600 hover:border-600 active:bg-700 active:border-700"
                               @click="submit" ::disabled="isEmpty || incorrectPassword"
                               style="font-size: 1.5rem; padding: 15px 30px; border-radius: 15px; background: #31b4a7;" >Register</pv-button>
                  </router-link>
                </div>
              </div>
            </div>

          </form>
        </template>
      </pv-card>
    </div>
  </div>


</template>

<script >

import{UserService} from "@/identification/services/user.service";

export default {

  data(){
    return{
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      repeatPassword: '',
      birthdate:'',
      genderFemale: false,
      genderMale: false,
      userService:new UserService(),
    };
  },

  computed:{
    isEmpty(){
      return(
          this.firstName ===''||
          this.lastName ===''||
          this.email ===''||
          this.password ===''||
          this.repeatPassword ===''||
          this.birthdate ===''||
          this.genderFemale===false||
          this.genderMale===false
      );
    },
    incorrectPassword() {
      return this.password !== this.repeat;
    },
  },

  methods: {
    submit() {
      if (!this.isEmpty && !this.incorrectPassword) {
        this.register();
      }
    },
    async register() {
      const userdata = {
        firstName: this.firstName,
        lastName: this.lastName,
        email: this.email,
        password: this.password,
        birthdate: this.birthdate,
        genderFemale: this.genderFemale,
        genderMale: this.genderMale
      };
      try {
        await this.userService.registerUser(userdata);
      } catch (error) {
        console.error('Error registering beginner:', error);
      }
    },
  }
}

</script>


<style scoped>

.container {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
}
.form-group-checkbox{
  display: flex;
  justify-content: center;
  align-items: center;
}
.title {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
}
.with-margin {
  margin-bottom: 0.5cm;
}

.form-group-button{
  display: flex;
  justify-content: center;
  align-items: center;
}

.field.col{
  margin-right: 1.3cm;
}

@media (max-width: 700px) {
  .container {
    flex-direction: column;
  }
  .form-group-button{
    flex-direction: column;
  }
}

</style>