<script setup>
import { ref } from 'vue';
import PostCard from './PostCard.vue';
import PostSingle from './PostSingle.vue';

defineProps({
  posts: {
    type: Array,
    required: true,
  }
});
</script>

<template>
      <div class="col-lg-8">
        <PostSingle v-if="posts.length > 0" :post="posts[0]" />
        <div class="row">
          <template v-for="(post, index) in posts.slice(1)" :key="index">
            <div class="col-lg-6">
              <PostCard :post="post" />
            </div>
          </template>
        </div>
        </div>
</template>