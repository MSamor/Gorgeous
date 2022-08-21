<template>
  <Particles
    id="tsparticles"
    :particlesInit="particlesInit"
    :options="options"
  />
</template>

<script lang="ts">
import { reactive } from "@vue/reactivity";
import { Engine } from "tsparticles-engine";
import { loadFull } from "tsparticles";
import star from "../annimationJS/srar.js"
async function particlesInit(engine: Engine) {
  await loadFull(engine);
}

let options = reactive(star);

export default {
  setup() {
    return {
      options,
      particlesInit,
    };
  },
};
</script>
<style scoped>
</style>
