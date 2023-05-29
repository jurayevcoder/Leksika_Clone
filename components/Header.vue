<template>
    <header class="bg-[#01756C] fixed z-50 w-full">
      <div class="container mx-auto px-20">
        <nav class="flex justify-between h-[100px] items-center">
          <NuxtLink to="/" class="text-2xl font-bold logo"
            ><img src="../img/Logo.png" alt=""></NuxtLink
          >

          <ul class="flex gap-20 text-white font-normal font-fm">
            <li><NuxtLink class="flex items-center gap-1" to="/eng-uzb"><p>ENG</p><i class='bx bx-transfer-alt'></i><p>UZB</p></NuxtLink></li>
            <li><NuxtLink class="flex items-center gap-1" to="/rus-uzb"><p>RUS</p><i class='bx bx-transfer-alt'></i><p>UZB</p></NuxtLink></li>
            <li><NuxtLink class="pb-1" to="/articles">Articles</NuxtLink></li>
            <li><NuxtLink class="pb-1" to="/grammar">Grammar</NuxtLink></li>
            <li><NuxtLink class="pb-1" to="/about">About us</NuxtLink></li>
          </ul>
        </nav>
      </div>
    </header>
  </template>

  <script setup></script>

  <style lang="scss" scoped>
  .router-link-exact-active{
    font-weight: 800;
    border-bottom: 2px solid #39E991;
  }
  .logo {
    text-decoration: none;
    border: none;
  }

  .font-fm{
    font-family: sans-serif !important;
  }
  </style>
