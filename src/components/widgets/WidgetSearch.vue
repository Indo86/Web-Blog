<script setup>
import { ref } from 'vue';

const searchQuery = ref('');

const emit = defineEmits(['search']);

const handleSearch = () => {
  emit('search', searchQuery.value);
};
</script>

<template>
  <!-- Search widget-->
  <div class="card mb-4">
    <div class="card-header fw-bold">Search</div>
    <div class="card-body">
      <div class="input-group">
        <input 
          v-model="searchQuery"
          class="form-control"
          type="text"
          placeholder="Enter search term..."
          aria-label="Enter search term..."
          aria-describedby="button-search"
        />
        <button class="btn btn-primary" id="button-search" type="button" @click="handleSearch">
          Go!
        </button>
      </div>
    </div>
  </div>
</template>
