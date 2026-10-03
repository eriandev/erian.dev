export async function fetchWithTimeout(resource: string, init?: RequestInit, timeoutMs = 8000) {
  const controller = new AbortController()
  const id = setTimeout(() => {
    controller.abort()
  }, timeoutMs)

  try {
    const response = await fetch(resource, { ...init, signal: controller.signal })
    return response
  } finally {
    clearTimeout(id)
  }
}
