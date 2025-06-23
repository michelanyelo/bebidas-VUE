import { openRouter } from '@/lib/ia.js'
import { streamText } from 'ai'

export default {
  async generarReceta(prompt){
    const result = streamText({
      model: openRouter('meta-llama/llama-3.3-8b-instruct:free'),
      prompt
    })

    return result.textStream
  }
}
