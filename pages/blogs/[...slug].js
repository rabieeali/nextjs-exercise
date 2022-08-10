import { useRouter } from "next/router";

export default function BlogsBySlug() {
  const router = useRouter();
  console.log(router.query);
  const paths = Object.values(router.query);
  return (
    <div>
      <h1>{`Blogs By Slug ${paths.map((p) => p.join(" / "))}`}</h1>
    </div>
  );
}
