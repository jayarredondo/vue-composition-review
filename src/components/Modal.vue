<script setup >
import { useSlots, inject } from 'vue';

// const slots = useSlots();
// Gives us access to the slot object
// console.log(slots.title)

const props = defineProps({
    title: {
        type: String,
        default: 'No title specified'
    },
    // can access the model value to pass reactive data.
    modelValue: {
        type: Boolean,
        default: false
    }
    })

const emits = defineEmits(['update:modelValue'])

// const handleButtonClick = () => {
//     emits('update:modelValue', false);
// }

// grabs value from App.vue.
 const userData = inject('userData');

</script>

<template>
  <!-- Teleport is used to transfer HTML out of the app. 
    Mainly used for modals due to positioning of ancestors -->
  <teleport to=".modals-container">
    <div v-if="modelValue" class="modal">
      <!-- Named slot to be filled in parent component. -->
      <!-- <h1><slot name="title" /></h1> -->
      <!-- Slot to be filled in parent component. -->
      <h1>{{ title }}</h1>
      <slot />
      <button @click="$emit('update:modelValue', false)">Hide Modal</button>
      <div>
        Username is: {{ userData.username }}
      </div>
    </div>
  </teleport>
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