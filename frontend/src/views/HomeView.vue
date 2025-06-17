<template>
  <div class="min-h-screen flex items-center justify-center">
    <div class="p-8 rounded-lg shadow-md w-full max-w-md">
      <div class="flex justify-center mb-6">
        <button
          @click="isLogin = true"
          :class="[
            'px-4 py-2 font-medium',
            isLogin
              ? 'bg-blue-600 text-white'
              : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
          ]"
          class="rounded-l-lg transition"
        >
          Вход
        </button>
        <button
          @click="isLogin = false"
          :class="[
            'px-4 py-2 font-medium',
            !isLogin
              ? 'bg-blue-600 text-white'
              : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
          ]"
          class="rounded-r-lg transition"
        >
          Регистрация
        </button>
      </div>

      <h1 class="text-2xl font-bold text-center mb-6">
        {{ isLogin ? 'Авторизация' : 'Регистрация' }}
      </h1>

      <form @submit.prevent="handleSubmit" class="space-y-4">
        <div>
          <label for="username" class="block text-sm font-medium text-gray-700 mb-1">
            Имя пользователя
          </label>
          <input
            v-model="form.username"
            type="text"
            id="username"
            required
            class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Введите имя"
          />
        </div>

        <div>
          <label for="password" class="block text-sm font-medium text-gray-700 mb-1">
            Пароль
          </label>
          <input
            v-model="form.password"
            type="password"
            id="password"
            required
            :minlength="!isLogin ? 6 : undefined"
            class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            :placeholder="isLogin ? 'Введите пароль' : 'Придумайте пароль (мин. 6 символов)'"
          />
        </div>

        <div v-if="!isLogin">
          <label for="confirmPassword" class="block text-sm font-medium text-gray-700 mb-1">
            Подтвердите пароль
          </label>
          <input
            v-model="form.confirmPassword"
            type="password"
            id="confirmPassword"
            required
            :minlength="6"
            class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Повторите пароль"
          />
          <p v-if="form.password && form.confirmPassword && form.password !== form.confirmPassword"
             class="text-red-500 text-sm mt-1">
            Пароли не совпадают
          </p>
        </div>

        <button
          type="submit"
          class="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          :disabled="loading || (!isLogin && form.password !== form.confirmPassword)"
        >
          <span v-if="!loading">
            {{ isLogin ? 'Войти' : 'Зарегистрироваться' }}
          </span>
          <span v-else>
            {{ isLogin ? 'Вход...' : 'Регистрация...' }}
          </span>
        </button>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useAuthStore } from '@/stores/auth'

const router = useRouter()
const authStore = useAuthStore()

const isLogin = ref(true)
const loading = ref(false)

const form = ref({
  username: '',
  password: '',
  confirmPassword: ''
})

const handleSubmit = async () => {
  try {
    loading.value = true

    if (isLogin.value) {
      await authStore.login(form.value.username, form.value.password)
    } else {
      if (form.value.password !== form.value.confirmPassword) return
      await authStore.register(form.value.username, form.value.password)
    }

    const redirectPath = router.currentRoute.value.query.redirect?.toString() || '/'
    await router.push(redirectPath)

  } catch (error) {
    console.error('Ошибка:', error)
  } finally {
    loading.value = false
  }
}
</script>
