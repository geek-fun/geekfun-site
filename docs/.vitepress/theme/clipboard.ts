export const copyText = async (text: string): Promise<boolean> => {
  try {
    await navigator.clipboard.writeText(text)
    return true
  } catch {
    const active = document.activeElement
    const input = document.createElement('textarea')
    input.value = text
    input.readOnly = true
    input.style.position = 'fixed'
    input.style.opacity = '0'
    document.body.appendChild(input)

    try {
      input.select()
      return document.execCommand('copy')
    } catch {
      return false
    } finally {
      input.remove()
      if (active instanceof HTMLElement) active.focus({ preventScroll: true })
    }
  }
}
