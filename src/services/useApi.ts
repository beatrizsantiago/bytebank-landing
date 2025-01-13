const BASE_URL = 'https://d2dg8ollv4ao6v.cloudfront.net'

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
