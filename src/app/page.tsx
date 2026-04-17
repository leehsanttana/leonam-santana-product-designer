import { redirect } from "next/navigation";

// This page only exists to redirect the root domain '/' to the default locale '/pt'
// During production, Cloudflare Pages _worker.js handles the advanced geo-redirect at the Edge.
export default function RootPage() {
  redirect("/pt");
}
