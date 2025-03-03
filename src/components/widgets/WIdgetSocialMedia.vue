<script setup>
</script>

<template>
  <div class="card mb-4 text-center">
    <div class="card-header fw-bold text-start">Follow Me</div>
    <div class="card-body">
      <div class="d-flex justify-content-center gap-3">
        <a href="https://github.com/Indo86" target="_blank" class="social-link github">
          <i class="bi bi-github"></i>
        </a>
        <a href="https://instagram.com/deni_norman_z" target="_blank" class="social-link instagram">
          <i class="bi bi-instagram"></i>
        </a>
        <a href="https://www.threads.net/@yourusername" target="_blank" class="social-link threads">
          <i class="bi bi-threads"></i>
        </a>
        <a href="https://www.linkedin.com/in/deni-norman-zaky-5590a3187/" target="_blank" class="social-link linkedin">
          <i class="bi bi-linkedin"></i>
        </a>
      </div>
    </div>
  </div>
</template>

<style scoped>
.card {
  border: none;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
}

.card-header {
  background-color: #f8f9fa;
}

.social-link {
  font-size: 1.8rem;
  color: #333;
  transition: transform 0.2s ease, color 0.2s ease;
}

.github:hover {
  color: #181717;
  transform: scale(1.2);
}

.instagram:hover {
  color: #E4405F;
  transform: scale(1.2);
}

.threads:hover {
  color: #000;
  transform: scale(1.2);
}

.linkedin:hover {
  color: #0077b5;
  transform: scale(1.2);
}
</style>
