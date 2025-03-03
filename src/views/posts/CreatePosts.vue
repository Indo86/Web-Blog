<script setup>
import Navbar from '@/components/Navbar.vue';
import Footer from '@/components/Footer.vue';
import { ref, watch } from 'vue';
import { createPost } from '@/services/api';

const title = ref('');
const content = ref('');
const author = ref('');
const imageUrl = ref('');
const tags = ref('');
const previewImage = ref('');

watch(imageUrl, (newUrl) => {
  previewImage.value = newUrl || null;
});

const handleSubmit = async () => {
  const postData = {
    title: title.value,
    content: content.value,
    author: author.value,
    imageUrl: imageUrl.value,
    tags: tags.value.split(',').map(tag => tag.trim()),
  };

  try {
    await createPost(postData);
    alert(`Story submitted successfully!`);

    title.value = '';
    content.value = '';
    author.value = '';
    imageUrl.value = '';
    tags.value = '';
    previewImage.value = null;

  } catch (error) {
    console.error("Error submitting post:", error);
    alert("Failed to submit post.");
  }
};
</script>

<template>
  <Navbar />
  <section class="homepage" id="homepage">
  <div class="content">
    <h1>Write Your Story</h1>
  </div>
</section>

  <section class="create-post">
    <div class="container container-form">
      <h1>Write a Story</h1>
      <form @submit.prevent="handleSubmit">
        <div class="mb-3">
          <label for="title" class="form-label">Title</label>
          <input v-model="title" type="text" class="form-control" id="title" required>
        </div>

        <div class="mb-3">
          <label for="author" class="form-label">Author</label>
          <input v-model="author" type="text" class="form-control" id="author" required>
        </div>

        <div class="mb-3">
          <label for="imageUrl" class="form-label">Paste an Image URL</label>
          <input v-model="imageUrl" type="url" class="form-control" id="imageUrl" placeholder="e.g., https://source.unsplash.com/random">
          <small class="text-muted image-caption">
            I recommend you to pick an image from 
            <a href="https://unsplash.com" target="_blank" rel="noopener noreferrer">Unsplash</a>.
          </small>
          <div v-if="imageUrl" class="preview-container">
            <img :src="imageUrl" alt="Preview" class="img-preview">
          </div>
        </div>

        <div class="mb-3">
          <label for="tags" class="form-label">Tags</label>
          <input v-model="tags" type="text" class="form-control" id="tags" placeholder="e.g., Adventure, Mystery">
        </div>

        <div class="mb-3">
          <label for="content" class="form-label">Story</label>
          <textarea v-model="content" class="form-control long-text" id="content" rows="5" required></textarea>
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
                url(https://images.unsplash.com/photo-1541516160071-4bb0c5af65ba?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fA%3D%3D);
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
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
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

  .image-caption {
    display: block;
    margin-top: 5px;
    font-size: 0.9rem;
    color: #6c757d; 
  }

  .preview-container {
    margin-top: 15px;
    text-align: center;
  }


  </style>
