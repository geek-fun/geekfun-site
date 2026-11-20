<script setup lang="ts">
import { nextTick, onMounted, onUnmounted, ref } from 'vue'
import { packageLabels, type PackageType } from './download-data'

const props = defineProps<{
  id: string
  label: string
  modelValue: PackageType
  options: readonly PackageType[]
  notes: Partial<Record<PackageType, string>>
}>()

const emit = defineEmits<{ 'update:modelValue': [value: PackageType] }>()

const root = ref<HTMLElement | null>(null)
const trigger = ref<HTMLButtonElement | null>(null)
const listbox = ref<HTMLElement | null>(null)
const open = ref(false)
const activeIndex = ref(0)

const optionId = (option: PackageType): string => `${props.id}-${option}`

const openMenu = async (): Promise<void> => {
  activeIndex.value = Math.max(0, props.options.indexOf(props.modelValue))
  open.value = true
  await nextTick()
  listbox.value?.focus({ preventScroll: true })
}

const closeMenu = (restoreFocus = false): void => {
  open.value = false
  if (restoreFocus) trigger.value?.focus({ preventScroll: true })
}

const choose = (option: PackageType): void => {
  emit('update:modelValue', option)
  closeMenu(true)
}

const selectWithKeyboard = (event: KeyboardEvent): void => {
  switch (event.key) {
    case 'ArrowDown':
      activeIndex.value = Math.min(activeIndex.value + 1, props.options.length - 1)
      break
    case 'ArrowUp':
      activeIndex.value = Math.max(activeIndex.value - 1, 0)
      break
    case 'Home':
      activeIndex.value = 0
      break
    case 'End':
      activeIndex.value = props.options.length - 1
      break
    case 'Enter':
    case ' ':
      choose(props.options[activeIndex.value])
      break
    case 'Escape':
      closeMenu(true)
      break
    case 'Tab':
      requestAnimationFrame(() => closeMenu())
      return
    default:
      return
  }

  event.preventDefault()
}

const onFocusOut = (event: FocusEvent): void => {
  const next = event.relatedTarget
  if (!(next instanceof Node) || !root.value?.contains(next)) closeMenu()
}

const onOutsidePointer = (event: PointerEvent): void => {
  const target = event.target
  if (open.value && target instanceof Node && !root.value?.contains(target)) closeMenu()
}

onMounted(() => document.addEventListener('pointerdown', onOutsidePointer))
onUnmounted(() => document.removeEventListener('pointerdown', onOutsidePointer))
</script>

<template>
  <div ref="root" class="download-picker" @focusout="onFocusOut">
    <button
      ref="trigger"
      type="button"
      class="download-picker-trigger"
      aria-haspopup="listbox"
      :aria-controls="open ? id : undefined"
      :aria-expanded="open"
      :aria-label="`${label} · ${packageLabels[modelValue]}`"
      @click="open ? closeMenu() : openMenu()"
      @keydown.down.prevent="openMenu"
      @keydown.up.prevent="openMenu"
    >
      <span>{{ packageLabels[modelValue] }}</span>
      <span class="download-picker-chevron" aria-hidden="true"></span>
    </button>
    <ul
      v-if="open"
      :id="id"
      ref="listbox"
      class="download-picker-menu"
      role="listbox"
      tabindex="-1"
      :aria-label="label"
      :aria-activedescendant="optionId(options[activeIndex])"
      @keydown="selectWithKeyboard"
    >
      <li
        v-for="(option, index) in options"
        :id="optionId(option)"
        :key="option"
        role="option"
        :aria-selected="option === modelValue"
        :class="{ 'download-picker-active': index === activeIndex }"
        @pointerenter="activeIndex = index"
        @mousedown.prevent
        @click="choose(option)"
      >
        <span>
          <strong>{{ packageLabels[option] }}</strong>
          <small v-if="notes[option]">{{ notes[option] }}</small>
        </span>
        <span v-if="option === modelValue" class="download-picker-check" aria-hidden="true"></span>
      </li>
    </ul>
  </div>
</template>

<style scoped lang="scss">
.download-picker {
  position: relative;
}

.download-picker-trigger {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 4px;
  width: 100%;
  min-height: 44px;
  padding: 6px 2px 6px 0;
  border-bottom: 1px solid var(--download-line);
  color: var(--vp-c-text-1);
  text-align: start;
  font-size: 0.875rem;
  font-weight: 550;
  transition: border-color var(--download-motion-quick) var(--download-motion-ease);

  &:hover,
  &[aria-expanded='true'] {
    border-bottom-color: var(--vp-c-text-2);
  }

  &:focus-visible {
    outline: 2px solid var(--download-focus);
    outline-offset: 3px;
  }
}

.download-picker-chevron {
  flex: 0 0 auto;
  width: 6px;
  height: 6px;
  margin: 0 2px 3px 0;
  border: solid var(--vp-c-text-2);
  border-width: 0 1.5px 1.5px 0;
  transform: rotate(45deg);
  transition: transform var(--download-motion-quick) var(--download-motion-ease);
}

.download-picker-trigger[aria-expanded='true'] .download-picker-chevron {
  transform: rotate(-135deg);
}

.download-picker-menu {
  position: absolute;
  z-index: 3;
  inset: calc(100% + 6px) 0 auto auto;
  width: 11.5rem;
  margin: 0;
  padding: 5px;
  background: var(--vp-c-bg-elv);
  border: 1px solid var(--download-line);
  border-radius: 8px;
  box-shadow: var(--vp-shadow-2);
  list-style: none;
  outline: none;

  li {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 8px;
    min-height: 44px;
    padding: 6px 9px;
    border-radius: 4px;
    text-align: start;
    cursor: pointer;
    transition: background-color var(--download-motion-quick) var(--download-motion-ease);
  }

  strong,
  small {
    display: block;
    line-height: 1.4;
  }

  strong {
    font-size: 0.875rem;
    font-weight: 600;
  }

  small {
    color: var(--vp-c-text-2);
    font-size: 0.75rem;
  }
}

@media (prefers-reduced-motion: no-preference) {
  .download-picker-menu {
    animation: download-picker-enter var(--download-motion-quick) var(--download-motion-ease);
  }
}

@keyframes download-picker-enter {
  from {
    opacity: 0.72;
    transform: translateY(-4px);
  }
}

.download-picker-active {
  background: var(--download-hover);
}

.download-picker-check {
  flex: 0 0 auto;
  width: 5px;
  height: 9px;
  margin-inline-end: 1px;
  border: solid var(--vp-c-text-1);
  border-width: 0 1.5px 1.5px 0;
  transform: rotate(45deg);
}
</style>
