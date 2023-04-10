import sanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

const isServer = typeof window === "undefined";
const process = isServer ? undefined : window.process;

const client = sanityClient({
  projectId: "ist1b074",
  dataset: "production",
  apiVersion: "2023-05-20",
  useCdn: true,
  token: process.env.NEXT_PUBLIC_SANITY_TOKEN,
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
