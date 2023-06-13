import { useRouter } from "next/router";

const ProjectPage = () => {
  const router = useRouter();

  console.log(router.pathname);
  console.log(router);
  return <div>The Portfolio Project Page</div>;
};

export default ProjectPage;
