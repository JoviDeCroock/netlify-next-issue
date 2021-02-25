import { useRouter } from 'next/router';

export default function Index() {
  const router = useRouter();
  return JSON.stringify(router.query);
}
