<script setup>
import { onMounted, ref, computed } from 'vue';
import { getPost, deletePost } from '@/services/api';
import { useRoute, useRouter } from 'vue-router';
import Navbar from '@/components/Navbar.vue';
import Footer from '@/components/Footer.vue';

const route = useRoute();
const router = useRouter();
const post = ref(null);
const loading = ref(true);
const error = ref(null);
const postId = route.params.id;

onMounted(async () => {
  try {
    post.value = await getPost(postId);
  } catch (err) {
    error.value = 'Gagal mengambil data post';
  } finally {
    loading.value = false;
  }
});

const formattedText = computed(() => {
  return post.value?.content ? post.value.content.split('\n') : [];
});

const handleDelete = async () => {
  const confirmDelete = confirm("Apakah Anda yakin ingin menghapus blog ini?");
  if (!confirmDelete) return;

  try {
    await deletePost(postId);  
    alert("Post berhasil dihapus!");
    router.back();
  } catch (err) {
    alert("Gagal menghapus post.");
    console.error("Error deleting post:", err);
  }
};
</script>

<template>
  <Navbar />
  <div class="container content-blog">
    <div class="row">
      <div class="col-lg-8">
        <article v-if="loading">Loading...</article>
        <article v-else-if="error">{{ error }}</article>
        <article v-else>
          <!-- Post header -->
          <header class="mb-4">
            <h1 class="fw-bolder mb-1">{{ post.title }}</h1>
            <div class="text-muted fst-italic mb-2">Posted on {{ post.date }}</div>
          </header>
          <!-- Featured image -->
          <figure class="mb-4">
            <img class="img-fluid rounded" :src="post.imageUrl" alt="Post image" />
          </figure>
          <!-- Post content -->
          <section class="mb-5">
            <p v-for="(paragraph, index) in formattedText" :key="index" class="fs-5 mb-4">
              {{ paragraph }}
            </p>
            <div class="d-grid gap-2 d-md-flex justify-content-md-end">
                <router-link :to="{ name: 'EditPost', params: { id: post.id } }" class="btn btn-outline-warning me-md-2">
                    Edit 
                    <i class="bi bi-pencil-square"></i>
                </router-link>
                <button @click="handleDelete" class="btn btn-outline-danger" type="button">
                    Delete 
                    <i class="bi bi-trash3"></i>
                </button>
            </div>
          </section>
        </article>
      </div>
      <!-- Sidebar -->
      <div class="col-lg-4">
        <div class="card mb-4">
          <div class="card-header">Categories</div>
          <div class="card-body">
            <ul class="list-unstyled">
              <li><a href="#">Web Design</a></li>
              <li><a href="#">JavaScript</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
  <Footer />
</template>

<style scoped>
.content-blog {
  margin-top: 100px;
}
</style>
