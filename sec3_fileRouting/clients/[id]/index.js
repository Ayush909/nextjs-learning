import { useRouter } from "next/router";

const ClientPage = () => {
  const router = useRouter();

  console.log(router.query);

  function loadProjectHandler() {
    router.push("/clients/ayu/projectA");
  }
  return (
    <>
      <h1>Projects of a given client</h1>
      <button onClick={loadProjectHandler}>Load Project A</button>
    </>
  );
};

export default ClientPage;
