import { BASE_KEY_PREFIX } from "@/constants"

export function gameKeyBuilder(gameType) {
  return function () {
    const args = Array.from(arguments)
    return args.reduce((str, arg) => `${str}-${arg}`, `${BASE_KEY_PREFIX}-${gameType}`)
  }
}
