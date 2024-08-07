import { db } from "~/server/db";

export const dynamic = "force-dynamic";

const mockUrls = [
  "https://utfs.io/f/e315eb68-5d0e-4355-bc43-11c581ebe504-1ezq1.png",
  "https://utfs.io/f/27bb75ea-876d-40f8-8929-f11edb0baa90-g05lr3.png",
  "https://utfs.io/f/90405c57-72e5-4880-9c3b-b3c9b76c69cf-q9fct6.png",
  "https://utfs.io/f/3b34852b-b528-4116-b9ce-a41bb2d94b8f-dcijsb.png",
];

const mockImages = mockUrls.map((url, index) => ({
  id: index + 1,
  url,
}));

export default async function HomePage() {
  const posts = await db.query.posts.findMany();
  console.log(posts);

  return (
    <main className="">
      <div className="flex flex-wrap">
        {posts.map((post) => (
          <div key={post.id} className="g-4 w-48 p-4">
            {post.name}
          </div>
        ))}

        {[...mockImages, ...mockImages, ...mockImages].map((image, index) => (
          <div key={image.id + "-" + index} className="g-4 w-48 p-4">
            <img src={image.url} />
          </div>
        ))}
      </div>
    </main>
  );
}
