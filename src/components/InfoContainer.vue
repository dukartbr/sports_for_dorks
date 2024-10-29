<template>
  <div class="bg-primary infoContainer">
    <span class="title">{{ title }}</span>
    <div class="body">
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  props: ["title"],
};
</script>
