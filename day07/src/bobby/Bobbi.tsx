import { useState } from "react";
import Icon, { CheckProps } from "./Icon";

type TermType =
  | "privacy"
  | "service"
  | "collection"
  | "age"
  | "collectionOption"
  | "reception";

type HasTerm = { eng: TermType };
type CheckBoxType = Omit<CheckProps, "click"> & HasTerm;

const Bobbi = () => {
  const [CheckBoxStates, setCheckBoxStates] = useState<CheckBoxType[]>([
    {
      eng: "privacy",
      textHelper: "개인정보처리방침",
      isNecessary: true,
      isChecked: false,
    },
    {
      eng: "service",
      textHelper: "서비스이용약관",
      isNecessary: true,
      isChecked: false,
    },
    {
      eng: "collection",
      textHelper: "서비스 개인정보 수집 이용 동의",
      isNecessary: true,
      isChecked: false,
    },
    {
      eng: "age",
      textHelper: "만 14세 이상임을 확인합니다.",
      isNecessary: true,
      isChecked: false,
    },
    {
      eng: "collectionOption",
      textHelper: "서비스 개인정보 수집 이용 동의",
      isNecessary: false,
      isChecked: false,
    },
    {
      eng: "reception",
      textHelper: "서비스 마케팅 정보 수신 동의",
      isNecessary: false,
      isChecked: false,
    },
  ]);

  const handleClick = (key: TermType) =>
    setCheckBoxStates((prev) =>
      prev.map((item) =>
        item.eng === key ? { ...item, isChecked: !item.isChecked } : item
      )
    );

  const isAllchecked = CheckBoxStates.filter((v) => v.isNecessary).every(
    (v) => v.isChecked
  );

  return (
    <div>
      {CheckBoxStates.map((v) => (
        <Icon {...v} click={() => handleClick(v.eng)} />
      ))}
      <button
        style={{ backgroundColor: isAllchecked ? "yellow" : "transparent" }}
      >
        확인
      </button>
    </div>
  );
};
export default Bobbi;
