import { openRouter } from '@/lib/ia.js'
import { streamText } from 'ai'

export default {
  async generarReceta(prompt) {
    const result = streamText({
      model: openRouter('meta-llama/llama-3.3-8b-instruct:free'),
      system:
        'Eres un chef experto y creativo. Tu tarea es crear recetas deliciosas y únicas basadas en los ingredientes que te proporcionen.',
      prompt,
    })

    return result.textStream
  },
}
