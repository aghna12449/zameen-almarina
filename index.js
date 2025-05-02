class AlMarinaViewer {
    constructor(krpanoId = "krpanoSWFObject") {
      this.krpanoId = krpanoId;
      this.krpano = null;
      this.breadcrumbTrail = [
        { scene: "scene_AL_MARINA_aerial", title: "Al Marina", icon: "home" },
      ];
      this.sceneTitleMap = {
        scene_AL_MARINA_aerial: { title: "Al Marina", icon: "home" },
        scene_zone_2: { title: "Zone 2", icon: "whatshot" },
        scene_zone_4: { title: "Zone 4", icon: "grain" },
        scene_zone_5: { title: "Zone 5", icon: "place" },
      };
  
      this.toggleState = false;
      this.toggleColorOn = false;
    }
  
    init() {
      embedpano({
        xml: "tour.xml",
        target: "pano",
        html5: "only",
        mobilescale: 1.0,
        passQueryParameters: "startscene,startlookat",
      });
  
      document.addEventListener("DOMContentLoaded", () => {
        this.krpano = document.getElementById(this.krpanoId);
        this.renderBreadcrumbs();
      });
    }
  
    async fetchData() {
      try {
        const res = await fetch("http://localhost:5000/api/getAlMarinaData");
        return await res.json();
      } catch (err) {
        console.error("Error fetching data:", err);
        return null;
      }
    }
  
    parseHotspots(xmlString) {
      const parser = new DOMParser();
      const xmlDoc = parser.parseFromString(`<root>${xmlString}</root>`, "text/xml");
      const hotspotElements = xmlDoc.getElementsByTagName("hotspot");
  
      return Array.from(hotspotElements).map((hotspot) => {
        const id = hotspot.getAttribute("name");
        const plot_number = hotspot.getAttribute("plot_number");
        const block_number = hotspot.getAttribute("block_number");
  
        const coordinates = Array.from(hotspot.getElementsByTagName("point")).map((point) => ({
          ath: parseFloat(point.getAttribute("ath")),
          atv: parseFloat(point.getAttribute("atv")),
        }));
  
        return { id, plot_number, block_number, coordinates };
      });
    }
  
    renderBreadcrumbs() {
      const wrapper = document.getElementById("breadcrumb-wrapper");
      if (!wrapper) return;
  
      wrapper.innerHTML = "";
  
      this.breadcrumbTrail.forEach((crumb, index) => {
        if (index !== 0) {
          const separator = document.createElement("span");
          separator.className = "breadcrumb-separator mui-breadcrumb-separator";
          separator.innerHTML = "&gt;";
          wrapper.appendChild(separator);
        }
  
        if (index !== this.breadcrumbTrail.length - 1) {
          const link = document.createElement("a");
          link.href = "#";
          link.className = "breadcrumb-link mui-breadcrumb-link";
          link.dataset.scene = crumb.scene;
          link.dataset.index = index;
          link.innerHTML = `<i class="material-icons mui-breadcrumb-icon">${crumb.icon}</i> ${crumb.title}`;
          wrapper.appendChild(link);
        } else {
          const current = document.createElement("span");
          current.className = "breadcrumb-current mui-breadcrumb-current";
          current.innerHTML = `<i class="material-icons mui-breadcrumb-icon">${crumb.icon}</i> ${crumb.title}`;
          wrapper.appendChild(current);
        }
      });
  
      this.attachBreadcrumbClickEvents();
    }
  
    attachBreadcrumbClickEvents() {
      document.querySelectorAll(".breadcrumb-link").forEach((link) => {
        link.addEventListener("click", (e) => {
          e.preventDefault();
          const sceneName = link.dataset.scene;
          const crumbIndex = parseInt(link.dataset.index);
          this.loadScene(sceneName, crumbIndex);
        });
      });
    }
  
    loadScene(sceneName, crumbIndex = null) {
      if (!this.krpano) return;
  
      this.krpano.call(`loadscene(${sceneName}, null, MERGE, BLEND(1))`);
  
      if (crumbIndex !== null) {
        this.breadcrumbTrail = this.breadcrumbTrail.slice(0, crumbIndex + 1);
      } else {
        const sceneInfo = this.sceneTitleMap[sceneName];
        if (sceneInfo) {
          this.breadcrumbTrail.push({
            scene: sceneName,
            title: sceneInfo.title,
            icon: sceneInfo.icon,
          });
        }
      }
  
      this.renderBreadcrumbs();
    }
  
    getRandomColor() {
      return "0x" + Math.floor(Math.random() * 16777215).toString(16).toUpperCase();
    }
  
    renderHotspots(houseData, response) {
      houseData.forEach((house) => {
        const hotspotName = `hs_${house.id}`;
        const color = this.getRandomColor();
        let hotspotXML = `<hotspot name="${hotspotName}" style="mypolygonalhotspotstylename">`;
  
        house.coordinates.forEach((point) => {
          hotspotXML += `<point ath="${point.ath}" atv="${point.atv}" />`;
        });
  
        hotspotXML += `</hotspot>`;
        this.krpano.call(`addhotspot(${hotspotName})`);
        this.krpano.call(`set(hotspot[${hotspotName}].fillcolor, ${color})`);
        this.krpano.call(
          `set(hotspot[${hotspotName}].onclick, js(showHouseDetails('${response}', '${house.plot_number}')))`
        );
      });
    }
  
    toggleHotspotColor(houseData, color1 = "0xFF0000", color2 = "0x00FF00") {
      this.toggleColorOn = !this.toggleColorOn;
      const selectedColor = this.toggleState ? color1 : color2;
  
      houseData.forEach((house) => {
        const hotspotName = `hs_${house.id}`;
        this.krpano.call(`set(hotspot[${hotspotName}].fillcolor, ${selectedColor})`);
      });
  
      this.toggleState = !this.toggleState;
    }
  
    async addZoneHotspots(sceneName, xmlData) {
      const data = await this.fetchData();
      const houseData = this.parseHotspots(xmlData);
  
      if (sceneName && this.krpano.get("xml.scene") === sceneName) {
        this.renderHotspots(houseData, data);
      }
    }
  }
  
  // Attach to the global window so it's accessible in the HTML
window.AlMarinaViewer = AlMarinaViewer;