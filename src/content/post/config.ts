// config.ts
import { defineCollection } from 'astro:content';
import { cldAssetsLoader } from 'astro-cloudinary/loaders';

export const collections = {
  featuredProducts: defineCollection({
    loader: cldAssetsLoader({
      folder: 'ecommerce/edytasorensen',  // Folderstien i Cloudinary
    }),
  }),
};
