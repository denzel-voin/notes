<template>
  <div class="flex items-center justify-center min-h-screen bg-gray-50 p-4 sm:p-6">
    <div class="w-full max-w-md bg-white rounded-xl shadow-md p-8 text-center">
      <h1 class="text-8xl font-bold text-red-500 mb-2">404</h1>

      <h2 class="text-3xl font-semibold text-gray-800 mb-3">Страница не найдена</h2>

      <p class="text-lg text-gray-600 mb-8">
        Запрошенная страница не существует или была перемещена.
      </p>

      <div class="flex flex-col sm:flex-row gap-4 justify-center">
        <router-link
          to="/"
          class="px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          На главную
        </router-link>

        <button
          @click="goBack"
          class="px-6 py-3 bg-white text-gray-800 font-medium rounded-lg border border-gray-300 hover:bg-gray-50 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
        >
          Вернуться назад
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()

const goBack = () => {
  if (window.history.state.back) {
    router.go(-1)
  } else {
    router.push('/')
  }
}
</script>
