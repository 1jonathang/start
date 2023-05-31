import { Redis } from "@upstash/redis"

export const db = new Redis({
    // idk why can't do process.env.UPSTASH_REDIS_REST_URL just paste env vars
    url: 'https://saved-mallard-36301.upstash.io',
    token: 'AY3NASQgNDQ2ODc4MTEtMzk2Ny00YzhhLThmMzgtODRhZDRlY2IyYmU1YjI4ZTZjMTM2ZTI3NGQyNTljNWYxNWMzNGY4MzI5YzM=',
})

