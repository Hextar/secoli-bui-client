import type { MenuItemType } from '~/types'

export const MenuItems: MenuItemType[] = [
  {
    label: 'Home',
    to: { path: '/' },
    tooltip: { content: 'Tenda master', placement: 'bottom' },
    homepage: true,
  },
  {
    label: 'Eventi',
    to: { path: '/events' },
    tooltip: { content: 'Lista eventi', placement: 'bottom' },
    children: [
      {
        label: 'Eventi passati',
        to: { path: '/events/past' },
        tooltip: { content: 'Coming soon', placement: 'bottom' },
        disabled: true,
      },
      {
        label: 'Eventi futuri',
        to: { path: '/events/future' },
        tooltip: { content: 'Prossimi eventi', placement: 'bottom' },
      },
    ],
  },
  {
    label: 'Ambientazione',
    to: { path: '/world-system' },
    tooltip: { content: 'Coming soon', placement: 'bottom' },
    children: [
      {
        label: 'Storia di Braara',
        to: { path: '/world-system/braara-story' },
        tooltip: { content: 'Coming soon', placement: 'bottom' },
        disabled: true,
      },
      {
        label: 'Sistema di Gioco',
        to: { path: '/world-system/game-system' },
        tooltip: { content: 'Coming soon', placement: 'bottom' },
        disabled: true,
      },
    ],
  },
  {
    label: 'Gioca con noi',
    to: { path: '/play-with-us' },
    tooltip: { content: 'Coming soon', placement: 'bottom' },
    disabled: true,
    children: [
      {
        label: 'Chi siamo',
        to: { path: '/pay-with-us/about-us' },
        tooltip: { content: 'Coming soon', placement: 'bottom' },
        disabled: true,
      },
      {
        label: 'Cos’è il LARP?',
        to: { path: '/pay-with-us/what-is-larp' },
        tooltip: { content: 'Coming soon', placement: 'bottom' },
        disabled: true,
      },
      {
        label: 'Guida per neofiti',
        to: { path: '/pay-with-us/new-players-guide' },
        tooltip: { content: 'Coming soon', placement: 'bottom' },
        disabled: true,
      },
      {
        label: 'Sicurezza e COVID',
        to: { path: '/pay-with-us/safety-covid' },
        tooltip: { content: 'Coming soon', placement: 'bottom' },
        disabled: true,
      },
      {
        label: 'Glossario LARP',
        to: { path: '/pay-with-us/larp-glossary' },
        tooltip: { content: 'Coming soon', placement: 'bottom' },
        disabled: true,
      },
    ],
  },
]
