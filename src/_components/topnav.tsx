import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";

export default function TopNav() {
    return (
      <nav className="flex w-full justify-between rounded-xl border-b-2 p-4 text-xl font-semibold">
        <div>Gallery</div>
        <div>
            <SignedOut>
                <SignInButton />
            </SignedOut>
            <SignedIn>
                <UserButton />
            </SignedIn>
        </div>
      </nav>
    );
  }