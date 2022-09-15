type Mods = Record<string, boolean | string>

export const classNames = (cls: string, mods: Mods, additional: string[]): string => {
  return [
    cls,
    ...additional,
    // @ts-ignore
    ...Object.keys(mods).filter(key => typeof mods[key] === 'boolean' ? Boolean(mods[key]) : JSON.parse(mods[key]))
  ].join(' ')
}