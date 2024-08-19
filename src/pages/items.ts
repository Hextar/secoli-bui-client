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
        label: 'Eventi futuri',
        to: { path: '/events/future/il-circolo-di-conoscenza' },
        tooltip: { content: 'Prossimi eventi', placement: 'bottom' },
      },
      {
        label: 'Eventi passati',
        to: { path: '/events/past/cosa-ci-tiene-uniti' },
        tooltip: { content: 'Eventi passati', placement: 'bottom' },
      },
    ],
  },
  {
    label: 'Materiali',
    to: undefined,
    tooltip: { content: 'Materiali digitali', placement: 'bottom' },
    children: [
      {
        label: 'Manuali',
        to: { path: '/contents/rules' },
        tooltip: { content: 'Manuali di Secoli Bui', placement: 'bottom' }
      },
      {
        label: 'Bacheca del fato',
        to: { path: '/contents/board-of-fate' },
        tooltip: { content: 'Bacheca del fato', placement: 'bottom' }
      },
      {
        label: 'Ambientazione',
        to: { path: '/contents/world-system' },
        tooltip: { content: 'Ambientazione di Braara', placement: 'bottom' },
      }
    ],
  },
  {
    label: 'Gioca con noi',
    to: { path: '/play-with-us' },
    tooltip: { content: 'Gioca con noi', placement: 'bottom' },
    children: [
      //   {
      //     label: 'Chi siamo',
      //     to: { path: '/play-with-us/about-us' },
      //     tooltip: { content: 'Coming soon', placement: 'bottom' },
      //     disabled: true,
      //   },
      {
        label: 'Cos’è il LARP?',
        to: { path: '/play-with-us/what-is-larp' },
        tooltip: { content: 'Coming soon', placement: 'bottom' },
      },
      //   {
      //     label: 'Guida per neofiti',
      //     to: { path: '/play-with-us/new-players-guide' },
      //     tooltip: { content: 'Coming soon', placement: 'bottom' },
      //     disabled: true,
      //   },
      //   {
      //     label: 'Sicurezza e COVID',
      //     to: { path: '/play-with-us/safety-covid' },
      //     tooltip: { content: 'Coming soon', placement: 'bottom' },
      //     disabled: true,
      //   },
      //   {
      //     label: 'Glossario LARP',
      //     to: { path: '/play-with-us/larp-glossary' },
      //     tooltip: { content: 'Coming soon', placement: 'bottom' },
      //     disabled: true,
      //   },
    ],
  },
  {
    label: 'Abilità OSP',
    to: { path: 'http://www.mondoditenebra.com/mad2factory/index.php?PaginaHome=SecoliBui%2Flogin&SezioneSito=SecoliBui&fbclid=IwY2xjawEhp0dleHRuA2FlbQIxMAABHc-Jv8FXTw8NIskSUFaS7I0iNdVOfKfdscN175XEeaKTCy5JO1lorhjhOg_aem_4FCm4F_ZmuuvxKNiN5CK2Q' },
    tooltip: { content: 'Spendi i tuoi punti OSP', placement: 'bottom' },
    external: true
  }
]
