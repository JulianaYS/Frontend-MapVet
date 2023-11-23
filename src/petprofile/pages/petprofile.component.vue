<template>
  <div style="display: flex; justify-content: center; align-items: center; ">
    <h1>Pet Profile</h1>
  </div>

  <div class="card-container">
    <div v-for="pet in pets" :key="pet.id" class="card">
      <pv-card style="width: 25em; background:transparent; border-radius:20px; border: 0.5px solid black; color:black;">
        <template #header>
          <div class="frame-container">
            <img :src="pet.photoUrl" alt="Image">
          </div>
        </template>
        <template #title>{{ pet.name }} </template>
        <template #subtitle> Animal: {{pet.type}} </template>
        <template #content>
          Breed: {{pet.breed}} <br>
          Weight:  {{pet.weight}} KG <br>
          Color: {{pet.color}} <br>
          Next Date: {{pet.date}}
        </template>
        <template #footer>
          <pv-button icon="pi pi-pencil" label="Edit" style="background-color:#3a6cc5" @click="editPet(pet)"/>
          <pv-button icon="pi pi-trash" label="Delete" style="margin-left: 0.5em; background-color: #ef4747; color:#ffffff !important;" @click="confirmDeletePet(pet)" />
        </template>
      </pv-card>
    </div>
  </div>

  <pv-button label="Added Pet" class="create-btn" @click="openNew"></pv-button>

  <pv-dialog
      v-model:visible="petDialog"
      :style="{width:'450px'}"
      header="Pet Information"
      :modal="true"
      class="p-fluid"
  >
    <div class="filed mt-3">
      <span class="p-float-label">
        <pv-input-text
            type="text"
            id="name"
            v-model.trim="pet.name"
            required="true"
            autofocus
            :class="{'p-invalid': submitted && !pet.name}"
        />
        <label for="name">Name</label>
        <small class="p-error" v-if="submitted && !pet.name" >
          Name is required.
        </small>
      </span>
    </div>
    <div class="field">
      <span class="p-float-label">
        <pv-input-text
            type="text"
            id="breed"
            v-model="pet.breed"
            required="false"
        />
        <label for="breed">Breed</label>
      </span>
    </div>
    <div class="field">
        <span class="p-float-label">
          <pv-input-number
              type="text"
              id="weight"
              v-model="pet.weight"
              required="false"
          />
          <label for="content">Weight</label>
        </span>
    </div>
    <div class="field">
      <span class="p-float-label">
        <pv-input-text
            type="text"
            id="type"
            v-model="pet.type"
            required="false"
        />
        <label for="type">Type</label>
      </span>
    </div>
    <div class="field">
      <span class="p-float-label">
        <pv-input-text
            type="text"
            id="photoUrl"
            v-model="pet.photoUrl"
            required="false"
        />
        <label for="photoUrl">URL Photo</label>
      </span>
    </div>
    <div class="field">
      <span class="p-float-label">
        <pv-input-text
            type="text"
            id="color"
            v-model="pet.color"
            required="false"
        />
        <label for="color">Color</label>
      </span>
    </div>
    <div class="field">
      <span class="p-float-label">
        <pv-calendar
            id="calendar-24h"
            v-model="pet.date"
            showTime hour-format="24"
            required="false"
        />
        <label for="date">Date</label>
      </span>
    </div>
    <template #footer>
      <pv-button
          :label="'Cancel'.toUpperCase()"
          icon="pi pi-times"
          class="p-button-text"
          @click="hideDialog"
      />
      <pv-button
          :label="'Save'.toUpperCase()"
          icon="pi pi-check"
          class="p-button-text"
          @click="savePet"
      />
    </template>
  </pv-dialog>
  <pv-dialog
      v-model:visible="deletePetDialog"
      :style="{ width: '450px' }"
      header="Confirm"
      :modal="true"
  >
    <div class="confirmation-content">
      <i class="pi pi-exclamation-triangle mr-3" style="font-size: 2rem" />
      <span v-if="pet">
            Are you sure you want to delete <b>{{ pet.name }}</b>?
        </span>
    </div>
    <template #footer>
      <pv-button
          :label="'No'.toUpperCase()"
          icon="pi pi-times"
          class="p-button-text"
          @click="deletePetDialog = false"
      />
      <pv-button
          :label="'Yes'.toUpperCase()"
          icon="pi pi-check"
          class="p-button-text"
          @click="deletePet"
      />
    </template>
  </pv-dialog>
</template>

<script>

import {PetprofileService} from "@/petprofile/services/petprofile.service";

export default {

  data(){
    return {
      pets:[],
      petDialog:false,
      deletePetDialog:false,
      pet:{},
      petsService:null,
      filters:{},
      submitted:false,
    };
  },
  created(){
    this.petsService = new PetprofileService();
    this.petsService.getAll()
        .then(response => {
          this.pets = response.data;
          console.log(this.pets);
        })
        .catch(error => {
          console.error('Error:', error);
        });
  },
  methods:{
    openNew(){
      this.pet = {};
      this.submitted = false;
      this.petDialog = true;
    },
    hideDialog(){
      this.petDialog = false;
      this.submitted = false;
    },
    savePet(){
      this.submitted = true;
      if (this.pet.name.trim()){
        if (this.pet.id){
          this.petsService
              .update(this.pet.id, this.pet)
              .then((response)=> {
                this.$toast.add({
                  severity: "success",
                  summary: "Successful",
                  detail: "Tutorial Updated",
                  life: 3000,
                });
                console.log(response);
              });
          } else{
          this.pet.id=0;
          console.log(this.pet);
          this.petsService.create(this.pet)
              .then((response)=>{
                this.pets.push(this.pet);
                this.$toast.add({
                  severity: "success",
                  summary: "Successful",
                  detail: "Tutorial Created",
                  life: 3000,
                });
                console.log(response);
              });
        }
        this.petDialog = false;
        this.pet = {};
      }
    },
    editPet(pet){
      this.pet = {...pet};
      this.petDialog = true;
    },
    confirmDeletePet(pet){
      this.pet=pet;
      this.deletePetDialog = true;
    },
    deletePet(){
      this.petsService.delete(this.pet.id).then((response) => {
        this.pets = this.pets.filter(
            (t) => t.id !== this.pet.id
        );
        this.deletePetDialog = false;
        this.pet = {};
        this.$toast.add({
          severity: "success",
          summary: "Successful",
          detail: "Comment Deleted",
          life: 3000,
        });
        console.log(response);
      });
    }
  }
}

</script>

<style scoped>


.card-container {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
  padding: 10px;
}

.card {
  width: 25em;
  margin-bottom: 20px;
}
img{
  border-radius:20px 20px 0 0;
  width: 300px;
}

@media screen and (max-width: 768px) {
  .card {
    width: calc(100% - 40px);
  }
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