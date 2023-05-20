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

  console.log(123,activeShortcuts);
  

  const handleKeyPress = useCallback((event: KeyboardEvent) => {
    if (event.key === shortcutTriggerEventKeyName) {
      // Clean up the active state, except making active trigger key
      setActiveShortcuts([event.key])
      return
    }

    if (
      keyShortcutEventKeys.includes(event.key) &&
      !activeShortcuts.includes(event.key)
    ) {
      setActiveShortcuts(prev => [...prev, event.key])
    }
  }, [activeShortcuts, keyShortcutEventKeys, shortcutTriggerEventKeyName])

  const handleKeyUnPress = useCallback((event: KeyboardEvent) => {
    if (!activeShortcuts.includes(event.key)) {
      console.log(activeShortcuts,event.key);
      
      return
    }

    const index = activeShortcuts.indexOf(event.key)

    if (index !== -1) {
      setActiveShortcuts(prev => prev.slice(index, 1))
    }
  }, [activeShortcuts])

  useEffect(() => {
    document.addEventListener('keyup', handleKeyPress);
    document.addEventListener('keydown', handleKeyUnPress);
    return () => {
      document.removeEventListener('keyup', handleKeyPress);
      document.removeEventListener('keydown', handleKeyUnPress);
  };
  }, [handleKeyPress, handleKeyUnPress]);

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