<script setup>
import Modal from "@/components/Modal.vue";
import { ref } from "vue";
const showModal = ref(false);

</script>
<template>
  <div class="modals">
    <h1>Modals</h1>
    <button @click="showModal = true">Show Modal</button>
    <Modal v-model="showModal" title="My Modal Title (via Prop)">
        <!-- Use named slot by calling a template tag with #nameOfSlot -->
        <!-- <template #title>My new title</template> -->
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
        error quis in, sed consectetur, harum fuga soluta unde officiis
        temporibus laudantium? Sapiente nesciunt ducimus dignissimos, explicabo
        nobis aliquam iusto quidem.
      </p>
    </Modal>
  </div>
</template>