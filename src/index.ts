import { asyncFuncWithReturnValue } from './utils'

export async function main(value: any) {
  try {
    const result = await asyncFuncWithReturnValue(value)
    console.log('index.main', result)
  } catch (error) {
    console.error(error)
  }
}
