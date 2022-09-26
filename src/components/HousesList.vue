<template>
  <div class="projectList">
    <li>
      <h2>{{ name }}</h2>
      <p><strong>Cena: </strong>{{ price }} zł</p>
      <button @click="toggleEuro">
        {{ detailsEuro ? 'Ukryj cenę EUR' : 'Pokaż cenę EUR' }}
      </button>
      <p v-if="detailsEuro"><strong>Cena: </strong>{{ euro }} €</p>
    </li>
  </div>
</template>

<script>
export default {
  props: ['name', 'price', 'category', 'euro'],
  data() {
    return {
      detailsEuro: false,
    };
  },
  methods: {
    toggleEuro() {
      this.detailsEuro = !this.detailsEuro;
    },
  },
};
</script>

<style scoped>
.projectList {
  margin: 20px auto;
  background: white;
  padding: 0px 10px;
  border-radius: 4px;
  width: 65%;
  box-shadow: 1px 0px 5px rgba(0, 0, 0, 0.253);
  border-left: 15px solid #e4fcf4;
  border-right: 15px solid #e4fcf4;
}
button {
  background: #cdffef;
  color: black;
}
</style>
