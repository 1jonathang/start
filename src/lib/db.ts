import { Redis } from "@upstash/redis"

export const db = new Redis({
    // idk why can't do process.env.UPSTASH_REDIS_REST_URL just paste env vars
    url: 'https://willing-urchin-39057.upstash.io',
    token: 'AZiRASQgYTkwMTNkNTgtNDQ4Yy00ZWEzLWIxZjktZTIyNDg5ZGRjMjQ2ZmExNDNjMjhjNDk3NDk2NThlYzc5NWZhMzg4ZGVjY2E=',
})



