<template>
  <div class="pb-10">
    <Header></Header>
    <main class="max-w-7xl w-3/4 mx-auto mt-20">
      <SearchInput v-model="query" />

      <div class="relative">
        <Swiper :spaceBetween="30" :slidesPerView="5.9" class="mt-7">
          <SwiperSlide v-for="category in categoryList" :key="category.id">
            <SelectCategory
              @click="selectCategory(category.id)"
              :label="category.label"
              :active="activeCategory.includes(category.id)"
            />
          </SwiperSlide>
        </Swiper>
        <div
          class="absolute top-0 right-0 h-full w-16 bg-gradient-to-l from-second via-transparent to-transparent z-20"
        ></div>
      </div>

      <Content
        @clickPagination="
          () => {
            pagination += 1;
            getCourses();
          }
        "
        :hasPagination="hasPagination"
        :coursesList="coursesList"
      />
    </main>
  </div>
</template>

<script>
import axios from 'axios';
import SelectCategory from '~/components/Search/SelectCategory.vue';
import CourseCard from '~/components/Course/CourseCard.vue';
import Content from '~/components/Course/Content.vue';

export default {
  data() {
    return {
      categoryList: [],
      activeCategory: [],
      coursesList: [],
      pagination: 1,
      hasPagination: false,
      query: '',
    };
  },
  methods: {
    getCategorys() {
      axios.get('/api/categorys').then(({ data }) => {
        this.categoryList = data;
        this.activeCategory = [data[0]?.id];
      });
    },
    selectCategory(idCategory) {
      this.activeCategory.includes(idCategory)
        ? this.activeCategory.splice(this.activeCategory.indexOf(idCategory), 1)
        : this.activeCategory.push(idCategory);
    },
    getCourses() {
      axios
        .get('/api/courses', {
          params: { page: this.pagination, query: this.query },
        })
        .then(({ data }) => {
          this.coursesList = data.data;
          this.hasPagination = data.hasPagination;
        });
    },
  },
  mounted() {
    this.getCategorys();
    this.getCourses();
  },
  watch: {
    query(newValue) {
      this.pagination = 1;
      this.getCourses();
    },
  },
  components: { SelectCategory, CourseCard, Content },
};
</script>

<style></style>
