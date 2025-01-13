"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const SessionLogin = () => {
  const [session, setSession] = useState(null);

  useEffect(() => {
    const fetchSession = async () => {
      try {
        const response = await fetch("/api/auth");
        if (response.ok) {
          const data = await response.json();
          console.log("data fatch:", data);
          setSession(data.session);
        }
      } catch (error) {
        console.error("Failed to fetch session:", error);
      }
    };

    fetchSession();
  }, []);

  return (
    <div>
      {session ? (
        <Link href="/belanja">Beli</Link>
      ) : (
        <Link href="/login">Sign in</Link>
      )}
    </div>
  );
};

export default SessionLogin;
