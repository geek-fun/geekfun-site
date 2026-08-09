<script setup lang="ts">
type TeamLink = {
  icon: string | { svg: string }
  link: string
  ariaLabel?: string
}

type TeamMember = {
  avatar: string
  name: string
  title: string
  desc: string
  links: TeamLink[]
}

const iconPaths: Record<string, string> = {
  github: '<path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>',
  x: '<path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>',
  youtube: '<path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12z"/>'
}

const csdnIcon = {
  svg: '<path fill="currentColor" d="M16 0C7.163 0 0 7.163 0 16s7.163 16 16 16 16-7.163 16-16S24.837 0 16 0zm-1.6 22.4H9.6V9.6h4.8v12.8zm8 0h-4.8V9.6h4.8v12.8z"/>'
}

const members: TeamMember[] = [
  {
    avatar: '/team/seven.jpg',
    name: 'SEVEN',
    title: 'Founder',
    desc: '好好学习，天天向上',
    links: [
      { icon: 'github', link: 'https://github.com/Blankll' },
      { icon: 'x', link: 'https://x.com/lisheng_z' },
      { icon: 'youtube', link: 'https://www.youtube.com/@geekfun-club' }
    ]
  },
  {
    avatar: '/team/Wee.jpg',
    name: 'Wee©',
    title: 'Contributor',
    desc: '生活如此美好，而我且如此暴躁。',
    links: [
      { icon: 'github', link: 'https://github.com/VisionView' },
      { icon: csdnIcon, link: 'https://blog.csdn.net/Vision_Pinna/', ariaLabel: 'CSDN' }
    ]
  },
  {
    avatar: '/team/anne.png',
    name: 'AnnChord',
    title: 'Contributor',
    desc: 'Code to Build the Future',
    links: [
      { icon: 'github', link: 'https://github.com/AnnChord' },
      { icon: 'x', link: 'https://x.com/@shuu19069667' }
    ]
  }
]

const linkLabel = (link: TeamLink, index: number): string => {
  if (link.ariaLabel) return link.ariaLabel
  return typeof link.icon === 'string' ? link.icon : `Link ${index + 1}`
}

const linkMarkup = (link: TeamLink): string => {
  if (typeof link.icon === 'string') {
    return `<svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true">${iconPaths[link.icon] || ''}</svg>`
  }
  return `<svg viewBox="0 0 32 32" width="18" height="18" fill="currentColor" aria-hidden="true">${link.icon.svg}</svg>`
}
</script>

<template>
  <div class="team-grid">
    <article v-for="member in members" :key="member.name" class="team-card">
      <img class="team-avatar" :src="member.avatar" :alt="member.name" loading="lazy" />
      <h3 class="team-name">{{ member.name }}</h3>
      <p class="team-title">{{ member.title }}</p>
      <p class="team-desc">{{ member.desc }}</p>
      <div class="team-links">
        <a
          v-for="(link, index) in member.links"
          :key="link.link"
          class="team-link"
          :href="link.link"
          :aria-label="linkLabel(link, index)"
          target="_blank"
          rel="noopener noreferrer"
          v-html="linkMarkup(link)"
        ></a>
      </div>
    </article>
  </div>
</template>

<style scoped lang="scss">
.team-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }

  @media (min-width: 1920px) {
    gap: 32px;
  }
}

.team-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  background-color: var(--gf-c-bg-card, var(--vp-c-bg));
  border: 1px solid var(--gf-c-border-subtle, var(--vp-c-divider));
  border-radius: 12px;
  padding: 1.75rem 1.5rem;
  transition: transform 0.25s cubic-bezier(0.4, 0, 0.2, 1), border-color 0.25s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.25s cubic-bezier(0.4, 0, 0.2, 1);

  @media (min-width: 1440px) {
    padding: 2rem 1.75rem;
  }

  &:hover {
    transform: translateY(-4px);
    border-color: var(--gf-c-border-hover, var(--vp-c-brand-1));
    box-shadow: 0 12px 24px var(--gf-c-glow), var(--vp-shadow-2);
  }
}

.team-avatar {
  width: 64px;
  height: 64px;
  border-radius: 50%;
  object-fit: cover;
  border: 1px solid var(--gf-c-border-subtle, var(--vp-c-divider));
  margin-bottom: 1rem;
}

.team-name {
  margin: 0 0 0.25rem;
  font-size: 1.125rem;
  font-weight: 700;
  letter-spacing: -0.02em;
  color: var(--vp-c-text-1);
}

.team-title {
  margin: 0 0 0.75rem;
  font-size: 0.8125rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: var(--vp-c-brand-1);
}

.team-desc {
  margin: 0 0 1.25rem;
  font-size: 0.9375rem;
  line-height: 1.6;
  color: var(--vp-c-text-2);
}

.team-links {
  display: flex;
  gap: 8px;
  margin-top: auto;
}

.team-link {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  color: var(--vp-c-text-2);
  background: var(--vp-c-bg-alt);
  border: 1px solid var(--gf-c-border-subtle, var(--vp-c-divider));
  transition: color 0.2s ease, border-color 0.2s ease, background-color 0.2s ease;

  &:hover {
    color: var(--vp-c-brand-1);
    border-color: var(--gf-c-border-hover, var(--vp-c-brand-1));
    background: var(--vp-c-brand-soft);
  }

  &:focus-visible {
    outline: 2px solid var(--vp-c-brand-1);
    outline-offset: 2px;
  }

  @media (pointer: coarse) {
    width: 44px;
    height: 44px;
  }
}
</style>
