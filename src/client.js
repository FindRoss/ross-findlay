import sanityClient from "@sanity/client";

export default sanityClient({
  projectId: "1to9z062", // find this at manage.sanity.io or in your sanity.json
  dataset: "production", // this is from those question during 'sanity init'
  // useCdn: true,
  apiVersion: '2021-08-31', // use a UTC date string
  useCdn: true

});