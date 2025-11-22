import {defineField, defineType} from 'sanity'

export const footerType = defineType({
  name: 'footer',
  title: 'Footer',
  type: 'document',
  preview: {
    prepare() {
      return {
        title: 'Footer',
        subtitle: 'Sidfot som visas på alla sidor',
      }
    },
  },
  fields: [
    defineField({
      name: 'companyName',
      title: 'Företagsnamn',
      type: 'string',
      initialValue: 'Bergkullastiftelsen',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'addressLine1',
      title: 'Adress rad 1',
      type: 'string',
      initialValue: 'Hamnsundsvägen 523, Bertbyvik',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'addressLine2',
      title: 'Adress rad 2',
      type: 'string',
      initialValue: 'AX-22430 Saltvik, Åland',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'email',
      title: 'E-postadress',
      type: 'string',
      initialValue: 'styrelsen@bergkulla.ax',
      validation: (rule) => rule.required().email(),
    }),
    defineField({
      name: 'googleMapsEmbedUrl',
      title: 'Google Maps Embed URL',
      type: 'url',
      description: 'URL från Google Maps embed-kod (src attributet)',
      initialValue: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1968.2847472006456!2d20.090654315655517!3d60.34333045!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x468aedf99b34d645%3A0x1cef5cf6d99d381e!2sBergkula%20Stiftelse!5e0!3m2!1ssv!2sfi!4v1708701234567!5m2!1ssv!2sfi',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'copyrightText',
      title: 'Copyright text',
      type: 'string',
      description: 'Årtal läggs till automatiskt',
      initialValue: 'Bergkullastiftelsen. Alla rättigheter förbehållna.',
      validation: (rule) => rule.required(),
    }),
  ],
})
