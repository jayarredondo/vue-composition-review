<script setup>
import { ref } from "vue";
const showModal = ref(false);
</script>
<template>
  <div class="modals">
    <h1>Modals</h1>
    <button @click="showModal = true">Show Modal</button>
    <!-- Teleport is used to transfer HTML out of the app. 
    Mainly used for modals due to positioning of ancestors -->
    <teleport to=".modals-container">
      <div class="modal" v-if="showModal">
        <h1>This is our modal</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga atque
          consequatur, nostrum ipsa fugiat quia magnam rem laudantium ea labore?
        </p>
        <button @click="showModal = false">Hide Modal</button>
      </div>
    </teleport>
  </div>
</template>
<style>
.modal {
  background: beige;
  padding: 10px;
  color: black;
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
}
</style>