<template>
    <div id="vditor" />
    <button @click="OnButton">commit</button>
  </template>
  
  <script setup lang="ts">
  import { ref, onMounted } from 'vue';
  import Vditor from 'vditor';
  import 'vditor/dist/index.css';
  
  const vditor = ref<Vditor | null>(null);
  
  onMounted(() => {
    vditor.value = new Vditor('vditor', {
      after: () => {
        // vditor.value is a instance of Vditor now and thus can be safely used here
        vditor.value!.setValue('Vue Composition API + Vditor + TypeScript Minimal Example');
      },
    });
  }
  );

  const OnButton = ()=>{
    console.log(vditor.value!.getValue());
    console.log(vditor.value!.getHTML())
  }
  </script>
  
  <style></style>