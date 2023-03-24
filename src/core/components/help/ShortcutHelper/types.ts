export type KeyShortcut = {
  keyName: string
  helpText?: string
}

export interface IShortcutHelper {
  keyShortcuts: KeyShortcut[]
}