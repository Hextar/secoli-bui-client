import { MenuItemType } from './types'

export const MenuItems: MenuItemType[] = [
  {
    label: 'Home',
    to: '/',
  },
  {
    label: 'Eventi',
    to: '/events',
    tooltip: { content: 'Coming soon', placement: 'bottom' },
    disabled: true,
    children: [
      {
        label: 'Eventi passati',
        to: '/events/past',
        tooltip: { content: 'Coming soon', placement: 'bottom' },
        disabled: true,
      },
      {
        label: 'Eventi future',
        to: '/events/future',
        tooltip: { content: 'Coming soon', placement: 'bottom' },
        disabled: true,
      },
    ]
  },
  {
    label: 'Ambientazione',
    to: '/world-system',
    tooltip: { content: 'Coming soon', placement: 'bottom' },
    disabled: true,
    children: [
      {
        label: 'Storia di Braara',
        to: '/world-system/braara-story',
        tooltip: { content: 'Coming soon', placement: 'bottom' },
        disabled: true,
      },
      {
        label: 'Sistema di Gioco',
        to: '/world-system/game-system',
        tooltip: { content: 'Coming soon', placement: 'bottom' },
        disabled: true,
      },
    ]
  },
  {
    label: 'Gioca con noi',
    to: '/play-with-us',
    tooltip: { content: 'Coming soon', placement: 'bottom' },
    disabled: true,
    children: [
      {
        label: 'Chi siamo',
        to: '/pay-with-us/about-us',
        tooltip: { content: 'Coming soon', placement: 'bottom' },
        disabled: true,
      },
      {
        label: 'Cos’è il LARP?',
        to: '/pay-with-us/what-is-larp',
        tooltip: { content: 'Coming soon', placement: 'bottom' },
        disabled: true,
      },
      {
        label: 'Guida per neofiti',
        to: '/pay-with-us/new-players-guide',
        tooltip: { content: 'Coming soon', placement: 'bottom' },
        disabled: true,
      },
      {
        label: 'Sicurezza e COVID',
        to: '/pay-with-us/safety-covid',
        tooltip: { content: 'Coming soon', placement: 'bottom' },
        disabled: true,
      },
      {
        label: 'Glossario LARP',
        to: '/pay-with-us/larp-glossary',
        tooltip: { content: 'Coming soon', placement: 'bottom' },
        disabled: true,
      },
    ]
  }
]