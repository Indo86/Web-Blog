<script setup>
import Navbar from '@/components/Navbar.vue';
import Footer from '@/components/Footer.vue';
import PostList from '@/components/Posts/PostList.vue';
import WidgetSearch from '@/components/widgets/WidgetSearch.vue';
import WidgetSocialMedia from '@/components/widgets/WIdgetSocialMedia.vue';
import WidgetTags from '@/components/widgets/WidgetTags.vue';
import { getPosts } from '@/services/api';
import { ref, computed, onMounted } from 'vue';

const posts = ref([]);
const searchQuery = ref('');

onMounted(async () => {
  posts.value = await getPosts();
});

// Filtered posts berdasarkan searchQuery
const filteredPosts = computed(() => {
  if (!searchQuery.value) return posts.value;
  return posts.value.filter(post =>
    post.title.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
    post.content.toLowerCase().includes(searchQuery.value.toLowerCase())
  );
});

// Fungsi menangani pencarian dari WidgetSearch
const handleSearch = (query) => {
  searchQuery.value = query;
};
</script>

<template>
  <Navbar />
  <!-- Page content-->
  <div class="container content-blog">
    <div class="row">
      <!-- Blog entries-->
      <PostList :posts="filteredPosts" />

      <!-- Side widgets-->
      <div class="col-lg-4">
        <WidgetSearch @search="handleSearch" />
        <WidgetSocialMedia />
        <WidgetTags :posts="posts" />
      </div>
    </div>
  </div>
  <Footer />
</template>

<style scoped>
.content-blog {
  margin-top: 100px;
}
</style>
