<template>
  <section>
    <Header />

    <div class="selectOption">
      <select v-model="category">
        <option disabled value="">Proszę wybrać jedno</option>
        <option value="Ground">Domki naziemne</option>
        <option value="Tree">Domki nadrzewne</option>
      </select>
      <button v-on:click="resetOptions">Wszystkie produkty</button>
    </div>

    <label for="vol">Cena (0-2000):</label>

    <input
      type="range"
      v-model="range"
      min="0"
      max="2000"
      step="10"
      class="slider"
    />
    <button v-on:click="sort">Cena ⬆</button>
    <button v-on:click="sortTwo">Cena ⬇</button>

    <div class="projectList">
      <new-house @add-home="addHome"></new-house>
      <input type="text" v-model="name" placeholder="Szukaj..." />

      <ul>
        <houses-list
          v-for="animal in filterAnimals"
          :key="animal.id"
          :id="animal.id"
          :name="animal.name"
          :euro="animal.euro"
          :price="animal.price"
          :category="animal.category"
        ></houses-list>
      </ul>
    </div>
  </section>
</template>

<script>
import Header from './components/Header.vue'

export default {
  components: {
    Header
  },
  data() {
    return {
      category: '',
      price: '',
      name: '',
      range: '5000',

      animals: [
        {
          id: 1,
          name: 'Jeż',
          price: 560,
          category: 'Ground',
          euro: 120,
        },
        {
          id: 2,
          name: 'Lis',
          price: 1500,
          category: 'Ground',
          euro: 315,
        },

        {
          id: 6,
          name: 'Szpak',
          price: 250,
          category: 'Tree',
          euro: 52,
        },
        {
          id: 9,
          name: 'Wiewiórka',
          price: 450,
          category: 'Tree',
          euro: 94,
        },
        {
          id: 11,
          name: 'Jeleń',
          price: 1950,
          category: 'Ground',
          euro: 410,
        },
        {
          id: 13,
          name: 'Jerzyk',
          price: 309,
          category: 'Tree',
          euro: 65,
        },
      ],
    };
  },
  computed: {
    filterAnimals() {
      return this.filterAnimalsByName(
        this.filterAnimalsByRange(this.filterAnimalsByCategory(this.animals))
      );
    },
  },

  methods: {
    addHome(name, price, category, euro) {
      const newAddHome = {
        id: new Date().toISOString(),
        name: name,
        price: price,
        category: category,
        euro: euro,
      };
      this.animals.push(newAddHome);
    },
    filterAnimalsByCategory(animals) {
      return this.category
        ? animals.filter((animal) => !animal.category.indexOf(this.category))
        : animals;
    },

    filterAnimalsByName(animals) {
      return this.name
        ? animals.filter(
            (animal) =>
              !animal.name.toLowerCase().indexOf(this.name.toLowerCase())
          )
        : animals;
    },

    filterAnimalsByRange(animals) {
      return this.range
        ? animals.filter((animal) =>
            animal.price >= 0 && animal.price <= this.range ? animal : ''
          )
        : animals;
    },
    sort() {
      this.animals.sort((a, b) => (a.price > b.price ? 1 : -1));
    },
    sortTwo() {
      this.animals.sort((a, b) => (a.price < b.price ? 1 : -1));
    },

    resetOptions() {
      this.category = '';
      this.name = '';
      this.range = '5000';
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
label {
  display: block;
  color: rgb(0, 0, 0);
  text-transform: uppercase;
  font-size: 14px;
  font-weight: bold;
  letter-spacing: 1px;
  margin: 20px 0 10px 0;
}
input {
  padding: 7px;
  background: #f0fffa;
  border: 0;
  border-bottom: 1px solid #ddd;
  width: 67%;
  box-sizing: border-box;
}

.selectOption {
  margin: 15px auto;
}

select {
  padding: 10px;
  background: #f0fffa;
  border-radius: 15px;
  border: 1px solid #00ce89;
  cursor: pointer;
}

button {
  display: flexbox;
  margin: 5px 2px;
  height: 30px;
  background: #0be099;
  color: white;
  border: 0;
  border-radius: 10px;
  font-size: 16px;
  cursor: pointer;
}

button:hover,
button:active {
  background-color: #0fc689;
  box-shadow: 0  0 2px #0be099;
}

ul {
  margin-top: 30px;
  padding: 20px 0;
}

li {
  text-align: center;
  margin: 10px;
  padding: 1px;
  border-radius: 5px;
  list-style: none;
  background-color: white;
}

input[type='range'] {
  -webkit-appearance: none;
  width: 50%;
  height: 3px;
  background: rgba(255, 255, 255, 0.6);
  border-radius: 20px;
  background-image: linear-gradient(#00ce89, #94f4d4);
  background-repeat: no-repeat;
}

input[type='range']::-webkit-slider-thumb {
  -webkit-appearance: none;
  height: 30px;
  width: 20px;
  border-radius: 50%;
  background: #00ce89;
  cursor: ew-resize;
  box-shadow: 0 0 2px 0 #555;
}
</style>
