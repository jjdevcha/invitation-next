import React from "react";

const Invite = () => {
  return (
    <div className="w-[90%] space-y-4 flex flex-col items-center py-8">
      <h1>초대합니다</h1>
      <p>
        1800일 동안 지켜온 소중한 인연, 결국 사랑의 결실을 맺게 되었습니다
        결혼이 사랑의 종착점이 아니듯이 행복한 오늘이 인생에 있어 결코 전부가
        아님을 알기에 여러분을 저희 언약의 증인으로 초대하고자 합니다 소중한
        인연과 귀한 발걸음, 저희도 발맞추어 살아가겠습니다
      </p>
      <h2>000 ♥ 000</h2>
      <h2>000 · 000 의 장녀 000</h2>
      <h2>000 · 000 의 장남 000</h2>
      <div className="flex justify-center items-center gap-2 overflow-hidden">
        <img className="w-1/2" src="/images/6.jpg" />
        <img className="w-1/2" src="/images/7.jpg" />
      </div>
    </div>
  );
};

export default Invite;
