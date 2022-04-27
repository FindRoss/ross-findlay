import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import sanityClient from "../../client.js";
import BlockContent from "@sanity/block-content-to-react";
import imageUrlBuilder from "@sanity/image-url";
import serializers from "../../serializers.js";

import './SinglePost.css';

const builder = imageUrlBuilder(sanityClient);
function urlFor(source) {
  return builder.image(source);
}

function SinglePost() {
  const [postData, setPostData] = useState(null);
  const { slug } = useParams();

  useEffect(() => {
    sanityClient
      .fetch(
        `*[slug.current == $slug]{
          title,
          slug,
          excerpt,
          mainImage{
            asset->{
              _id,
              url
             }
           },
          body,
        "name": author->name,
       }`,
        { slug }
      )
      .then((data) => setPostData(data[0]))
      .catch(console.error);
  }, [slug]);

  if (!postData) return <div className="container mx-auto py-14">Loading...</div>;

  return (
    <div className="container mx-auto py-12">
      <div className="single--header">
        <h2 className="text-6xl font-bold text-slate-700">{postData.title}</h2>
        <p className="text-3xl text-slate-500 pt-6">{postData.excerpt}</p>
      </div>
      <img src={urlFor(postData.mainImage).width(1200).url()} alt={postData.title} className="pt-6 single--featured-image" />
      <div className="single--content">
        <BlockContent
          blocks={postData.body}
          projectId={sanityClient.clientConfig.projectId}
          dataset={sanityClient.clientConfig.dataset}
          serializers={serializers}
        />
      </div>
    </div>
  );
};

export default SinglePost;