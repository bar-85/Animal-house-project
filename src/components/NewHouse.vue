<template>
  <li>
    <button @click="toggleHome">
      {{ detailsHome ? 'Ukryj formularz' : 'Dodaj nowe domki' }}
    </button>
  </li>

  <ul v-if="detailsHome">
    <form @submit.prevent="submitData">
      <div>
        <label>Nazwa</label>
        <input type="text" v-model="enteredName" required />
      </div>
      <div>
        <label>Cena PLN:</label>
        <input type="number" v-model="enteredPrice" required />
      </div>
      <div>
        <label>Cena EUR:</label>
        <input type="number" v-model="enteredEuro" required />
      </div>
      <div class="selectOption">
        <select v-model="enteredCategory" required>
          <option disabled value="">Proszę wybrać jedno</option>
          <option value="Ground">Domki naziemne</option>
          <option value="Tree">Domki nadrzewne</option>
        </select>
      </div>

      <div>
        <button>Dodaj domek</button>
      </div>
    </form>
  </ul>
</template>

<script>
export default {
  emits: ['add-home'],
  data() {
    return {
      enteredName: '',
      enteredPrice: '',
      enteredCategory: '',
      enteredEuro: '',
      detailsHome: false
    };
  },
  methods: {
    submitData() {
      this.$emit(
        'add-home',
        this.enteredName,
        this.enteredPrice,
        this.enteredCategory,
        this.enteredEuro
      );
    },
    toggleHome() {
      this.detailsHome = !this.detailsHome
    }
  },
};
</script>

<style scoped>
form {
  border-radius: 20px;
  margin: 0px auto;
  background: white;
  padding: 10px 10px;
  width: 70%;
  box-shadow: 1px 0px 5px rgba(0, 0, 0, 0.253);
  border-left: 15px solid #e4fcf4;
  border-right: 15px solid #e4fcf4;
}
</style>
