import { createClient } from "next-sanity";

export const client = createClient({
  projectId: "kftu59fk",
  dataset: "production",
  apiVersion: "2024-01-01",
  useCdn: false,
});