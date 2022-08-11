import { useRouter } from "next/router";
export default function ClientIdPage() {
  const router = useRouter();
  const clickHandler = () => {
    router.push({
      pathname: "/clients/[id]/[projectid]",
      query: { id: 1, projectid: "a" },
    });
  };
  return (
    <div>
      <h1>{`Client Id Page ${Object.values(router.query)}`}</h1>
      <button onClick={clickHandler}>Go To Project A</button>
    </div>
  );
}
