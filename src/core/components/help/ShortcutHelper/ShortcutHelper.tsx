import React, { memo, useCallback, useEffect, useState, useMemo } from 'react'
import { IShortcutHelper, KeyShortcut } from './types'
import { isMacOs } from '@core/helpers'
import { isEqual } from 'lodash'

const commandButton = {
  keyName: '⌘',
  eventKey: 'Meta',
} as const

const ctrlButton = {
  keyName: 'Ctrl',
  eventKey: 'Control',
} as const

const initialState = []

const ShortcutHelper = ({
  keyShortcuts,
  onClick,
}: IShortcutHelper) => {
  const [activeShortcuts, setActiveShortcuts] = useState<KeyShortcut["eventKey"][]>(initialState)
  const shortcutTriggerEventKeyName = isMacOs() ? commandButton.eventKey : ctrlButton.eventKey

  const keyShortcutEventKeys = useMemo(() => {
    return [ 
      shortcutTriggerEventKeyName, 
      ...keyShortcuts.map(keyShortcut => keyShortcut.eventKey) 
    ]
  }, [keyShortcuts, shortcutTriggerEventKeyName])

  console.log(activeShortcuts);
  

  const handleKeyPress = useCallback((event: KeyboardEvent) => {
    console.log(event.key);
    console.log(keyShortcutEventKeys.includes(event.key),keyShortcutEventKeys,event.key);
    console.log(activeShortcuts.includes(event.key),activeShortcuts,event.key);
    
    if (
      keyShortcutEventKeys.includes(event.key) &&
      !activeShortcuts.includes(event.key)
    ) {
      console.log(event.key);
      setActiveShortcuts(prev => [...prev, event.key])
    }
  }, [keyShortcutEventKeys, activeShortcuts]);

  useEffect(() => {
    document.addEventListener('keydown', handleKeyPress);
    return () => {
      document.removeEventListener('keydown', handleKeyPress);
    };
  }, [keyShortcuts]);

  useEffect(() => {
    isEqual(activeShortcuts, keyShortcutEventKeys) && onClick()
  }, [activeShortcuts])

  return (
    <button 
      className='flex items-center gap-2 p-2 hover:bg-black active:top-1' 
      style={{ zIndex: 9999 }}
      onClick={onClick}
    >
      {/* <button
        className="bg-black overflow-hidden relative h-10 px-3 rounded-lg flex justify-center align-center border border-white p-[4px] transition-all duration-75 top-0"
      >
        {isMacOs() ? commandButton.keyName : ctrlButton.keyName}
      </button> */}
      {keyShortcuts.map((keyShortcut, index) => (
        <div
          key={keyShortcut.keyName}
          className="flex items-center gap-2"
        >
          <button
            className={`bg-black overflow-hidden relative h-10 px-3 rounded-lg flex justify-center align-center border border-white p-[4px] transition-all duration-75 top-0 ${activeShortcuts.includes(keyShortcut.eventKey) && "top-1"}`}
            // onClick={onClick}
          >
            {keyShortcut.keyName}
          </button>
          {keyShortcuts.length-1 !== index && "+"}
        </div>
      ))}
    </button>
  )
}

export default memo(ShortcutHelper)