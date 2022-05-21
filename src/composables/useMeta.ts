export const useMeta = (params: {
  author?: string,
  title?: string,
  description?: string,
  keywords?: string[],
  image?: string,
  type?: string,
}) => {
  const author = params.author || 'Mad² Factory'
  const title = params.title === 'Secoli Bui'
    ? params.title
    : `${params.title} - Secoli Bui`
  const description = params.description || 'scopri i prossimi eventi LARP italiani'
  const type = params.type || 'website'
  const keywords = [
    ...(params.keywords || []),
    ...[
      'larp',
      'grv',
      'gioco di ruolo',
      'gioco di ruolo dal vivo',
      'D&D',
      'doungeon and dragons',
      'italia',
      'sardegna',
      'aperto',
      'natura',
      'zombie',
      'lattice',
      'elfi',
      'orchi',
      'cosplay',
      'tempo libero',
      'medioevo',
      'magia',
      'fantasy',
      'dark fantasy',
      'game of thrones'
    ]
  ]
  const url = window.location.href
  const image = params.image || `${url}/images/social.jpg`

  useHead({
    title,
    base: { href: '/' },
    htmlAttrs: { lang: 'it' },
    meta: [
      // Description
      { name: 'description', content: 'Scopri i prossimi eventi LARP italiani' },

      // Keywords
      { property: 'keywords', content: [...new Set(keywords)] },

      // Locale alternative
      { property: 'og:locale:alternate', content: 'en', key: 'en' },

      // Author and copyright
      { name: 'author', content: author },
      { name: 'copyright', content: author },

      // OpenGraph data (Most widely used)
      { property: 'og:title', content: title },
      { property: 'og:site_name', content: title },
      // The list of types is available here: http://ogp.me/#types
      { property: 'og:type', content: type },
      // Should the the same as your canonical link, see below.
      { property: 'og:url', content: url },
      { property: 'og:image', content: image },
      // Often the same as your meta description, but not always.
      { property: 'og:description', content: description },

      // Twitter card
      { name: 'twitter:card', content: 'summary' },
      { name: 'twitter:site', content: url },
      { name: 'twitter:title', content: title },
      { name: 'twitter:description', content: description },
      // {name: 'twitter:creator', content: '@alligatorio'},
      { name: 'twitter:image:src', content: image },

      // Google / Schema.org markup:
      { itemprop: 'name', content: title },
      { itemprop: 'description', content: description },
      { itemprop: 'image', content: image },
    ],
    link: [
      { rel: 'canonical', href: url },
      { rel: 'icon', type: 'ico', href: computed(() => '/favicon.ico') },
    ],
  })
}