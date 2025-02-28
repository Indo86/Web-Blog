<script setup>
import Navbar from '@/components/Navbar.vue';
import Footer from '@/components/Footer.vue';

</script>

<template>
<Navbar/>
<section class="homepage" id="homepage">
  <div class="content">
   <div class="row">
    <div class="col-12">
      <div class="content-aboutMe ">
      <h1>About Me</h1>
      <p>Don't be shy to know me.</p>
    </div>
    </div>
   </div>
  </div>
</section>
<section class="about-me" id="about">
  <div class="container">
    <div class="row">
      <div class="col-md-6">
        <img src="https://images.unsplash.com/photo-1514813836041-518668f092b1?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Profile Picture" class="profile-img">
      </div>
      <div class="col-md-6">
        <div class="about-content">
          <h2>About Me</h2>
          <p class="caption">Behind every story is a storyteller. Get to know me, my journey, and the passion that fuels my creativity.</p>
          <p>Hi, I'm Hannah. A passionate storyteller capturing life's moments through words and visuals. My journey is all about exploring new perspectives, sharing experiences, and inspiring others through creative storytelling.</p>
          <a href="#blog" class="btn-explore">Explore My Blog</a>
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
              url(https://images.unsplash.com/photo-1515036813970-3beada24ab5b?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D);
   background-position: center 50%;
}

section.homepage .content .content-left{
  flex: 1;
}

.about-me {
  padding: 60px 0;
  background-color: #f9f9f9;
  text-align: center;
}
.container {
  max-width: 1100px;
  margin: auto;
}
.profile-img {
  width: 100%;
  border-radius: 15px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
}
.about-content {
  text-align: left;
  padding: 20px;
}
.caption {
  font-style: italic;
  color: #555;
}
.btn-explore {
  display: inline-block;
  margin-top: 15px;
  padding: 10px 20px;
  background-color: #ff6600;
  color: white;
  border-radius: 5px;
  text-decoration: none;
  font-weight: bold;
}
.btn-explore:hover {
  background-color: #e65c00;
}
</style>
