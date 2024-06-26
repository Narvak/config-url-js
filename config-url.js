const dev = process.env.NODE_ENV !== 'production';

const devUrl = 'http://localhost:5000';
const prodUrl = '';

export const baseUrl = dev ? devUrl : prodUrl;
