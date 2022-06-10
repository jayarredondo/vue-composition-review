<!--
OPTIONS API SYNTAX
<script>
export default {
  data() {
    return {
      counter: 0,
    };
  },
  methods: {
    increaseCounter() {
      this.counter++
    },
    decreaseCounter() {
      this.counter--
    }
  }
};
</script>
-->
<!--
COMPOSITION API SYNTAX

<script>
import { ref } from "vue";

export default {
  // old setup way
  setup() {
    const counter = ref(0);
    // When using ref() must access value using value prop.
    const increaseCounter = () => counter.value++;
    const decreaseCounter = () => counter.value--;

    return { counter, increaseCounter, decreaseCounter };
  },
};
</script>
-->

// all this code is ran before the component is created.
<script setup>
import { reactive, computed, watch, onMounted } from "vue";
import { vAutofocus } from '@/directives/vAutoFocus';

// Non-Reactive data can be stored in a const as well.

const appTitle = "My Amazing Counter App";

onMounted(() => {
  console.log("Do stuff related to title.")
})
// const counter = ref(0);
// const counterTitle = ref("My Counter");

// Using reactive objects: using the reactive() method, you can pass an object with properties that can be manipulated and updated. 2 way binding.
const counterData = reactive({
  count: 0,
  title: "My Counter",
});

// watch properties allow us  to listen to whenever a reactive object changes, and then perform a task when the event occurs.
watch(
  () => counterData.count,
  (newCount, oldCount) => {
    console.log("newCount", newCount);
    if (newCount === 20) {
      alert("Way to go! You made it to 20!");
    }
  }
);

// computed properties are generated based on reactive data, which are cached, and only update when their dependencies change.
// to create computed property
const oddOrEven = computed(() => {
  return counterData.count % 2 === 0 ? "even" : "odd";
});

const increaseCounter = (amount, e) => {
  // console.log(e)
  counterData.count += amount;
};
const decreaseCounter = (amount) => (counterData.count -= amount);

onMounted(() => {
  console.log("Do stuff related to counter")
})


// LIFECYCLE HOOKS
// onMounted(() => {
//   console.log("onMounted")
// })

// onUnmounted(() => {
//   console.log("onUnmounted")
// })

// onBeforeMount(() => {
//   console.log("onBeforeMount");
// });

// onBeforeUnmount(() => {
//   console.log("onBeforeUnmounted");
// });

// onActivated(() => {
//   console.log("onActivated");
// })

// onDeactivated(() => {
//   console.log('onDeactivated');
// })

// Used for when the template changes (reactive data properties re-render)
// onBeforeUpdate(() => {
//   console.log("onBeforeUpdate")
// })

// onUpdated(() => {
//   console.log("onUpdated");
// })

</script>
<!-- OPTIONS API computed property 

<script>
export default {
  data() {
    return {
      count: 0
    }
  },
  computed: {
    myComputedProperty () {
      // perform logic based on a data property
      return 'my result'
    }
  },
  watch: {
      count(newCount, oldCount) {
        if (newCount === 20) {
          alert("It's 20!")
        }
      }
  },
  mounted() {
    // do stuff when component is loaded to browser.
  },
  unmounted() {
    // do stuff when component is unloaded from browser.
  },
  directives: {
    autofocus: {
      mounted(el) {
        el.focus();
      }
    }
  }
}
</script>
-->
<template>
  <main>
    <div class="home">
      <h2>{{ appTitle }}</h2>
      <h3>{{ counterData.title }}</h3>
      <div>
        <button @click="decreaseCounter(2)" class="btn">--</button>
        <button @click="decreaseCounter(1)" class="btn">-</button>
        <span class="counter">{{ counterData.count }}</span>
        <button @click="increaseCounter(1, $event)" class="btn">+</button>
        <button @click="increaseCounter(2)" class="btn">++</button>
      </div>
      <p>This counter is {{ oddOrEven }}</p>
      <div class="edit">
        <h4>Edit Counter Title:</h4>
        <input v-model="counterData.title" type="text" v-autofocus />
      </div>
    </div>
  </main>
</template>
<style>
.home {
  text-align: center;
  padding: 20px;
}

.btn,
.counter {
  font-size: 40px;
  margin: 10px;
}
.edit {
  margin-top: 60px;
}
</style>