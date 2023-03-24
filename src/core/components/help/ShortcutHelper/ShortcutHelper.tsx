import React, { memo } from 'react'
import { IShortcutHelper } from './types'

const ShortcutHelper = ({
  keyShortcuts,
}: IShortcutHelper) => {
  return (
    <div>
      {keyShortcuts.map(keyShortcut => (
        <button 
          key={keyShortcut.keyName}
          className="overflow-hidden relative h-10 px-1 rounded-lg flex justify-center align-center border border-white p-[4px] transition-all duration-75 top-0 active:top-1"
          >
          {keyShortcut.keyName}
        </button>
      ))}
    </div>
  )
}

export default memo(ShortcutHelper)