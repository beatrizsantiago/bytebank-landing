const BASE_URL = 'http://localhost:3000';

type Props = {
  url: string;
  options?: RequestInit;
}

const useApi = ({ url, options = {} }:Props) => fetch(`${BASE_URL}/${url}`, {
  headers: {
    'Content-Type': 'application/json',
  },
  ...options,
})

export default useApi;
