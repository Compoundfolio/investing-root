import { useQuery } from 'react-query';
import { dehydrate } from 'react-query';
import { getDogs, queryClient } from 'src/utils';
import { initFirebase } from '../firebase';
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { useRouter } from 'next/router';
import { useAuthState } from "react-firebase-hooks/auth";


export async function getServerSideProps() {
  await queryClient.prefetchQuery(["dogs"], () => getDogs())

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
}

export default function Home() {
  const { data } = useQuery(["dogs"], () => getDogs())
  const firebaseApp = initFirebase();
  const provider = new GoogleAuthProvider();
  const auth = getAuth(firebaseApp);
  const [user, loading] = useAuthState(auth);
  const router = useRouter();

  // TODO: Save user id

  if (user) {
    router.push("/brokerages-selection");
    return <div className="text-white">Load Compaundfolio account...</div>;
  }

  const signIn = async () => {
    const result = await signInWithPopup(auth, provider);
  };

  return (
    <>
      <button className="text-white" onClick={signIn}>Sign in</button>
    </>
  )
}
