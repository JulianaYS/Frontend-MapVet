<template>
  <router-link to="/create-appointment">
  <pv-button label="Create Appointment"  class="create-btn" >
  </pv-button>
  </router-link>
  <div class="appointment-list">

    <div v-for="appointment in appointments" :key="appointment.id" class="card">
      <div class="content">

        <div class="data">
          <div class="icon"><i class="pi pi-calendar"></i></div>
          <div class="label">Veterinary:</div>
          <div class="value">{{ appointment.veterinaryName }}</div>
        </div>
        <div class="data">
          <div class="icon"><i>🐾</i></div>
          <div class="label">Pet Name:</div>
          <div class="value">{{ appointment.petName }}</div>
        </div>
        <div class="data">
          <div class="icon"><i class="pi pi-bars"></i></div>
          <div class="label">Description:</div>
          <div class="value">{{ appointment.description }}</div>
        </div>
        <div class="data">
          <div class="icon"><i class="pi pi-check-circle"></i></div>
          <div class="label">Status:</div>
          <div class="value">{{ appointment.status }}</div>
        </div>
        <div class="actions">

          <pv-button label="Complete" @click="completeAppointment(appointment.id)"
                     class="action-btn" style="background-color: #007BFF" icon="pi pi-check">
          </pv-button>
          <pv-button label="Cancel" @click="cancelAppointment(appointment.id)"
                     class="action-btn" style="background-color: #B31312" icon="pi pi-times" >
          </pv-button>
          <pv-button label="Configure" @click="configureAppointment(appointment.id)"
                     class="action-btn" style="background-color: #A9A9A9" icon="pi pi-cog">
          </pv-button>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      appointments: [
        {
          id: 1,
          veterinaryName: 'Veterinary 1',
          petName: 'Pet 1',
          description: 'Description 1',
          status: 'Scheduled'
        },
        {
          id: 1,
          veterinaryName: 'Veterinary 1',
          petName: 'Pet 1',
          description: 'Description 1',
          status: 'Scheduled'
        },
        {
          id: 1,
          veterinaryName: 'Veterinary 1',
          petName: 'Pet 1',
          description: 'Description 1',
          status: 'Scheduled'
        },
        {
          id: 1,
          veterinaryName: 'Veterinary 1',
          petName: 'Pet 1',
          description: 'Description 1',
          status: 'Scheduled'
        },

      ]
    };
  },
  methods: {
    cancelAppointment(appointmentId) {
      // Lógica para cancelar la cita
      console.log(`Appointment ${appointmentId} canceled`);
    },
    completeAppointment(appointmentId) {
      // Lógica para completar la cita
      console.log(`Appointment ${appointmentId} completed`);
    },
    configureAppointment(appointmentId) {
      // Lógica para configurar la cita
      console.log(`Configuring appointment ${appointmentId}`);
    }
  }
};
</script>

<style scoped>

.appointment-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 30px;
  text-align: center;
}

.card {

  background-color: rgba(255, 240, 203, 1);
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
  margin-left: 30px;
  width: calc(50% - 100px);
}

.content {
  padding: 20px;
}

.data {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
}

.icon {
  margin-right: 10px;
}

.label {
  font-family: 'Inria Sans', sans-serif;
  font-weight: bold;
  margin-right: 5px;
}

.actions {
  margin-top: 20px;
}

.action-btn {
  font-family: 'Inria Sans', sans-serif;
  font-weight: bold;
  margin-right: 10px;
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  color: #fff;

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


.value{
  padding: 10px;
  font-family: 'Inria Sans', sans-serif;
}

</style>
