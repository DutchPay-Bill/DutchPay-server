import { createClient } from 'redis';

export const redisClient = createClient({
    password: '2vkvIofMbWudTB7i9cKJrDvFwfN47r3u',
    socket: {
        host: 'redis-14876.c1.asia-northeast1-1.gce.cloud.redislabs.com',
        port: 14876
    }
});

const connectRedis = async ()=> {
    await redisClient.connect();
}

export const redisConnection = async ()=> {
    try {
        await connectRedis()
        console.log("connected to redis");
    } catch (error) {
        console.error(error)
    }
}