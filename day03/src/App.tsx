// ctrl + w : 영역선택
// alt + j : 같은 단어 선택

import Button from "./Button/Button";

// ctrl + alt + L : 라인 정리
function App() {
  return (
    <div>
      <Button backgroundColor="Primary" borderRadius="Hard" />
      <Button backgroundColor="Hover" borderRadius="Smooth" />
      <Button backgroundColor="Primary" borderRadius="Circle" />
    </div>
  );
}

export default App;
