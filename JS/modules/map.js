export default function mapHandle(){

let map;

async function initMap() {
  // The location of Uluru
  const coordenadas = { lat:-27.65026458564333, lng:-48.51801614807748 };
  const { Map } = await google.maps.importLibrary("maps");
  const { AdvancedMarkerView } = await google.maps.importLibrary("marker");


  map = new Map(document.getElementById("mapa"), {
    zoom: 15,
    center: coordenadas,
    mapId: "DEMO_MAP_ID",
  });

  new google.maps.Marker({
    position: coordenadas,
    map,
    title: "Marcador",
  });
}

initMap();


}