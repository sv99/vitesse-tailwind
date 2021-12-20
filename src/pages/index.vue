<script setup lang="ts">

useHead({
  title: 'Vitesse Tailwind',
})

</script>

<template>
  <h1 class="m-4 text-3xl font-semibold">
    Home page
  </h1>

  <h1>Defaul empty style</h1>

  <br><br>
  <hr>
  <br><br>

  <div class="flex">
    <div>
      <img src="music.svg" size="100x100" alt="Logo">
    </div>
    <div>
      <h1>Welcome to NorthBy</h1>
      <h2>A premium in sight and sound</h2>
      <button>Learn More</button>
    </div>
  </div>

  <br><br>
  <hr>
  <br><br>

  <div class="flex justify-center">
    <div class="mx-4 order-last">
      <img src="music.svg" size="100x100" alt="Logo">
    </div>
    <div class="mx-4 self-center">
      <h1>Welcome to NorthBy</h1>
      <h2>A premium in sight and sound</h2> <button>Learn More</button>
    </div>
  </div>

  <br><br>
  <hr>
  <br><br>

  <div class="flex justify-center bg-gray-300">
    <div class="mx-4 order-last">
      <img src="music.svg" size="100x100" alt="Logo">
    </div>
    <div class="mx-4 self-center text-center">
      <h1 class="text-6xl font-bold text-blue-700">
        Welcome to NorthBy
      </h1> <h2 class="text-3xl font-semibold text-blue-300">
        A premium in sight and sound
      </h2>
      <button>Learn More</button>
    </div>
  </div>

  <br><br>
  <hr>
  <br><br>

  <div class="flex justify-center bg-gray-300">
    <div class="mx-4 order-last self-center">
      <img src="music.svg" size="100x100" alt="Logo">
    </div>
    <div class="mx-4 self-center text-center">
      <h1 class="text-6xl font-bold text-blue-700">
        Welcome to NorthBy
      </h1> <h2 class="text-3xl font-semibold text-blue-300">
        A premium in sight and sound
      </h2>
      <button
        class="my-4 px-4 py-2 border-2 border-black
         rounded-lg text-white bg-blue-900"
      >
        Learn More
      </button>
    </div>
  </div>

  <br><br>
  <hr>
  <br><br>

  <div class="mb-2">
    <p class="text-xs">
      text-xs
    </p>
    <p class="text-sm">
      text-sm
    </p>
    <p class="text-base">
      text-base
    </p>
    <p class="text-lg">
      text-lg
    </p>
    <p class="text-xl">
      text-xl
    </p>
    <p class="text-2xl">
      text-2xl
    </p>
    <p class="text-3xl">
      text-3xl
    </p>
    <p class="text-4xl">
      text-4xl
    </p>
    <p class="text-5xl">
      text-5xl
    </p>
    <p class="text-6xl">
      text-6xl
    </p>
    <p class="text-7xl">
      text-7xl
    </p>
    <p class="text-8xl">
      text-8xl
    </p>
    <p class="text-9xl">
      text-9xl
    </p>
    <p class="text-10xl">
      text-10xl - Unknown class
    </p>
  </div>

  <br><br>
  <hr>
  <br><br>

  <div class="mb-2">
    <p class="font-extralight">
      font-extralight
    </p>
    <p class="font-thin">
      font-thin
    </p>
    <p class="font-light">
      font-light
    </p>
    <p class="font-normal">
      font-normal
    </p>
    <p class="font-medium">
      font-medium
    </p>
    <p class="font-semibold">
      font-semibold
    </p>
    <p class="font-bold">
      font-bold
    </p>
    <p class="font-extrabold">
      font-extrabold
    </p>
    <p class="font-black">
      font-black
    </p>
  </div>
</template>
