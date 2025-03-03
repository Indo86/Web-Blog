<script setup>
import { computed } from 'vue';

const props = defineProps({
  post: {
    type: Object,
    required: true
  },
  isFeatured: Boolean
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
      <img class="card-img-top" 
           :src="post.imageUrl" 
           :alt="`Image for ${post.title}`" 
           style="height: 200px; object-fit: cover; width: 100%;" />
    </router-link>
    <div class="card-body">
      <div class="small text-muted">{{ post.date || 'Unknown Date' }}</div>
      <h2 class="card-title" :class="{ 'h4': !isFeatured }">{{ post.title }}</h2>
      <div v-if="post.tags?.length" class="mb-3">
        <span v-for="(tag, index) in post.tags" 
              :key="index" 
              :class="`badge bg-${getRandomColor()} me-1`">
          {{ tag   }}
        </span>
      </div>

      <p class="card-text">{{ truncatedContent }}</p>
      <!-- Tags -->
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
