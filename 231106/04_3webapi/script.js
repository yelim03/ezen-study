// 카카오맵을 활용해서 우리의 위치를 파악해보자
//카카오앱을 활용해서 전국에 존재하는 캠핑장을 마커로 찍어보자
//https://github.com/public-apis/public-apis
//https://apis.map.kakao.com

const lat = 37.5025398;
const lng = 127.0248679;

let container = document.getElementById('map'); //지도를 담을 영역의 DOM 레퍼런스
let options = { //지도를 생성할 때 필요한 기본 옵션
	center: new kakao.maps.LatLng(lat, lng), //지도의 중심좌표.
	level: 3 //지도의 레벨(확대, 축소 정도)
};

let map = new kakao.maps.Map(container, options); //지도 생성 및 객체 리턴

// 마커를 생성합니다
let marker = new kakao.maps.Marker({
	position: markerPosition
});

// 마커가 지도 위에 표시되도록 설정합니다
marker.setMap(map);

let infowindow = new kakao.maps.Infowindow

//마커 클릭 시, 출력되는 이벤트 정의
kakao.maps.addListener(marker, "click", () => {
	infowindow.open(map,marker);
});

// 아래 코드는 지도 위의 마커를 제거하는 코드입니다
// marker.setMap(null);    