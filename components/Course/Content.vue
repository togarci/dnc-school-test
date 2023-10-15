<template>
  <div class="flex gap-24 flex-col">
    <div class="grid grid-cols-4 gap-y-10 mt-24">
      <CourseCard
        v-for="course in coursesList"
        :key="`card-couser-${course.id}`"
        :title="course?.course"
        :description="course?.description"
        :teacher="course?.teacher"
      />
    </div>
    <button
      @click="clickAction"
      v-if="hasPagination"
      class="flex w-fit items-center self-center gap-1 border-b-2 border-primary pb-1 text-xl"
    >
      <span class="font-Anton text-primary">MAIS</span>
      <div class="h-5 w-5 bg-[#d9d9d9] rounded-full"></div>
      <div class="h-4 w-4 bg-[#d9d9d9] rounded-full"></div>
      <div class="h-3 w-3 bg-[#d9d9d9] rounded-full"></div>
    </button>
  </div>
</template>

<script>
export default {
  props: {
    coursesList: {
      default: [],
    },
    hasPagination: Boolean,
  },
  methods: {
    clickAction() {
      this.$emit('clickPagination');
    },
  },
};
</script>

<style></style>
