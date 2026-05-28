(function () {
  var mapElem = document.getElementById("places-map");
  var dataElem = document.getElementById("places-map-data");

  if (!mapElem || !dataElem || !window.L) return;

  var places = [];
  try {
    places = JSON.parse(dataElem.textContent || "[]");
  } catch (error) {
    places = [];
  }

  if (!places.length) return;

  function placeText(place, key) {
    return place[key] || "";
  }

  mapElem.innerHTML = "";

  var map = L.map(mapElem, {
    attributionControl: true,
    minZoom: 2,
    scrollWheelZoom: true,
    touchZoom: true,
    worldCopyJump: true,
    zoomControl: false
  });

  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 19,
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
  }).addTo(map);

  var cityIcon = L.divIcon({
    className: "",
    html: '<div class="city-dot" title="City marker"></div>',
    iconSize: [14, 14],
    iconAnchor: [7, 7]
  });

  var markers = places.map(function (place) {
    var latlng = [Number(place.lat), Number(place.lng)];
    var marker = L.marker(latlng, { icon: cityIcon }).addTo(map);
    return { place: place, marker: marker, latlng: latlng };
  });

  function popupHtml(item) {
    return '<strong>' + placeText(item.place, "label") + '</strong><br><span>' + placeText(item.place, "note") + '</span>';
  }

  function refreshLanguage() {
    markers.forEach(function (item) {
      item.marker.bindPopup(popupHtml(item));
      item.marker.bindTooltip(placeText(item.place, "label"), {
        direction: "top",
        offset: [0, -9],
        opacity: 0.95
      });
    });
  }

  function updateDotScaleByZoom() {
    var zoom = map.getZoom();

    if (zoom <= 3) {
      mapElem.style.setProperty("--dot-size", "7px");
      mapElem.style.setProperty("--dot-border", "1px");
      mapElem.style.setProperty("--pulse-radius", "8px");
      return;
    }

    if (zoom <= 4) {
      mapElem.style.setProperty("--dot-size", "9px");
      mapElem.style.setProperty("--dot-border", "1.5px");
      mapElem.style.setProperty("--pulse-radius", "10px");
      return;
    }

    if (zoom <= 5) {
      mapElem.style.setProperty("--dot-size", "11px");
      mapElem.style.setProperty("--dot-border", "1.5px");
      mapElem.style.setProperty("--pulse-radius", "12px");
      return;
    }

    mapElem.style.setProperty("--dot-size", "14px");
    mapElem.style.setProperty("--dot-border", "2px");
    mapElem.style.setProperty("--pulse-radius", "14px");
  }

  refreshLanguage();

  var bounds = L.latLngBounds(markers.map(function (item) { return item.latlng; }));
  map.fitBounds(bounds, { padding: [24, 24], maxZoom: 5 });
  map.on("zoomend", updateDotScaleByZoom);
  updateDotScaleByZoom();

  window.addEventListener("site-language-change", refreshLanguage);
})();
