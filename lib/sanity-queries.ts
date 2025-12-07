import { client } from '@/sanity/lib/client';

export async function getFooterData() {
  const data = await client.fetch(
    `*[_type == "footer"][0]{
      companyName,
      addressLine1,
      addressLine2,
      googleMapsEmbedUrl,
      copyrightText
    }`,
    {},
    { next: { revalidate: 0 } }
  );
  return data;
}

export async function getStiftelsenData() {
  const data = await client.fetch(
    `*[_type == "stiftelsensida"][0]{
      omStiftelsen,
      ekonomi,
      stipendier,
      videos,
      navigation
    }`,
    {},
    { next: { revalidate: 0 } }
  );
  return data;
}
