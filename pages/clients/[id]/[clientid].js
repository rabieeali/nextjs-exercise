import { useRouter } from "next/router";
const SpecificClient = () => {
  const router = useRouter();
  console.log(Object.values(router.query));



  const projectNavigationHandler = () =>{
    // your logic
    router.push("/")
  }




  return (
    <div>
      <h1>{`Specific Client page ${Object.values(router.query).join(" ")}`}</h1>
      <button onClick={projectNavigationHandler}>Go to project A</button>
    </div>
  );
};

export default SpecificClient;
