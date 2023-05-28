import React from 'react'
import { initFirebase } from '../../../../firebase';
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { useRouter } from 'next/router';
import { useAuthState } from "react-firebase-hooks/auth";
import { AppLogo, colors } from '@core';
import Image from 'next/image';
import styles from './AuthPage.module.css';
import clsx from 'clsx';
 
const AuthPage = () => {
  const firebaseApp = initFirebase();
  const provider = new GoogleAuthProvider();
  const auth = getAuth(firebaseApp);
  const [user, loading] = useAuthState(auth);
  const router = useRouter();

  if (user) {
    router.push("/brokerages-selection");
  }

  const signIn = async () => {
    await signInWithPopup(auth, provider);
  };

  // TODO: Use app colors
  return (
    <section className={clsx(styles.authContainer, "flex w-full h-full")}>
      <div className="z-10 flex flex-col flex-1 h-full" style={{ minHeight: "inherit" }}>
        <div>
          <AppLogo withTitle />
        </div>
        <section className="flex flex-col items-center justify-center h-full" style={{ minHeight: "inherit" }}>
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-2">
              <h1 className="text-4xl text-white">Welcome, investor!</h1>
              <small className="text-lg text-gray-400">Log in with Google</small>
            </div>
            <button
              onClick={signIn}
              className="justify-center w-full gap-2 px-8 py-3 text-black transition duration-150 bg-white rounded-lg hover:shadow hover:bg-gray-200">
              {/* TODO: Download image */}
              <Image width={24} height={24} src="https://www.svgrepo.com/show/475656/google-color.svg" loading="lazy" alt="google logo" />
              <span>Log in with Google</span>
            </button>
          </div>
        </section>
      </div>
      <div className="flex items-center justify-center w-20 h-full gradient" style={{ minHeight: "inherit", background: colors.lightGreen }} />
      <div className="z-10 flex items-center justify-center flex-1 h-full" style={{ minHeight: "inherit" }}>
        <AppLogo />
      </div>
    </section>
  )
}

export default AuthPage