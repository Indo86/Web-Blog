<script setup>
import { computed } from 'vue';

const props = defineProps({
  post: Object,
  isFeatured: Boolean
});


// Fungsi untuk membatasi jumlah kata menjadi maksimal 20
const truncatedContent = computed(() => {
  if (!props.post?.content) return ''; 
  const cleanedContent = props.post.content.replace(/\n/g, ' '); 
  const words = cleanedContent.trim().split(/\s+/); 
  return words.length > 20 ? words.slice(0, 20).join(' ') + '...' : cleanedContent;
});

</script>

<template>
  <div class="card mb-4">
    <a href="#!">
      <img class="card-img-top" :src="post.imageUrl" alt="Post image" style="height: 200px; object-fit: cover; width: 100%;" />
    </a>
    <div class="card-body">
      <div class="small text-muted">{{ post.date }}</div>
      <h2 class="card-title" :class="{ 'h4': !isFeatured }">{{ post.title }}</h2>
      <p class="card-text">{{ truncatedContent }}</p>
      
      <router-link :to="{name:'ShowBlog', params: {id: post.id}}">
        <button class="btn btn-primary text-white"> 
          Read more →
        </button>
        </router-link>
    </div>
  </div>
</template>
