import { createClient } from "@sanity/client";

const client = createClient({
  projectId: "k9bpxwhz",
  dataset: "production",
  useCdn: false,
  apiVersion: "2023-08-28",
});

export default client;
