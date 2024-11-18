<template>
  <q-card class="bg-primary infoContainer">
    <div class="row" style="justify-content: space-between">
      <span class="title">{{ title }}</span>
      <slot name="action" />
    </div>
    <div class="body">
      <slot />
    </div>
  </q-card>
</template>

<script>
export default {
  props: ["title"],
};
</script>
