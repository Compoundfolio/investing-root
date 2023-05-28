import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { ROUTES_GUEST } from 'src/routing';

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    router.push(ROUTES_GUEST.BROKERAGES_SELECTION);
  }, [])

  return (
    <div>TODO: Home page landing</div>
  )
}
