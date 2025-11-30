"use client";

import Link from "next/link";
import { useUserAuth } from "./_utils/auth-context";
import { useRouter } from "next/navigation";
import {use, useEffect} from "react";

export default function Page() {
  const router = useRouter();
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();
useEffect(() => {
    if (user) {
      router.push("/week-10/shopping-list");
    }
  }, [user, router]);

  return (
    <main className="p-8">
      {!user && (
        <button onClick={gitHubSignIn}>
          Sign in with GitHub
        </button>
      )}

      {user && (
        <div>
          <p>
            Welcome, {user.displayName} ({user.email})
          </p>

          <button onClick={firebaseSignOut}>
            Sign Out
          </button>

          <div className="mt-4">
            <Link href="/week-10/shopping-list" className="underline">
              Go to Shopping List
            </Link>
          </div>
        </div>
      )}
    </main>
  );
}