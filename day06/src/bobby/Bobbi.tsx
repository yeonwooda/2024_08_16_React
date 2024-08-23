import { useState } from "react";
import Icon from "./Icon";

const Bobbi = () => {
  const [isChecked, setIsChecked] = useState<boolean>(false);
  // 배열로 바꿔서 preve로 every 돌리기

  const click = () => setIsChecked((prev) => !prev);

  return (
    <div>
      <Icon
        click={click}
        isChecked={isChecked}
        isNecessary={true}
        textHelper="개인정보처리방침"
      />
      <Icon
        click={click}
        isChecked={isChecked}
        isNecessary={true}
        textHelper="서비스이용약관"
      />
      <Icon
        click={click}
        isChecked={isChecked}
        isNecessary={true}
        textHelper="서비스 개인정보 수집 이요 동의"
      />
      <Icon
        click={click}
        isChecked={isChecked}
        isNecessary={true}
        textHelper="만 14세 이상임을 확인합니다."
      />
      <Icon
        click={click}
        isChecked={isChecked}
        textHelper="서비스 개인정보 수집 이용 동의"
      />
      <Icon click={click} textHelper="서비스 마케팅 정보 수신 동의" />
      <button
        style={{ backgroundColor: isChecked ? "yellow" : "transparency" }}
      >
        확인
      </button>
    </div>
  );
};
export default Bobbi;
