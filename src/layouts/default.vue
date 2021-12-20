<template>
  <div class="px-4 py-10 text-center text-gray-700 dark:text-gray-200">
    <p class="text-4xl">
      <carbon-campsite class="inline-block" />
    </p>
    <p>
      <a rel="noreferrer" href="https://github.com/antfu/vitesse" target="_blank">
        Vitesse Tailwind CSS
      </a>
    </p>
    <!-- <p>
      <em class="text-sm opacity-75">{{ t('intro.desc') }}</em>
    </p> -->
    <nav>
      <a class="underline text-blue-500 p-1" href="/">Home</a>
      <a class="underline text-blue-500 p-1" href="/box">Box</a>
      <a class="underline text-blue-500 p-1" href="/page">Page</a>
    </nav>
  </div>

  <router-view />

  <br><br>
  <hr>
  <br><br>

  <p>
    [Default Layout]
  </p>
</template>
