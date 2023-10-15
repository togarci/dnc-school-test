<template>
  <div
    class="bg-white flex justify-between items-center px-8 rounded-full w-full h-14"
  >
    <input
      class="text-primary/50 text-sm h-3/4 w-full outline-none font-bold"
      type="text"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
      placeholder="PESQUISE AQUI O QUE VOCÊ PROCURA..."
    />
    <i class="lni text-2xl lni-search-alt"></i>
  </div>
</template>

<script>
export default {
  props: {
    modelValue: {
      type: String,
      default: '',
      required: true,
    },
  },
};
</script>
