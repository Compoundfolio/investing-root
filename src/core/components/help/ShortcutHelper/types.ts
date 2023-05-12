export type KeyShortcut = {
  keyName: string
  eventKey: KeyboardEvent["key"]
  helpText?: string
}

export interface IShortcutHelper {
  keyShortcuts: KeyShortcut[]
  onClick: () => void
}