<script setup>
import { computed } from 'vue';

const props = defineProps({
  post: {
    type: Object,
    required: true,
  }
});

const truncatedContent = computed(() => {
  if (!props.post.content) return ''; 
  const cleanedContent = props.post.content.replace(/\n/g, ' '); 
  const words = cleanedContent.trim().split(/\s+/); 
  return words.length > 20 ? words.slice(0, 20).join(' ') + '...' : cleanedContent;
});

const getRandomColor = () => {
  const colors = ["primary", "success", "danger", "warning", "info", "dark"];
  return colors[Math.floor(Math.random() * colors.length)];
};

</script>

<template>
  <div class="card mb-4 shadow-sm">
    <router-link :to="{ name: 'ShowBlog', params: { id: post.id } }">
      <img class="card-img-top" :src="post.imageUrl" :alt="`Image for ${post.title}`" />
    </router-link>
    <div class="card-body">
      <h2 class="card-title">{{ post.title }}</h2>
      <div v-if="post.tags?.length" class="mb-3">
        <span v-for="(tag, index) in post.tags" 
              :key="index" 
              :class="`badge bg-${getRandomColor()} me-1`">
          {{ tag }}
        </span>
      </div>
      <p class="card-text">{{ truncatedContent }}</p>
      <router-link :to="{ name: 'ShowBlog', params: { id: post.id } }">
        <button class="btn btn-primary text-white"> 
          Read more →
        </button>
      </router-link>
    </div>
  </div>
</template>

<style scoped>
.shadow-sm {
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
}
</style>
