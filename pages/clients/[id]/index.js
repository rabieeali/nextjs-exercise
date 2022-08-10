import { useRouter } from "next/router";
export default function ClientIdPage() {
const router = useRouter()
  return <div>
    <h1>{`Client Id Page ${Object.values(router.query)}`}</h1>
  </div>;
}
