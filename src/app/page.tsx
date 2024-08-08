import { SignedIn, SignedOut } from "@clerk/nextjs";
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

const images = await db.query.images.findMany({
  orderBy: (model, { desc }) => desc(model.id),
});

function Images() {
  return (
    <div className="flex flex-wrap">
      {[...mockImages].map((image, index) => (
        <div
          key={image.id + "-" + index}
          className="g-4 flex w-48 flex-col p-4"
        >
          <img src={image.url} />
          <div>{image.name}</div>
        </div>
      ))}
    </div>
  );
}
export default async function HomePage() {
  return (
    <main className="">
      <SignedOut>
        <div className="h-full w-full items-center p-40 text-center text-2xl">
          Please Sign In
        </div>
      </SignedOut>
      <SignedIn>
        <Images />
      </SignedIn>
    </main>
  );
}
