<script setup>
import { computed } from "vue";

const props = defineProps({
  posts: {
    type: Array,
    default: () => []   
  }
});

const uniqueTags = computed(() => {
  const allTags = props.posts.flatMap(post => post.tags || []);
  return [...new Set(allTags)];
});

const getRandomColor = () => {
  const colors = ["primary", "success", "danger", "warning", "info", "dark"];
  return colors[Math.floor(Math.random() * colors.length)];
};
</script>


<template>
  <!-- Tags Widget -->
  <div class="card mb-4">
    <div class="card-header fw-bold">Tags</div>
    <div class="card-body">
      <div class="d-flex flex-wrap gap-2">
        <span v-for="tag in uniqueTags" :key="tag" :class="`badge bg-${getRandomColor()}`">
          {{ tag }}
        </span>
      </div>
    </div>
  </div>
</template>

<style scoped>
.badge {
  font-size: 0.7rem;
  padding: 8px 12px;
  cursor: pointer;
  transition: 0.3s;
}

.badge:hover {
  background-color: #0056b3;
}
</style>
