import { reactive, computed, watch, nextTick } from "vue";

// COMPOSABLE
// Move reactive object outside of composable to assert a global reactive object.
const counterData = reactive({
  count: 0,
  title: "My Counter",
});

export function useCounter() {
  // Using reactive objects: using the reactive() method, you can pass an object with properties that can be manipulated and updated. 2 way binding.


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

  const increaseCounter = async (amount, e) => {
    // console.log(e)
    counterData.count += amount;

    // nextTick() waits until the DOM updates before doing something else. It is an async function!
    await nextTick(
      console.log("Do something when counter has updated in the DOM.")
    );
  };
  const decreaseCounter = (amount) => (counterData.count -= amount);

  return {counterData, oddOrEven, increaseCounter, decreaseCounter}
}
