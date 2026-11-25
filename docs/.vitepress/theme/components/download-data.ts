import { DOCKIT_VERSION, SQLKIT_VERSION } from '../version'
import { getLocalizedSitePath } from '../../site-navigation'

export type DownloadLanguage = 'en' | 'zh' | 'pt-BR' | 'ja' | 'ko' | 'es'

export const desktopApps = [
  {
    id: 'dockit',
    name: 'DocKit',
    logo: '/dockit.png',
    version: DOCKIT_VERSION,
  },
  {
    id: 'sqlkit',
    name: 'SqlKit',
    logo: '/sqlkit.png',
    version: SQLKIT_VERSION,
  },
] as const

export type DesktopApp = typeof desktopApps[number]

export const installTools = [
  {
    id: 'serverlessInsight',
    name: 'ServerlessInsight',
    logo: '/serverlessinsight.png',
    section: 'serverless',
    command: 'npm install -g @geek-fun/serverlessinsight',
    resource: { label: 'docs', href: 'https://serverlessinsight.com' },
    repository: 'https://github.com/geek-fun/serverlessinsight',
  },
  {
    id: 'serverlessAdapter',
    name: 'serverless-adapter',
    logo: '/serverless-adapter.svg',
    section: 'serverless',
    command: 'npm install @geek-fun/serverless-adapter',
    resource: { label: 'npm', href: 'https://www.npmjs.com/package/@geek-fun/serverless-adapter' },
    repository: 'https://github.com/geek-fun/serverless-adapter',
  },
  {
    id: 'dataStudioAgent',
    name: 'Data Studio Agent',
    logo: '/data-studio-agent.svg',
    section: 'developer',
    command: 'npm install -g @geek-fun/data-studio-mcp',
    resource: { label: 'npm', href: 'https://www.npmjs.com/package/@geek-fun/data-studio-mcp' },
    repository: 'https://github.com/geek-fun/data-studio-agent',
  },
  {
    id: 'jestSearch',
    name: 'jest-search',
    logo: '/jest-search.png',
    section: 'developer',
    command: 'npm install --save-dev @geek-fun/jest-search',
    resource: { label: 'npm', href: 'https://www.npmjs.com/package/@geek-fun/jest-search' },
    repository: 'https://github.com/geek-fun/jest-search',
  },
] as const

export type InstallTool = typeof installTools[number]

export const appRepository = (app: DesktopApp): string => `https://github.com/geek-fun/${app.id}`

export const appProductPage = (app: DesktopApp, language: DownloadLanguage): string =>
  getLocalizedSitePath(`/products/${app.id}/`, language)

export const appInstallers = ({ id, name, version }: DesktopApp) => {
  const root = `https://github.com/geek-fun/${id}/releases/download/v${version}`
  return {
    dmg: `${root}/${name}_${version}_universal.dmg`,
    exe: `${root}/${name}_${version}_x64-setup.exe`,
    msi: `${root}/${name}_${version}_x64_en-US.msi`,
    deb: `${root}/${name}_${version}_amd64.deb`,
    rpm: `${root}/${name}-${version}-1.x86_64.rpm`,
    appImage: `${root}/${name}_${version}_amd64.AppImage`,
  }
}

export type PackageType = keyof ReturnType<typeof appInstallers>

export const installerPlatforms = [
  { id: 'macos', name: 'macOS', architecture: '', packages: ['dmg'] },
  { id: 'windows', name: 'Windows', architecture: 'x64', packages: ['exe', 'msi'] },
  { id: 'linux', name: 'Linux', architecture: 'x86-64', packages: ['deb', 'rpm', 'appImage'] },
] as const satisfies readonly {
  id: string
  name: string
  architecture: string
  packages: readonly PackageType[]
}[]

export const packageLabels: Record<PackageType, string> = {
  dmg: '.dmg',
  exe: '.exe',
  msi: '.msi',
  deb: '.deb',
  rpm: '.rpm',
  appImage: 'AppImage',
}
