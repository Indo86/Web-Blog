<script setup>
import { ref, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { getPost, updatePost } from '@/services/api';

const route = useRoute();
const router = useRouter();

const postId = route.params.id;
const title = ref('');
const author = ref('');
const imageUrl = ref('');
const tags = ref('');
const content = ref('');

onMounted(async () => {
    try {
        const post = await getPost(postId);
        title.value = post.title;
        author.value = post.author;
        imageUrl.value = post.imageUrl;
        tags.value = post.tags;
        content.value = post.content;
    } catch (err) {
        console.error('Gagal mengambil data post:', err);
    }
});

const handleSubmit = async () => {
    try {
        await updatePost(postId, {
            title: title.value,
            author: author.value,
            imageUrl: imageUrl.value,
            tags: tags.value,
            content: content.value,
        });
        router.push({ name: 'ShowBlog', params: { id: postId } });
    } catch (err) {
        console.error('Gagal memperbarui post:', err);
    }
};

const handleDiscard = () => {
    router.push({ name: 'ShowBlog', params: { id: postId } });
};
</script>


<template>
  <section class="edit-post">
    <div class="container container-form">
      <h1>Edit a Story</h1>
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
          <label for="imageUrl" class="form-label">Image URL</label>
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
        <div class="d-grid gap-2 d-md-flex justify-content-md-end">
          <button type="submit" class="btn btn-outline-primary me-md-2" @click="handleSubmit">Save</button>
          <button type="button" class="btn btn-outline-danger" @click="handleDiscard">Discard</button>
        </div>
      </form>
    </div>
  </section>

</template>

<style scoped>

  section.edit-post {
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