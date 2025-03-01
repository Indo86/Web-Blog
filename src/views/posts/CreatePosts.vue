<script setup>
import Navbar from '@/components/Navbar.vue';
import Footer from '@/components/Footer.vue';
import { ref } from 'vue';

const title = ref('');
const story = ref('');
const image = ref(null);
const previewImage = ref(null);

const handleImageUpload = (event) => {
  const file = event.target.files[0];
  if (file) {
    image.value = file;
    const reader = new FileReader();
    reader.onload = (e) => {
      previewImage.value = e.target.result;
    };
    reader.readAsDataURL(file);
  }
};
</script>

<template>
  <Navbar />
  <!-- Page Header -->
  <section class="homepage">
    <div class="content">
      <h1>Write Your Story  </h1>
    </div>
  </section>
  <section class="create-post">
    <div class="container container-form">
      <h1>Write a Story</h1>
      <form @submit.prevent="">
        <div class="mb-3">
          <label for="title" class="form-label">Title of the Story</label>
          <input v-model="title" type="text" class="form-control" id="title" required>
        </div>
        <div class="mb-3">
          <label for="imageUpload" class="form-label">Upload an Illustration</label>
          <input type="file" class="form-control" id="imageUpload" @change="handleImageUpload" accept="image/*">
          <div v-if="previewImage" class="preview-container">
            <img :src="previewImage" alt="Preview" class="img-preview">
          </div>
        </div>
        <div class="mb-3">
          <label for="story" class="form-label">The Story</label>
          <textarea v-model="story" class="form-control long-text" id="story" rows="5" required></textarea>
        </div>
        <button type="submit" class="btn btn-primary">Post</button>
      </form>
    </div>
  </section>
  <Footer />
</template>

<style scoped>
section.homepage {
  background: linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.2)),
              url(https://images.unsplash.com/photo-1541516160071-4bb0c5af65ba?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D);
  background-size: cover;
  background-position: center 65%;
  background-attachment: fixed;
  height: 50vh;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  text-align: center;
  padding: 0 5%;
}

section.create-post {
  padding: 50px;
}

.container-form {
  max-width: 600px;
  margin: auto;
  background: #fff;
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.long-text {
  resize: none;
}

.preview-container {
  margin-top: 15px;
  text-align: center;
}

.img-preview {
  max-width: 100%;
  height: auto;
  border-radius: 5px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}
</style>
