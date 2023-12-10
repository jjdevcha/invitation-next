import React, { useEffect } from "react";

const Location = () => {
  useEffect(() => {
    const { kakao } = window;

    var mapContainer = document.getElementById("map"), // 지도를 표시할 div
      mapOption = {
        center: new kakao.maps.LatLng(37.59097000256393, 127.04356725498664), // 지도의 중심좌표
        level: 3, // 지도의 확대 레벨
      };

    var map = new kakao.maps.Map(mapContainer, mapOption);

    // 마커가 표시될 위치입니다
    var markerPosition = new kakao.maps.LatLng(
      37.59097000256393,
      127.04356725498664
    );

    // 마커를 생성합니다
    var marker = new kakao.maps.Marker({
      position: markerPosition,
    });

    // 마커가 지도 위에 표시되도록 설정합니다
    marker.setMap(map);

    var iwContent =
        '<div style="padding:3px;font-size:1rem;color:black">웨딩홀<br><a href="https://map.kakao.com/link/map/웨딩홀,37.59097000256393,127.04356725498664" style="color:black" target="_blank">큰지도보기</a> <a href="https://map.kakao.com/link/to/웨딩홀,37.59097000256393,127.04356725498664" style="color:black" target="_blank">길찾기</a></div>', // 인포윈도우에 표출될 내용으로 HTML 문자열이나 document element가 가능합니다
      iwPosition = new kakao.maps.LatLng(37.59097000256393, 127.04356725498664); //인포윈도우 표시 위치입니다

    // 인포윈도우를 생성합니다
    var infowindow = new kakao.maps.InfoWindow({
      position: iwPosition,
      content: iwContent,
    });

    // 마커 위에 인포윈도우를 표시합니다. 두번째 파라미터인 marker를 넣어주지 않으면 지도 위에 표시됩니다
    infowindow.open(map, marker);
  }, []);
  return (
    <div
      id="map"
      className="w-[90%] flex flex-col items-center py-12 space-y-8"
    >
      <h1>오시는 길</h1>
      <div id="map" className="w-full h-60 shadow-lg"></div>
    </div>
  );
};

export default Location;
