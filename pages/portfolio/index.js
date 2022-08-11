import Link from "next/link";
import { useRouter } from "next/router";

const Portfolio = () => {
  const clients = [
    { id: "max", name: "Maximilian" },
    { id: "ali", name: "Ali" },
  ];
  const router = useRouter()

  const clickHandler =()=>{
    router.push("/")
  }
  return (
    <div>
      <h1>this is aportfolio page</h1>
      <ul>
        {clients.map((el) => (
          <li key={el.id}>
            {/* <Link href={`/clients/${el.id}`}>{el.name}</Link> */}
            {/* or */}
            <Link href={{ pathname: "/clients/[id]", query: { id: el.id } }}>
              {el.name}
            </Link>
          </li>
        ))}
      </ul>
          <button onClick={clickHandler}>go to project A</button>
    </div>
  );
};

export default Portfolio;
