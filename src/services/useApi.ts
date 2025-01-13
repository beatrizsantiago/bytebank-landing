const BASE_URL = 'http://fiap-loadbalancer-294654420.sa-east-1.elb.amazonaws.com'

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
