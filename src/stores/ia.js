import { defineStore } from 'pinia'
import { ref } from 'vue'
import IAService from '../services/IAService.js'

export const useIAStore = defineStore('ia', () => {
  const prompt = ref('')
  const response = ref('')
  const isLoading = ref(false)

  async function generateResponse() {
    response.value = '' // Reset the response before generating a new one
    isLoading.value = true // Set loading state to true
    const result = await IAService.generarReceta(prompt.value)

    for await (const texto of result) {
      response.value += texto
    }
    isLoading.value = false // Set loading state to false after generation
  }

  return {
    prompt,
    response,
    isLoading,
    generateResponse,
  }
})
