import axios from 'axios';

const HttpClient = axios.create({
  headers: {
    'Content-Type': 'application/json',
  },
});

export { HttpClient };
