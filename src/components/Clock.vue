<script setup lang="ts">
  import { ref } from 'vue';

  const runningFlag = ref<boolean>(false);

  const time = ref<string>('40:00');
  let second = 59;
  let minute = 39;

  let timer: any = null;

  const startClock = () => {
    runningFlag.value = !runningFlag.value;
    if (runningFlag.value) {
      timer = setInterval(() => {
        time.value = `${minute}:${second}`;
        second--;
        if (minute === 0) {
          clearInterval(timer);
        }
        if (second === 0) {
          minute--;
          second = 59;
        }
      }, 1000);
    } else {
      clearInterval(timer);
    }
  };
  const resetClock = () => {
    clearInterval(timer);
    minute = 39;
    second = 59;
    time.value = '40:00';
    runningFlag.value = false;
  };
</script>

<template>
  <div class="clock-container">
    <img class="logo" src="../assets/tomato-icon.svg" alt="logo" />
    <h2 class="title">Vue Tomato Clock</h2>
    <div class="clock">{{ time }}</div>
    <div class="time"></div>
    <div class="btn">
      <button @click="startClock">{{ runningFlag ? 'Stop' : 'Start' }}</button>
    </div>
    <div class="btn">
      <button @click="resetClock">Reset</button>
    </div>
  </div>
</template>

<style scoped>
  .logo {
    width: 50px;
    height: 50px;
  }
  .clock {
    width: 200px;
    height: 200px;
    border: 10px solid #e4007e;
    border-radius: 50%;
    text-align: center;
    line-height: 200px;
    font-size: 50px;
    font-weight: bold;
  }
  .btn {
    margin-top: 20px;
  }
</style>
