const lat = 37.5025398;
const lng = 127.0248679;

let mapContainer = document.querySelector("#map");
let mapOption = {
  center: new kakao.maps.LatLng(lat, lng),
  level: 14,
};
let map = new kakao.maps.Map(mapContainer, mapOption);

let clusterer = new kakao.maps.MarkerClusterer({
  map: map,
  averageCenter: true,
  minLevel: 10,
});

const url = "http://apis.data.go.kr/B551011/GoCamping/basedList?serviceKey=YTAiCXWXp3FPgjkkSNASsKFGIdYTj0AGuNQBMCW1FxHfj%2FLY2rgw8U75mPnLq1H%2BoI%2BLpoqJmBUxq4TkJZziIg%3D%3D&MobileOS=ETC7&MobileApp=appTest&_type=json&numOfRows=10&pageNo=1";

fetch(url)
  .then((result) => result.json())
  .then((json) => {
    const data = json.response.body.items.item;
    let markers = [];
    for (let i=0; i < data.length; i++) {
      let marker = new kakao.maps.Marker({
        map: map,
        position: new kakao.maps.LatLng(data[i].mapY, data[i].mapX),
      });

      markers.push(marker);

      let infowindow = new kakao.maps.InfoWindow({
        content: data[i].facltNm,
      });

      let makeOverListener = (map, marker, infowindow) => {
        return () => {
          infowindow.open(map, markers)
        };
      };

      let makeOutListener = (infowindow) => {
        return () => {
          infowindow.close();
        };
      };

      kakao.maps.event.addListener(marker, "mouseover", makeOverListener(map, marker, infowindow)
      );

      kakao.maps.event.addListener(marker, "mouseout", makeOutListener(infowindow)
      );
    }
    clusterer.addMarkers(markers);
  });


