import { defineStore } from 'pinia'
import { ref } from 'vue'
import IAService from '../services/IAService.js'

export const useIAStore = defineStore('ia', () => {
  const prompt = ref('')
  const response = ref('')

  async function generateResponse() {
    const result = await IAService.generarReceta(prompt.value)

    for await (const texto of result) {
      console.log(texto)
    }
  }

  return {
    prompt,
    response,
    generateResponse,
  }
})
