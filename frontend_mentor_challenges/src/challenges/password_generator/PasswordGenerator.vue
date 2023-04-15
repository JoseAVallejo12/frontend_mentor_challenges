<template>
  <div class="container">
    <div class="card">
      <h2 class="card__title">Password Generator</h2>
      <input class="card__input" type="text" />
      <password-config />
    </div>
  </div>
</template>

<script lang="ts">
import PasswordConfig from "./PasswordConfig.vue";
export default {
  el: "password-generator",
  name: "PasswordGenerator",
  components: {
    PasswordConfig,
  },
};
</script>

<style scoped lang="scss">
$primary-color: #12121a;
$secondary-color: #24232b;
$third-color: #f6ce65;
$fifth-color: #24232b;
$primary-text-color: #e8e4eb;
$secondary-text-color: #e8e4eb;

.container {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  background-color: $primary-color;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  .card {
    width: 300px;
    height: 500px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    &__title {
      color: $primary-text-color;
      font-size: 1.5rem;
      font-weight: 700;
      margin-top: 0;
    }
    .password-generated {
      background-color: $secondary-color;
      height: 50px;
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .password-configs {
      background-color: $secondary-color;
      height: 360px;
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 20px;
      box-sizing: border-box;
    }
  }
}
</style>
