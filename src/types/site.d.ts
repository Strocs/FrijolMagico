declare module '@/data/site.json' {
  interface SiteData {
    title: string
    lang: string
    description: string
    favicon: string
    url: string
    image: string
    podcast: string
    social_media: {
      ig: string
      fb: string
    }
    top_banner: {
      text: string
      subtitle: string
    }
    OG_IMAGE: string
    next_festival: {
      day: number
      month: number
      year: number
    }
    apply: {
      title: string
      subtitle: string
      description: string
      steps: Array<{
        title: string
        description: string
        link: string
      }>
      seo: {
        title: string
        description: string
      }
    }
    top_bar: {
      active: boolean
      text: string
      button: {
        active: boolean
        text: string
      }
    }
    catalog: {
      title: string
      description: string
      seo: {
        title: string
        description: string
      }
    }
    selected_artists: {
      title: string
      subtitle: string
      description: string
      categories: string[]
      seo: {
        title: string
        description: string
        category: {
          ilustracion: {
            title: string
            description: string
          }
          manualidades: {
            title: string
            description: string
          }
          narrativagrafica: {
            title: string
            description: string
          }
        }
      }
    }
  }
  const data: SiteData
  export default data
}
