// 하트 채우기
// 구독하기 <-> 구독 취소하기
// 비밀번호 보기

import { useState } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { CiBellOn } from "react-icons/ci";
import { CiBellOff } from "react-icons/ci";
import { FaRegEye } from "react-icons/fa";
import { FaRegEyeSlash } from "react-icons/fa";

const Heart = () => {
  const [like, setLike] = useState<boolean>(false);
  const [bell, setBell] = useState<boolean>(false);
  const [eye, setEye] = useState<boolean>(false);
  /* false? <FaHeart /> :<FaRegHeart/>*/
  return (
    <>
      {like ? (
        <FaHeart onClick={() => setLike(!like)} />
      ) : (
        <FaRegHeart onClick={() => setLike(!like)} />
      )}

      {bell ? (
        <CiBellOff onClick={() => setBell(!bell)} />
      ) : (
        <CiBellOn onClick={() => setBell(!bell)} />
      )}

      {eye ? (
        <FaRegEyeSlash onClick={() => setEye(!eye)} />
      ) : (
        <FaRegEye onClick={() => setEye(!eye)} />
      )}
    </>
  );
};
export default Heart;
