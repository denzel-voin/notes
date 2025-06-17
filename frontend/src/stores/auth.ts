import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useAuthStore = defineStore('auth', () => {
  const token = ref<string | null>(localStorage.getItem('token') || null)

  const isAuthenticated = () => !!token.value

  const login = async (name: string, password: string) => {
    try {
      const response = await fetch('http://localhost:3000/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name, password })
      })

      if (!response.ok) {
        throw new Error('Ошибка авторизации')
      }

      const data = await response.json()
      token.value = data.token
      localStorage.setItem('token', data.token)
      return true
    } catch (error) {
      console.error('Ошибка авторизации:', error)
      throw error
    }
  }

  const register = async (username: string, password: string) => {
    try {
      const response = await fetch('http://localhost:3000/api/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, password })
      })

      if (!response.ok) {
        throw new Error('Ошибка регистрации')
      }

      const data = await response.json()
      token.value = data.token
      localStorage.setItem('token', data.token)
      return true
    } catch (error) {
      console.error('Ошибка регистрации:', error)
      throw error
    }
  }

  const logout = () => {
    token.value = null
    localStorage.removeItem('token')
  }

  return { token, isAuthenticated, login, register, logout }
})
