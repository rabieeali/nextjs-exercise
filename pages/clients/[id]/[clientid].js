import { useRouter } from "next/router";
const SpecificClient = () => {
  const router = useRouter();
  console.log(Object.values(router.query));
  return (
    <div>
      <h1>{`Specific Client page ${Object.values(router.query).join(" ")}`}</h1>
    </div>
  );
};

export default SpecificClient;
