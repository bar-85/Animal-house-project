<template>
  <div class="projectList">
    <li>
      <h2>{{ name }}</h2>
      <p><strong>Cena: </strong>{{ price }} zł</p>
    </li>
  </div>
</template>

<script>
export default {
  props: ['name', 'price', 'category'],
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
</style>
