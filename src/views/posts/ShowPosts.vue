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


const filteredPost = computed(() => {
  if (!post.value) return {};
  const { id, _id, __v, ...rest } = post.value;
  return rest;
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


const getRandomColor = () => {
  const colors = ["primary", "success", "danger", "warning", "info", "dark"];
  return colors[Math.floor(Math.random() * colors.length)];
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
          <!-- Post Header -->
          <header class="mb-4 text-center">
            <h1 class="fw-bolder mb-3">{{ filteredPost.title }}</h1>
            <div class="text-muted fst-italic mb-2">Ditulis oleh <strong>{{ filteredPost.author }}</strong> pada {{ new Date(filteredPost.createdAt).toLocaleDateString() }}</div>
          </header>

          <!-- Featured Image -->
          <figure class="mb-4 text-center">
            <img class="img-fluid rounded shadow" :src="filteredPost.imageUrl" alt="Post image" />
          </figure>

          <!-- Post Content -->
          <section class="mb-5">
            <p v-for="(paragraph, index) in formattedText" :key="index" class="fs-5 mb-4">
              {{ paragraph }}
            </p>

         
            <!-- Edit & Delete Buttons -->
            <div class="d-grid gap-2 d-md-flex justify-content-md-end">
              <router-link :to="{ name: 'EditPost', params: { id: postId } }" class="btn btn-outline-warning me-md-2">
                Edit <i class="bi bi-pencil-square"></i>
              </router-link>
              <button @click="handleDelete" class="btn btn-outline-danger" type="button">
                Delete <i class="bi bi-trash3"></i>
              </button>
            </div>
          </section>
        </article>
      </div>

      <!-- Sidebar -->
      <div class="col-lg-4">
        <div class="card mb-4 shadow">
          <div class="card-header bg-dark text-white">Informasi Tambahan</div>
          <div class="card-body">
            <ul class="list-unstyled">
              <li><strong>Terakhir diperbarui:</strong> {{ new Date(filteredPost.updatedAt).toLocaleDateString() }}</li>
              <li class="mt-2"> 
                <span v-for="(tag, index) in filteredPost.tags" :key="index" :class="`badge bg-${getRandomColor()} me-1`">
                {{ tag }}
                </span>
            </li>
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
.shadow {
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
}
</style>
