import { defineField, defineType } from 'sanity';

export const stiftelsenPageType = defineType({
  name: 'stiftelsensida',
  title: 'Stiftelsesidan',
  type: 'document',
  preview: {
    prepare() {
      return {
        title: 'Stiftelsesidan',
        subtitle: 'Information om Bergkullastiftelsen',
      };
    },
  },
  fields: [
    // Om Stiftelsen Section
    defineField({
      name: 'omStiftelsen',
      title: 'Om Stiftelsen',
      type: 'object',
      options: {
        collapsible: false,
      },
      fields: [
        defineField({
          name: 'title',
          title: 'Rubrik',
          type: 'string',
          initialValue: 'Om Bergkullastiftelsen',
          validation: (rule) => rule.required(),
        }),
        defineField({
          name: 'description',
          title: 'Beskrivning',
          type: 'text',
          initialValue: 'Bergkullastiftelsen verkar för hållbar energianvändning genom att bl.a. ge stöd till utveckling av energiproduktion och distribution och till att utveckla rening av avlopp från enskilda hushåll som inte kan få anslutning till centrala reningsverk. Stiftelsen verkar huvudsakligen på Åland.',
          validation: (rule) => rule.required(),
        }),
        defineField({
          name: 'contactBoxText',
          title: 'Kontakt box text',
          type: 'text',
          initialValue: 'Har du frågor om stiftelsen eller vill söka stipendium? Kontakta oss gärna!',
          validation: (rule) => rule.required(),
        }),
        defineField({
          name: 'contactEmail',
          title: 'Kontakt email',
          type: 'string',
          initialValue: 'styrelsen@bergkulla.ax',
          validation: (rule) => rule.required().email(),
        }),
      ],
    }),

    // Ekonomi Section
    defineField({
      name: 'ekonomi',
      title: 'Ekonomi',
      type: 'object',
      options: {
        collapsible: false,
      },
      fields: [
        defineField({
          name: 'title',
          title: 'Rubrik',
          type: 'string',
          initialValue: 'Stiftelsens Ekonomi',
          validation: (rule) => rule.required(),
        }),
        defineField({
          name: 'cards',
          title: 'Informationskort',
          type: 'array',
          validation: (rule) => rule.required().min(1),
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
                  name: 'description',
                  title: 'Beskrivning',
                  type: 'text',
                  validation: (rule) => rule.required(),
                }),
              ],
              preview: {
                select: {
                  title: 'title',
                  subtitle: 'description',
                },
              },
            },
          ],
        }),
        defineField({
          name: 'stipendierFooter',
          title: 'Stipendier footer',
          type: 'object',
          fields: [
            defineField({
              name: 'title',
              title: 'Titel',
              type: 'string',
              initialValue: 'Stipendier',
              validation: (rule) => rule.required(),
            }),
            defineField({
              name: 'description',
              title: 'Beskrivning',
              type: 'text',
              initialValue: 'Stiftelsens överskott används för att dela ut stipendium till personer och organisationer som verkar inom de områden som stadgarna anger.',
              validation: (rule) => rule.required(),
            }),
          ],
        }),
      ],
    }),

    // Stipendier Section
    defineField({
      name: 'stipendier',
      title: 'Stipendier',
      type: 'object',
      options: {
        collapsible: false,
      },
      fields: [
        defineField({
          name: 'title',
          title: 'Rubrik',
          type: 'string',
          initialValue: 'Utdelade Stipendier & Miljöinvesteringar',
          validation: (rule) => rule.required(),
        }),
        defineField({
          name: 'description',
          title: 'Beskrivning',
          type: 'text',
          initialValue: 'Stipendier kan sökas genom att maila till styrelsen@bergkulla.ax. Nedan listas de stipendier och miljöinvesteringar som stiftelsen har delat ut genom åren.',
          validation: (rule) => rule.required(),
        }),
        defineField({
          name: 'contactEmail',
          title: 'Kontakt email',
          type: 'string',
          initialValue: 'styrelsen@bergkulla.ax',
          validation: (rule) => rule.required().email(),
        }),
        defineField({
          name: 'stipendiumData',
          title: 'Stipendier per år',
          type: 'array',
          validation: (rule) => rule.required().min(1),
          of: [
            {
              type: 'object',
              fields: [
                defineField({
                  name: 'year',
                  title: 'År',
                  type: 'string',
                  validation: (rule) => rule.required(),
                }),
                defineField({
                  name: 'items',
                  title: 'Stipendier',
                  type: 'array',
                  of: [{ type: 'text' }],
                  validation: (rule) => rule.required().min(1),
                }),
              ],
              preview: {
                select: {
                  title: 'year',
                  subtitle: 'items.0',
                },
              },
            },
          ],
        }),
      ],
    }),

    // Video Section
    defineField({
      name: 'videos',
      title: 'Videor',
      type: 'object',
      options: {
        collapsible: false,
      },
      fields: [
        defineField({
          name: 'title',
          title: 'Rubrik',
          type: 'string',
          initialValue: 'Videor om Bergkullastiftelsen',
          validation: (rule) => rule.required(),
        }),
        defineField({
          name: 'videoIds',
          title: 'YouTube Video IDs',
          type: 'array',
          validation: (rule) => rule.required().min(1),
          of: [
            {
              type: 'object',
              fields: [
                defineField({
                  name: 'youtubeId',
                  title: 'YouTube ID',
                  type: 'string',
                  description: 'T.ex. "X3UttJoh08M" från youtube.com/watch?v=X3UttJoh08M',
                  validation: (rule) => rule.required(),
                }),
                defineField({
                  name: 'title',
                  title: 'Video titel',
                  type: 'string',
                  validation: (rule) => rule.required(),
                }),
              ],
              preview: {
                select: {
                  title: 'title',
                  subtitle: 'youtubeId',
                },
              },
            },
          ],
        }),
      ],
    }),

    // Navigation
    defineField({
      name: 'navigation',
      title: 'Navigation',
      type: 'object',
      options: {
        collapsible: false,
      },
      fields: [
        defineField({
          name: 'links',
          title: 'Navigationslänkar',
          type: 'array',
          validation: (rule) => rule.required().min(1),
          of: [
            {
              type: 'object',
              fields: [
                defineField({
                  name: 'href',
                  title: 'Länk (anchor)',
                  type: 'string',
                  description: 'T.ex. "#om-stiftelsen"',
                  validation: (rule) => rule.required(),
                }),
                defineField({
                  name: 'label',
                  title: 'Label',
                  type: 'string',
                  validation: (rule) => rule.required(),
                }),
              ],
              preview: {
                select: {
                  title: 'label',
                  subtitle: 'href',
                },
              },
            },
          ],
        }),
      ],
    }),
  ],
});
