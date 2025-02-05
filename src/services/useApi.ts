const BASE_URL = process.env.REACT_APP_API_URL;

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
