<template>
  <span
    class="cursor-pointer flex rounded-full h-10 px-5 text-center line-clamp-2 flex-shrink-0 justify-center items-center font-bold uppercase text-xs"
    :class="active ? 'bg-white text-primary' : 'bg-white/40 text-white'"
  >
    {{ label }}
  </span>
</template>

<script>
export default {
  props: {
    label: String,
    active: Boolean,
  },
};
</script>

<style></style>
