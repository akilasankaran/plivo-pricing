var map = AmCharts.makeChart("chartdiv", {
  type: "map",
  theme: "dark",
  projection: "mercator",
  panEventsEnabled: true,
  backgroundColor: "#ffffff",
  backgroundAlpha: 1,
  zoomControl: {
    zoomControlEnabled: true
  },
  dataProvider: {
    map: "worldHigh",
    getAreasFromMap: true,
    areas: [
      {
        id: "US",
        showAsSelected: true
      },
      {
        id: "IN",
        showAsSelected: true
      }
    ]
  },
  areasSettings: {
    selectedColor: "#2BB031",
    unSelectedColor: "#E8EAF1",
    selectable: true,
    color: "#E8EAF1",
    colorSolid: "#2BB031",
    outlineColor: "#ffffff",
    rollOverColor: "#BFE7C1",
    rollOverOutlineColor: "#000000"
  },
  /**
   * Add click event to track country selection/unselection
   */
  listeners: [
    {
      event: "init",
      method: function(e) {
        e.chart.selectedObject.areas[0].isAdded = e.chart.selectedObject.areas[1].isAdded = false;
        addCountryTag(e.chart.selectedObject.areas[0]);
        addCountryTag(e.chart.selectedObject.areas[1]);
      }
    },
    {
      event: "clickMapObject",
      method: function(e) {
        // Ignore any click not on area
        if (e.mapObject.objectType !== "MapArea") return;

        var area = e.mapObject;
        if (!area.hasOwnProperty("isAdded")) {
          area.isAdded = false;
        }
        // Toggle showAsSelected
        area.showAsSelected = !area.showAsSelected;
        if (area.isAdded === false) {
          addCountryTag(area);
        }
        if (area.showAsSelected === false) {
          removeCountryTag(area);
        }
        e.chart.returnInitialColor(area);
      }
    }
  ]
});

function addCountryTag(area) {
  let id = Math.random();
  let countryTagsList = document.querySelector(".country-tags");
  let newCountryTag = document.createElement("div");
  let closeTag = document.createElement("span");
  newCountryTag.classList.add("tag");
  newCountryTag.setAttribute("id", "country_tag");
  closeTag.setAttribute("id", id);
  newCountryTag.classList.add("tag");
  closeTag.classList.add("close-tag");
  newCountryTag.innerText = area.title;
  area.isAdded = true;
  newCountryTag.appendChild(closeTag);
  countryTagsList.appendChild(newCountryTag);
  document.getElementById(id).onclick = onCloseTag(area);
}
function removeCountryTag(area) {
  let countryTagsList = document.querySelectorAll(".tag");
  for (let i = 0; i < countryTagsList.length; i++) {
    if (area.title.includes(countryTagsList[i].innerText)) {
      countryTagsList[i].remove();
      area.isAdded = false;
    }
  }
}

function onCloseTag(area) {
  var closeTag = $(".close-tag");
  closeTag.on("click", function() {
    $(this)
      .parent()
      .hide();
    area.isAdded = false;
    area.showAsSelected = false;
  });
}
