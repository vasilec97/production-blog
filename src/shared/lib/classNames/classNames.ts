type Mods = Record<string, boolean | string>

export const classNames = (
  cls: string,
  mods: Mods = {},
  additional: string[] = [],
): string => [
  cls,
  ...additional.filter((cls) => Boolean(cls)),
  ...Object.keys(mods).filter((key) => Boolean(mods[key])),
].join(' ');
