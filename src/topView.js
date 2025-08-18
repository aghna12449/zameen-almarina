let isTopView = false;

  const toggleView=() => {
  
 toggleTopView();
   
  }


const toggleTopView = () => {
  const krpano = globalKrpano();
  const currentScene = krpano.get("scene[get(xml.scene)].name");

  const zoneMapping = {
    "scene_c-zone_1": { scene: "scene_top_view_zone_01", img: "skin/icons/TopView/top_view_zone 01.jpg" },
    "scene_d-zone_2": { scene: "scene_top_view_zone_02", img: "skin/icons/TopView/top_view_zone 02.jpg" },
    "scene_e-zone_3": { scene: "scene_top_view_zone_03", img: "skin/icons/TopView/top_view_zone 03.jpg" },
    "scene_l_al_marina_mall_day_aerial": { scene: "scene_top_view_zone_04", img: "skin/icons/TopView/top_view_zone 04.jpg" },
    "scene_i-building_2": { scene: "scene_top_view_zone_05", img: "skin/icons/TopView/top_view_zone 05.jpg" },
    "scene_h-building_1": { scene: "scene_top_view_zone_06", img: "skin/icons/TopView/top_view_zone_06.jpg" },
    "scene_f-zone_4": { scene: "scene_top_view_zone_07", img: "skin/icons/TopView/top_view_zone 07.jpg" },
    "scene_g-zone_5": { scene: "scene_top_view_zone_08", img: "skin/icons/TopView/top_view_zone 08.jpg" },
    "scene_k_zone_9": { scene: "scene_top_view_zone_09", img: "skin/icons/TopView/top_view_zone 09.jpg" }
  };

  const mapping = zoneMapping[currentScene] || null;
  if (!mapping) {
    console.warn("No top view found for scene:", currentScene);
    return;
  }

  // Open modal
  document.getElementById("topViewModal").style.display = "block";

  // ✅ Set image
  const imgElement = document.getElementById("topViewImage");
  if (imgElement) {
    imgElement.src = mapping.img;
  } else {
    console.error("No <img id='topViewImage'> found inside modal!");
  }



  // let krpanoModalInstance = document.getElementById("krpanoModal").getObject
  //   ? document.getElementById("krpanoModal").getObject()
  //   : null;

  // if (krpanoModalInstance) {
  //   // ✅ Already embedded → just load new scene
  //   krpanoModalInstance.call(`loadscene(${mapping.scene}, null, MERGE);`);
  // } else {
  //   // ✅ First time → embed pano
  //   embedpano({
  //     swf: "krpano.swf",
  //     xml: "tour.xml",
  //     target: "krpanoModal",
  //     html5: "always",
  //     mobilescale: 1.0,
  //     passQueryParameters: true,
  //     onready: function (instance) {
  //       instance.call(`loadscene(${mapping.scene}, null, MERGE);`);
  //     }
  //   });
  // }
};

  function closeTopViewModal() {
     document.getElementById("topViewModal").style.display = "none";

      document.getElementById("topViewImage").src = ""; // clear image
    // Remove krpano instance when closing
  //.  removepano("krpanoModal");
  }