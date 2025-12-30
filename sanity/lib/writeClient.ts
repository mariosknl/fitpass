import { createClient } from "next-sanity";

import { apiVersion, dataset, projectId } from "../env";

export const writeClient = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false, // Set to false if statically generating pages, using ISR or tag-based revalidation
  token: process.env.SANITY_API_TOKEN,
});

// Ensure write client has token
if (!writeClient.config().token) {
  console.warn(
    "Sanity write client required SANITY_API_TOKEN environment variable"
  );
}
