<script setup>
import Navbar from '@/components/Navbar.vue';
import Footer from '@/components/Footer.vue';

</script>

<template>
<Navbar/>
<section class="homepage" id="homepage">
  <div class="content">
   <div class="row">
    <div class="col-8">
      <div class="content-left">
      <h1>Capture the Moments, <br> Share the Stories.</h1>
      <p>Every photo tells a story, and every story deserves to be shared.
        Join me on this journey of visual storytelling and inspiration.
      </p>
      <a href="#blog" class="btn-explore" aria-label="Explore My Blog">Explore My Blog</a>
    </div>
    </div>
   </div>
  </div>
</section>
<Footer/>

</template>

<style scoped>
section.homepage {
  background: linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.2)), 
              url(https://images.unsplash.com/photo-1541515991256-0a5ab476c9a1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D);
}

section.homepage .content .content-left{
  flex: 1;
}
</style>
