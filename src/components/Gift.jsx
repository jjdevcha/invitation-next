import React, { useState } from "react";

const Gift = () => {
  const [buttonToggle, setButtonToggle] = useState(false);

  const copyToClipboard = (text) => {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        alert("Copied to clipboard: " + text);
      })
      .catch((error) => {
        console.error("Failed to copy text: " + error);
      });
  };

  const buttonHandler = () => {
    setButtonToggle((prev) => !prev);
  };
  return (
    <div className="w-[90%] bg-white shadow-lg flex flex-col items-center py-8 space-y-4">
      <h1>마음전하실 곳(계좌번호)</h1>
      <div className="bg-neutral-400 w-[90%] h-[1px]"></div>
      <button
        onClick={buttonHandler}
        className="bg-neutral-300 rounded-full py-1 px-3"
      >
        신부측 계좌번호 확인하기
      </button>
      {buttonToggle ? (
        <div className="flex flex-col w-[80%] space-y-4">
          <div className="flex flex-col space-y-2">
            <span>000(부)</span>
            <div className="border border-neutral-300 p-2 flex justify-between items-center">
              <span>00은행 ***-**-******</span>
              <button
                onClick={() => copyToClipboard("***-**-******")}
                className="bg-neutral-500 text-white rounded-full p-2 text-sm"
              >
                복사하기
              </button>
            </div>
          </div>
          <div className="flex flex-col space-y-2">
            <span>000(모)</span>
            <div className="border border-neutral-300 p-2 flex justify-between items-center">
              <span>00은행 ***-**-******</span>
              <button
                onClick={() => copyToClipboard("***-**-******")}
                className="bg-neutral-500 text-white rounded-full p-2 text-sm"
              >
                복사하기
              </button>
            </div>
          </div>
          <div className="flex flex-col space-y-2">
            <span>000</span>
            <div className="border border-neutral-300 p-2 flex justify-between items-center">
              <span>00은행 ***-**-******</span>
              <button
                onClick={() => copyToClipboard("***-**-******")}
                className="bg-neutral-500 text-white rounded-full p-2 text-sm"
              >
                복사하기
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Gift;
