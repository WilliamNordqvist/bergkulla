import {defineField, defineType} from 'sanity'

export const heroSectionType = defineType({
  name: 'huvudsida',
  title: 'Huvudsida',
  type: 'document',
  preview: {
    prepare() {
      return {
        title: 'Huvudsida',
        subtitle: 'Innehåll för startsidan',
      }
    },
  },
  fields: [
    defineField({
      name: 'leftSection',
      title: 'Vänster Sektion (Stiftelsen)',
      description: 'Innehåll för vänster sida av huvudsidan',
      type: 'object',
      options: {
        collapsible: false,
      },
      fields: [
        defineField({
          name: 'category',
          title: 'Kategori',
          type: 'string',
          initialValue: 'Stiftelse',
          validation: (rule) => rule.required(),
        }),
        defineField({
          name: 'title',
          title: 'Titel',
          type: 'string',
          initialValue: 'Bergkullastiftelsen',
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
          initialValue: 'Utforska Stiftelsen',
          validation: (rule) => rule.required(),
        }),
        defineField({
          name: 'buttonLink',
          title: 'Knapplänk',
          type: 'string',
          initialValue: '/stiftelsen',
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
    defineField({
      name: 'rightSection',
      title: 'Höger Sektion (Stuguthyrning)',
      description: 'Innehåll för höger sida av huvudsidan',
      type: 'object',
      options: {
        collapsible: false,
      },
      fields: [
        defineField({
          name: 'category',
          title: 'Kategori',
          type: 'string',
          initialValue: 'Stuguthyrning',
          validation: (rule) => rule.required(),
        }),
        defineField({
          name: 'title',
          title: 'Titel',
          type: 'string',
          initialValue: 'Stuguthyrning på Bergkulla',
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
          initialValue: 'Boka Nu',
          validation: (rule) => rule.required(),
        }),
        defineField({
          name: 'buttonLink',
          title: 'Knapplänk',
          type: 'string',
          initialValue: '/bergkulla',
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
  ],
})
