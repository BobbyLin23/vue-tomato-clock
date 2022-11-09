<script setup lang="ts">
  import { useRouter } from 'vue-router';

  const router = useRouter();

  const goBack = () => {
    router.back();
  };
</script>

<template>
  <div class="setting">
    <div class="list">
      <div>Tomato Clock Time:</div>
      <div>Short Break Time:</div>
      <div>Long Break Time:</div>
      <div>Break Time:</div>
      <div>Today Clock Goals</div>
    </div>
    <button @click="goBack">Back</button>
  </div>
</template>

<style>
  .setting {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
</style>
