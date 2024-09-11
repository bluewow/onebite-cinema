import { useRouter } from "next/router";

const Page = () => {
  const router = useRouter();
  const { id } = router.query;

  return <h1>{id} 영화 상세페이지</h1>;
};

export default Page;
