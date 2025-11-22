import {defineField, defineType} from 'sanity'

export const bergkullaPageType = defineType({
  name: 'bergkullasida',
  title: 'Bergkulla Sida',
  type: 'document',
  preview: {
    prepare() {
      return {
        title: 'Bergkulla Sida',
        subtitle: 'Innehåll för bergkulla/stuguthyrning sidan',
      }
    },
  },
  fields: [
    // Banner Section
    defineField({
      name: 'banner',
      title: 'Banner (rullande text högst upp)',
      description: 'Visar en rullande banner högst upp på sidan',
      type: 'object',
      options: {
        collapsible: false,
      },
      fields: [
        defineField({
          name: 'enabled',
          title: 'Aktivera banner',
          type: 'boolean',
          initialValue: true,
          validation: (rule) => rule.required(),
        }),
        defineField({
          name: 'text',
          title: 'Banner text',
          type: 'string',
          initialValue: 'Återbud! Bergkulla 2 är tillgänglig för att hyra. 2 sovrum plus sovloft, öppen och luftig planlösning. Läs mer nedan för att boka!',
          validation: (rule) => rule.required(),
        }),
      ],
    }),

    // Hero Section
    defineField({
      name: 'heroSection',
      title: 'Hero Sektion',
      description: 'Huvudbild och välkomsttext högst upp på sidan',
      type: 'object',
      options: {
        collapsible: false,
      },
      fields: [
        defineField({
          name: 'title',
          title: 'Titel',
          type: 'string',
          initialValue: 'Välkommen till Bergkulla på Åland',
          validation: (rule) => rule.required(),
        }),
        defineField({
          name: 'subtitle',
          title: 'Undertitel',
          type: 'string',
          initialValue: 'Moderna stugor 10.800€ per år',
          validation: (rule) => rule.required(),
        }),
        defineField({
          name: 'buttonText',
          title: 'Knapptext',
          type: 'string',
          initialValue: 'Kontakta oss',
          validation: (rule) => rule.required(),
        }),
        defineField({
          name: 'buttonLink',
          title: 'Knapplänk',
          type: 'string',
          initialValue: '/contact',
          validation: (rule) => rule.required(),
        }),
        defineField({
          name: 'image',
          title: 'Bakgrundsbild',
          type: 'image',
          options: {
            hotspot: true,
          },
          validation: (rule) => rule.required(),
        }),
      ],
    }),

    // Last House Section (Återbud)
    defineField({
      name: 'lastHouseSection',
      title: 'Återbud Sektion',
      description: 'Information om tillgängligt hus',
      type: 'object',
      options: {
        collapsible: false,
      },
      fields: [
        defineField({
          name: 'badge',
          title: 'Badge Text',
          type: 'string',
          initialValue: '🏠 Bergkulla 2 vakant',
          validation: (rule) => rule.required(),
        }),
        defineField({
          name: 'title',
          title: 'Titel',
          type: 'string',
          initialValue: 'ÅTERBUD',
          validation: (rule) => rule.required(),
        }),
        defineField({
          name: 'subtitle',
          title: 'Undertitel',
          type: 'string',
          initialValue: 'Vi har fått återbud på vårt största hus',
          validation: (rule) => rule.required(),
        }),
        defineField({
          name: 'description',
          title: 'Beskrivning',
          type: 'array',
          of: [{type: 'text'}],
          validation: (rule) => rule.required().min(1),
        }),
        defineField({
          name: 'buttonText',
          title: 'Knapptext',
          type: 'string',
          initialValue: 'Kontakta oss',
          validation: (rule) => rule.required(),
        }),
        defineField({
          name: 'buttonLink',
          title: 'Knapplänk',
          type: 'string',
          initialValue: '/contact',
          validation: (rule) => rule.required(),
        }),
        defineField({
          name: 'carouselImages',
          title: 'Bildgalleri',
          description: 'Bilder för återbud-husets karusell',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                defineField({
                  name: 'image',
                  title: 'Bild',
                  type: 'image',
                  options: {
                    hotspot: true,
                  },
                  validation: (rule) => rule.required(),
                }),
                defineField({
                  name: 'alt',
                  title: 'Alt-text',
                  type: 'string',
                  validation: (rule) => rule.required(),
                }),
              ],
              preview: {
                select: {
                  title: 'alt',
                  media: 'image',
                },
              },
            },
          ],
          validation: (rule) => rule.required().min(1),
        }),
      ],
    }),

    // Main Image Gallery
    defineField({
      name: 'mainGallery',
      title: 'Huvudgalleri (Upptäck Bergkulla)',
      description: 'Bildgalleri som visas under återbud-sektionen',
      type: 'object',
      options: {
        collapsible: false,
      },
      fields: [
        defineField({
          name: 'title',
          title: 'Titel',
          type: 'string',
          initialValue: 'UPPTÄCK BERGKULLA',
          validation: (rule) => rule.required(),
        }),
        defineField({
          name: 'images',
          title: 'Bilder',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                defineField({
                  name: 'image',
                  title: 'Bild',
                  type: 'image',
                  options: {
                    hotspot: true,
                  },
                  validation: (rule) => rule.required(),
                }),
                defineField({
                  name: 'alt',
                  title: 'Alt-text',
                  type: 'string',
                  validation: (rule) => rule.required(),
                }),
              ],
              preview: {
                select: {
                  title: 'alt',
                  media: 'image',
                },
              },
            },
          ],
          validation: (rule) => rule.required().min(1),
        }),
      ],
    }),

    // Intro Sections
    defineField({
      name: 'introSections',
      title: 'Intro Sektioner',
      description: 'Tre informationssektioner (Bo på Bergkulla, Faciliteter, Vår Historia)',
      type: 'array',
      validation: (rule) => rule.required().length(3),
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'title',
              title: 'Titel',
              type: 'string',
              validation: (rule) => rule.required(),
            }),
            defineField({
              name: 'content',
              title: 'Innehåll',
              type: 'array',
              of: [{type: 'text'}],
              validation: (rule) => rule.required().min(1),
            }),
            defineField({
              name: 'bulletPoints',
              title: 'Punktlista (valfri)',
              description: 'Används för Faciliteter-sektionen',
              type: 'array',
              of: [{type: 'string'}],
            }),
            defineField({
              name: 'image',
              title: 'Bild',
              type: 'image',
              options: {
                hotspot: true,
              },
              validation: (rule) => rule.required(),
            }),
            defineField({
              name: 'imageAlt',
              title: 'Bild Alt-text',
              type: 'string',
              validation: (rule) => rule.required(),
            }),
          ],
          preview: {
            select: {
              title: 'title',
              media: 'image',
            },
          },
        },
      ],
    }),

    // Final CTA Section
    defineField({
      name: 'ctaSection',
      title: 'Avslutande CTA Sektion',
      description: 'Avslutande uppmaningssektion',
      type: 'object',
      options: {
        collapsible: false,
      },
      fields: [
        defineField({
          name: 'title',
          title: 'Titel',
          type: 'string',
          initialValue: 'BOKA DIN VISTELSE',
          validation: (rule) => rule.required(),
        }),
        defineField({
          name: 'description',
          title: 'Beskrivning',
          type: 'text',
          validation: (rule) => rule.required(),
        }),
        defineField({
          name: 'buttonText',
          title: 'Knapptext',
          type: 'string',
          initialValue: 'Boka idag',
          validation: (rule) => rule.required(),
        }),
        defineField({
          name: 'buttonLink',
          title: 'Knapplänk',
          type: 'string',
          initialValue: '/contact',
          validation: (rule) => rule.required(),
        }),
      ],
    }),
  ],
})
