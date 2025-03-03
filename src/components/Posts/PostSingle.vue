<script setup>
defineProps({
  post: {
    type: Object,
    required: true,
  }
});
</script>

<template>
  <div class="card mb-4">
    <a href=""><img class="card-img-top" :src="post.imageUrl" alt="Featured post image" /></a>
    <div class="card-body">
      <h2 class="card-title">{{ post.title }}</h2>
      <p class="card-text">{{ post.content.split('\n')[0] }}</p>
      

      <router-link :to="{name:'ShowBlog', params: {id: post.id}}">
        <button class="btn btn-primary text-white"> 
          Read more →
        </button>
        </router-link>
        </div>
      </div>
</template>