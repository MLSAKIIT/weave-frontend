"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";

export default function Home() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("http://localhost:3000/api/v1/auth/check-auth", { withCredentials: true }) 
      .then((res) => {
        if (res.data.authenticated) {
          router.push("/home"); 
        } else {
          router.push("/login"); 
        }
      })
      .catch((error) => {
        console.error("Error checking auth:", error);
        router.push("/login");
      })
      .finally(() => {
        setLoading(false); 
      });
  }, [router]);

  return <p>{loading ? "Checking authentication..." : "Redirecting..."}</p>;
}
