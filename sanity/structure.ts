import type {StructureResolver} from 'sanity/structure'

// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure: StructureResolver = (S) =>
  S.list()
    .title('Content')
    .items([
      // Huvudsida singleton
      S.listItem()
        .title('Huvudsida')
        .child(
          S.document()
            .schemaType('huvudsida')
            .documentId('huvudsida')
        ),
      // Bergkulla sida singleton
      S.listItem()
        .title('Bergkulla Sida')
        .child(
          S.document()
            .schemaType('bergkullasida')
            .documentId('bergkullasida')
        ),
      // Stiftelsen sida singleton
      S.listItem()
        .title('Stiftelsesidan')
        .child(
          S.document()
            .schemaType('stiftelsensida')
            .documentId('stiftelsensida')
        ),
      // Footer singleton
      S.listItem()
        .title('Footer')
        .child(
          S.document()
            .schemaType('footer')
            .documentId('footer')
        ),
      // Divider
      S.divider(),
      // All other document types
      ...S.documentTypeListItems().filter(
        (item) => item.getId() !== 'huvudsida' && item.getId() !== 'bergkullasida' && item.getId() !== 'stiftelsensida' && item.getId() !== 'footer'
      ),
    ])
