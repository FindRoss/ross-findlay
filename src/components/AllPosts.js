import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Content from './Content';
import sanityClient from "../client.js";
import imageUrlBuilder from "@sanity/image-url";

const builder = imageUrlBuilder(sanityClient);
function urlFor(source) {
  return builder.image(source);
}

function AllPosts() {
  const [allPostsData, setAllPosts] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "post"]{
          title,
          slug,
          mainImage{
            asset->{
              _id,
              url
             }
           },
        }`
      )
      .then((data) => setAllPosts(data))
      .catch(console.error);
  }, []);

  if (!allPostsData) return <div className="container mx-auto py-14">Loading...</div>;

  return (
    <Content>
      <div className="container mx-auto py-14">
        <h2 className="text-6xl font-bold text-slate-700">Articles</h2>
        <p className="text-3xl text-slate-500 mt-6">Guides and articles covering the topics I am learning about, use in projects, and interest me.</p>
        <div className="mt-16">
          {allPostsData &&
            allPostsData.map((post, index) => (
              <Link to={"/" + post.slug.current} key={post.slug.current}>
                <div className="p-4 rounded bg-slate-100 flex" key={index}>
                  <img src={urlFor(post.mainImage).width(200).url()} className="pr-4" alt="" />
                  <h2 className="text-3xl text-slate-700">{post.title}</h2>
                </div>
              </Link>
            ))}
        </div>
      </div>
    </Content>
  );
}

export default AllPosts;