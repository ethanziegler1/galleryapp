import { SignedIn, SignedOut } from "@clerk/nextjs";
import { db } from "~/server/db";

export const dynamic = "force-dynamic";

const images = await db.query.images.findMany({
  orderBy: (model, { desc }) => desc(model.id),
});

function Images() {
  return (
    <div className="flex flex-wrap">
      {images.map((image) => (
        <div key={image.id} className="g-4 flex w-48 flex-col p-4">
          <img src={image.url} />
          <div className="justify-between p-2 text-center text-xl font-bold">
            {image.name}
          </div>
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
