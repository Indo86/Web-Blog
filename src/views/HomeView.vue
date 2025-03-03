<script setup>
import { ref, computed, onMounted } from 'vue';
import Navbar from '@/components/Navbar.vue';
import Footer from '@/components/Footer.vue';
import PostList from '@/components/Posts/PostList.vue';
import { getPosts } from '@/services/api';
import WidgetTags from '@/components/widgets/WidgetTags.vue';
import WidgetSocialMedia from '@/components/widgets/WIdgetSocialMedia.vue';

const posts = ref([]);

// Ambil data postingan
onMounted(async () => {
    posts.value = await getPosts();
});

// Hanya ambil 5 postingan pertama
const limitedPosts = computed(() => posts.value.slice(0, 5));
</script>

<template>
    <Navbar/>
    <!-- Page Header -->
    <section class="homepage" id="homepage">
        <div class="content">
            <div class="content-left col-4">
                <h1>Capture the Moments, <br> Share the Stories.</h1>
                <p>Every photo tells a story, and every story deserves to be shared.
                Join me on this journey of visual storytelling and inspiration.
                </p>
                <a href="#blog" class="btn-explore" aria-label="Explore My Blog">Explore My Blog</a>
            </div>
            <div class="content-right"></div>
        </div>
    </section>

    <!-- Main Content -->
    <div class="container mt-5">
       <div class="row">
            <h1 class="text-center mb-3">My Blog</h1>
            <!-- Mengirim hanya 5 post ke komponen PostList -->
            <PostList :posts="limitedPosts" />
            <div class="col-lg-4">
                <WidgetSocialMedia/>
                <WidgetTags :posts="posts"/>
            </div>
       </div>
    </div>

    <Footer/>
</template>

<style scoped>
section.homepage {
    background: linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.2)),
                url(https://images.unsplash.com/photo-1541516160071-4bb0c5af65ba?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D);
    background-size: cover;
    background-position: center 45%;
    background-attachment: fixed;
    height: 100vh;
    display: flex;
    align-items: center;
    color: white;
    padding: 0 5%;
}
</style>
