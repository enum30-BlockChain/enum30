export { default as Candidate } from "./Candidate";
export { default as Voter } from "./Voter";

const MainLayout = () => {
  return (
    <>
      <div>메인페이지입니다.</div>
      <button>후보자등록페이지이동</button>
      <button>투표하로가기</button>
    </>
  );
};

export default MainLayout;