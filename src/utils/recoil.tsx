"use client"

import { useRecoilSnapshot } from "recoil";
import { useEffect } from 'react';

export const DebugObserver = () => {
  const snapshot = useRecoilSnapshot();
  
  useEffect(() => {
    console.debug('The following atoms were modified:');
    for (const node of snapshot.getNodes_UNSTABLE({isModified: true})) {
      console.debug(node.key, snapshot.getLoadable(node));
    }
  }, [snapshot]);

  function keyboardFocus (e) {
    if (e.keyCode === 9) {
      document.documentElement.classList.add('keyboard-focus');
    }

    document.removeEventListener('keydown', keyboardFocus, false);
  }


  // TODO: Pass smw else
  // Defines tab navigation styles
  useEffect(() => {
    const MOUTH_INTERACTION_STYLES = 'using-mouse'
    const TAB_KEY_CODE = 9
    const applyMouthFocusStyles = () => document.body.classList.add(MOUTH_INTERACTION_STYLES)
    const applyTabFocusStyles = (e) => e.keyCode === TAB_KEY_CODE && document.body.classList.remove(MOUTH_INTERACTION_STYLES)

    document.body.addEventListener('mousedown', applyMouthFocusStyles);
    document.body.addEventListener('keydown', applyTabFocusStyles);
    return () => {
      document.body.removeEventListener('mousedown', applyMouthFocusStyles, false)
      document.body.removeEventListener('keydown', applyTabFocusStyles, false)
    }
  }, [])

  return null;
}