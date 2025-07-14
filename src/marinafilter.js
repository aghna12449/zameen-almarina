   const marinaToggleFilterTheme = () => {
          const krpano = globalKrpano();
          const container = document.getElementById("showAllContainer");
          const toggle = document.getElementById("mapToggle");
          const filterButtons = document.querySelectorAll(".filter-button");

          toggle.classList.toggle("active");
          container.classList.toggle("all-active");

          const isActive = toggle.classList.contains("active");

          filterButtons.forEach((btn) => {
            btn.classList.toggle("brown-theme", isActive);
            if (!isActive) btn.classList.remove("active");

            // Reset all filter states to true if show all is active
    if (isActive) {
      const key = btn.dataset.filter;
      filterState[key] = true;
      btn.classList.add("active");
    }
          });

          if (!krpano) return;

          const currentScene = krpano.get("scene[get(xml.scene)].name");
          if (currentScene !== "scene_a-initial") return;

          // Define all categories and their counts
          const hotspotCategories = [
         
            { prefix: "hs_M_hospitals_", count: hospitalsCount  },
            { prefix: "hs_M_parks_", count: parksCount  },
            { prefix: "hs_M_education_", count: educationalCount  },
            { prefix: "hs_Landmark_", count: landmarkCount },
            { prefix: "hs_famousRoad_", count: famousRoadsCount },
            { prefix: "hs_ColorFulRoad_", count: colorFulRoads },

             { prefix: "hs_Label_", count: totalLabelsCount },

            
            // { prefix: "hs_PopUp_", count: popUpCount },
          ];




          hotspotCategories.forEach(({ prefix, count }) => {
  let shouldBeVisible;

  if (prefix === "hs_Label_") {
    // Always hide hs_Label_ regardless of toggle state
    shouldBeVisible = false;
  } else {
    // For all other categories, follow toggle state
    shouldBeVisible = isActive;
  }
  
  for (let i = 1; i <= popUpCount; i++) {
    krpano.set(`hotspot[${'hs_PopUp_'}${i}].visible`, false);
  }

   for (let i = 1; i <= totalLandMarkLines; i++) {
    krpano.set(`hotspot[${'hs_LandMarkLine_'}${i}].visible`, false);
  }

  for (let i = 1; i <= count; i++) {
    krpano.set(`hotspot[${prefix}${i}].visible`, shouldBeVisible);
  }
});



};