import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useIAStore = defineStore('ia', () => {
  const prompt = ref('')
  const response = ref('')

  async function generateResponse(){
    console.log('desde generateResponse')
  }

  return {
    prompt,
    response,
    generateResponse
  }
})
