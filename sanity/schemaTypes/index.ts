import { type SchemaTypeDefinition } from 'sanity'
import { heroSectionType } from './heroSectionType'
import { bergkullaPageType } from './bergkullaPageType'
import { footerType } from './footerType'
import { stiftelsenPageType } from './stiftelsenPageType'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [heroSectionType, bergkullaPageType, footerType, stiftelsenPageType],
}
