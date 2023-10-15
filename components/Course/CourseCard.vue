<template>
  <button
    class="flex flex-col pb-2 w-[250px] h-max shadow-[0_0_10px_0_rgba(0,0,0,0.25)]"
  >
    <div class="relative">
      <nuxt-img class="w-full max-w-[250px]" src="/img/card-course.webp" />
      <div
        class="bg-gradient-to-b from-transparent via-transparent to-white absolute bottom-0 w-full h-8"
      ></div>
    </div>
    <h1 class="font-Anton mt-5 text-primary line-clamp-2 text-xl px-10">
      {{ title }}
    </h1>
    <span class="text-[10px] font-bold text-primary/50">{{
      teacher?.shortGraduation + ' ' + teacher?.name
    }}</span>

    <p class="my-4 text-primary text-xs text-justify line-clamp-3 px-5">
      {{ description }}
    </p>

    <span class="text-second text-2xl text-center font-Anton">COMEÇAR</span>
  </button>
</template>

<script>
export default {
  props: {
    title: String,
    description: String,
    teacher: {
      id: Number,
      name: String,
      graduation: String,
      shortGraduation: String,
    },
  },
};
</script>

<style></style>
