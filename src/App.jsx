/* eslint  */
import React, { useEffect, useState } from "react";
// import ColofulMessage from "./components/ColorfulMessage.jsx";
import { ColorfulMessage } from "./components/ColorfulMessage.jsx";

const App = () => {
  console.log("App初期化");
  const [num, setNum] = useState(0);
  const [isVisibleWao, setIsVisibleWao] = useState(true);
  const [isBlue, setIsBlue] = useState(true);

  const toggleVisibilityButton = () => {
    setIsVisibleWao(!isVisibleWao);
  };

  const onClickButton = () => {
    setNum(num + 1);
  };

  const chnageColorButton = () => {
    setIsBlue(!setIsBlue);
  };

  useEffect(() => {
    console.log("useEffect!!");
    let t = isVisibleWao;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [num]);

  return (
    <>
      <h1 style={{ color: "red", background: "blue" }}>ほげ</h1>
      <ColorfulMessage color="red" message="お元気ですか？">
        本文
      </ColorfulMessage>
      <ColorfulMessage
        // color="{`{isBlue ? 'red' : 'red'}`}"
        message="お元気だよ"
      />
      <button onClick={onClickButton}>カウントアップボタン</button>
      <p>{num}</p>
      <button onClick={toggleVisibilityButton}>わおトグルボタン</button>
      {isVisibleWao && <p>わお</p>}

      <button onClick={chnageColorButton}>色変え</button>
    </>
  );
};

export default App;
