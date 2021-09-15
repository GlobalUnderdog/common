export const wait = (ms: number): Promise<void> =>
  new Promise((r) => setTimeout(r, ms))

export const processEnvOrThrow = (key: string): string => {
  const val = process.env[key]
  if (!val) throw new Error(`Need to set environment variable ${key}`)
  return val
}
