const translations = {
  en: {
    erth: "ERTH",

    mapFilter: "Map Filter",
    showAll: "Show All",
    landmarks: "Landmarks",
    roads: "Roads",
    parks: "Parks",
    education: "Education",
    health: "Health",

    seaport: "King Abdul Aziz Seaport",
    imamUniversity: "Imam Abdulrahman Bin Faisal University",
    yamamahUniversity: "Al Yamamah University",
    aramcoStadium: "Aramco Stadium",
    kingFahdUniversity: "King Fahd University",
    expoCenter: "Dhahran Expo Exhibition Center",
    sevenSite: "Seven Site",

    // New translations

    searchFilter: "Search Filter",
    plotNumber: "Plot Number",

    available: "Available",
    statusSold: "Sold",
    statusReserved: "Reserved",

    placeholderPlotNumber: "Plot Number",

    areaRange: "Area Range",
    sqm: "sq m",
    search: "Search",
    reset: "Reset Filters",

    residential: "Residential",
    alMarina: "Al Marina",
    query: "Query",
    share: "Share",
    zone: "Zone",
    area: "Area",
    plot: "Plot",
    block: "Block",
    gc: "GC",
    north: "North",
    south: "South",
    east: "East",
    west: "West",
    mins: "Mins",
    linkCopied: "Link copied",
    availability: "Availability",

    tenDigits: "0xxxxxxxxx (Ten Digits)",
    queryform: "Query Form",

    firstName: "First Name",
    lastName: "Last Name",
    residency: "Place of Residency",
    saudi: "Saudi Arabia",
    phone: "Phone Number",
    email: "Email Address",
    nationality: "Nationality",
    preferredLang: "Preferred Language",
    submit: "Submit",

    phoneError: "Phone number must be 10 digits and start with 0",

    usage: "Usage",
    zone: "Zone",
    type: "Type",

    layer: "Layer",

    now: "Now",
    future: "Future",
    topImage: "Top Image"

    // Add more translations as needed
  },
  ar: {
    erth: "إرث",

    mapFilter: "تصفية",
    showAll: "إظهار الكل",
    landmarks: "أهم المعالم",
    roads: "الطرق",
    parks: "الحدائق",
    education: "المرافق التعليمية",

    health: "المرافق الصحية",
    seaport: "ميناء الملك عبد العزيز",

    imamUniversity: "جامعة الإمام عبد الرحمن بن فيصل",
    yamamahUniversity: "جامعة اليمامة",
    aramcoStadium: "ستاد أرامكو",
    kingFahdUniversity: "جامعة الملك فهد",
    expoCenter: "إكسبو الظهران",
    sevenSite: "موقع سفن",

    // New translations
    searchFilter: "التصفية",
    plotNumber: "رقم القطعة",
    available: "متاح",
    statusSold: "مباع",
    statusReserved: "محجوز",

    placeholderPlotNumber: "رقم القطعة",

    areaRange: "المساحة",
    sqm: "م٢",
    search: "بحث",
    reset: "إعادة ضبط",

    residential: "سكني",
    alMarina: "المارينا",
    query: "الحجز",
    share: "مشاركة",
    zone: "منطقة",
    area: "المساحة",
    plot: "القطعة",
    block: "بلوك",
    gc: "حد ",
    north: "شمال",
    south: "جنوب",
    east: "شرق",
    west: "غرب",
    mins: "دقائق",
    linkCopied: "تم النسخ",

    availability: "التوفر",

    queryform: " تسجيل الاهتمام",

    firstName: "الاسم الأول",
    lastName: "الاسم الأخير",
    residency: "مكان الإقامة",
    saudi: "المملكة العربية السعودية",
    tenDigits: "٠xxxxxxxxx (عشرة أرقام)",
    email: "البريد الإلكتروني",
    nationality: "الجنسية",
    preferredLang: "لغة التواصل",
    submit: "تقديم",

    phoneError: "0 يجب أن يتكون رقم الجوال من 10 أرقام ويبدأ بـ",
    usage: "الاستخدام",
    zone: "منطقة",
    type: "النوع",

    layer: "الطبقات",

    now: "الآن",
    future: "المستقبل",
    topImage: "الصورة العلوية"
  },
};

const switchLanguage = (lang) => {
  console.log("displayHorizontalSlider", lang)
  window.currentLanguage = lang; // Store the current language in a global variable

 
   setHotspotLanguage(lang);
  const t = translations[lang];
  document.getElementById("englishMapFilter").textContent = t.mapFilter;
  document.getElementById("englishShowAll").textContent = t.showAll;

  document.getElementById("englishLandmarks").textContent = t.landmarks;
  document.getElementById("englishRoads").textContent = t.roads;
  document.getElementById("englishParks").textContent = t.parks;

  document.getElementById("englishEducation").textContent = t.education;
  document.getElementById("englishHealth").textContent = t.health;

  /*
    Search Filters Translations
*/

  document.getElementById("englishSearchFilter").textContent = t.searchFilter;

  document.getElementById("englishResetFilters").textContent = t.reset;

  document.getElementById("plotNumber").placeholder = t.placeholderPlotNumber;

  document.getElementById("englishAvailable").textContent = t.available;
  document.getElementById("englishReserved").textContent = t.statusReserved;
  document.getElementById("englishSold").textContent = t.statusSold;

  document.getElementById("englishSquareMeter").textContent = t.sqm;

  document.getElementById("englishAreaRange").textContent = t.areaRange;
  document.getElementById("englishSearchBtn").textContent = t.search;

  /*
    House Card / Property Card Translations
*/
if (document.getElementById("toggleLabel")) {
    document.getElementById("toggleLabel").textContent = t.topImage;
  }

  if (document.getElementById("toggle-text")) {
    document.getElementById("toggle-text").textContent = t.layer;
  }

  if (document.getElementById("dynamicTitle")) {
    document.getElementById("dynamicTitle").textContent = setQueryDynamicType(
      document.getElementById("dynamicTitle").textContent
    );
  }

  if (document.getElementById("cardZone")) {
    document.getElementById("cardZone").textContent = t.zone;
  }

  if (document.getElementById("parkValue")) {
    document.getElementById("parkValue").textContent =
      amenitiesTime()?.[0]?.time || "--";
  }

  if (document.getElementById("mosqueValue")) {
    document.getElementById("mosqueValue").textContent =
      amenitiesTime()?.[1]?.time || "--";
  }

  if (document.getElementById("shoppingCartValue")) {
    document.getElementById("shoppingCartValue").textContent =
      amenitiesTime()?.[2]?.time || "--";
  }

  if (document.getElementById("pharmacyValue")) {
    document.getElementById("pharmacyValue").textContent =
      amenitiesTime()?.[3]?.time || "--";
  }

  if (document.getElementById("cardZoneNumber")) {
    document.getElementById("cardZoneNumber").textContent =
      toArabicDigitsConvert(
        document.getElementById("cardZoneNumber").textContent
      );
  }

  if (document.getElementById("englishHeading")) {
    document.getElementById("englishHeading").textContent = t.alMarina;
  }
  if (document.getElementById("englishQuery")) {
    document.getElementById("englishQuery").textContent = t.query;
  }

  if (document.getElementById("englishShare")) {
    document.getElementById("englishShare").textContent = t.share;
  }

  if (document.getElementById("copyTooltip")) {
    document.getElementById("copyTooltip").textContent = t.linkCopied;
  }

  if (document.getElementById("englishArea")) {
    document.getElementById("englishArea").textContent = t.area;
  }

  if (document.getElementById("englishBlockNumber")) {
    document.getElementById("englishBlockNumber").textContent = t.block;
  }

  if (document.getElementById("englishPlotNumber")) {
    document.getElementById("englishPlotNumber").textContent = t.plot;
  }

  if (document.getElementById("englishGC")) {
    document.getElementById("englishGC").textContent = t.gc;
  }

  if (document.getElementById("englishNorth")) {
    document.getElementById("englishNorth").textContent = t.north;
  }

  if (document.getElementById("englishSouth")) {
    document.getElementById("englishSouth").textContent = t.south;
  }

  if (document.getElementById("englishEast")) {
    document.getElementById("englishEast").textContent = t.east;
  }

  if (document.getElementById("englishWest")) {
    document.getElementById("englishWest").textContent = t.west;
  }

  if (document.getElementById("englishTotalAreaDigit")) {
    document.getElementById("englishTotalAreaDigit").textContent =
      toArabicDigitsConvert(
        document.getElementById("englishTotalAreaDigit").textContent
      );
  }

  if (document.getElementById("englishPlotDigit")) {
    document.getElementById("englishPlotDigit").textContent =
      toArabicDigitsConvert(
        document.getElementById("englishPlotDigit").textContent
      );
    document.getElementById("englishBlockNumberDigit").textContent =
      toArabicDigitsConvert(
        document.getElementById("englishBlockNumberDigit").textContent
      );

    document.getElementById("englishGCDigit").textContent =
      toArabicDigitsConvert(
        document.getElementById("englishGCDigit").textContent
      );

    document.getElementById("englishNorthNumber").textContent =
      toArabicDigitsConvert(
        document.getElementById("englishNorthNumber").textContent
      );

    document.getElementById("englishSouthNumber").textContent =
      toArabicDigitsConvert(
        document.getElementById("englishSouthNumber").textContent
      );

    document.getElementById("englishEastNumber").textContent =
      toArabicDigitsConvert(
        document.getElementById("englishEastNumber").textContent
      );

    document.getElementById("englishWestNumber").textContent =
      toArabicDigitsConvert(
        document.getElementById("englishWestNumber").textContent
      );
  }
  
  

  /**
   * Horizontal Slider
   *
   */

  document.querySelectorAll(".slider-plot-number").forEach((el) => {
    el.textContent = toArabicDigitsConvert(el.textContent);
  });

  document.querySelectorAll(".slider-total_area").forEach((el) => {
    el.textContent = toArabicDigitsConvert(el.textContent);
  });

  document.querySelectorAll(".slider-status").forEach((el) => {
    el.textContent = setSliderDynamicStatus(el.textContent);
  });

  document.querySelectorAll(".top-label-box").forEach((el) => {
    el.textContent = setQueryDynamicType(el.textContent);
  });

  //

  document.querySelectorAll(".slider-plot-label").forEach((el) => {
    el.textContent = t.plot;
  });

  document.querySelectorAll(".slider-area-label").forEach((el) => {
    el.textContent = t.area;
  });

  document.querySelectorAll(".slider-availability-label").forEach((el) => {
    el.textContent = t.availability; // or t.availability if that's your key
  });

  /*
   * Contact Form Translations
   */

  if (document.getElementById("englishQueryForm")) {
    document.getElementById("englishQueryForm").textContent = t.queryform;
  }

  if (document.getElementById("firstName")) {
    setFormDirection();
    document.getElementById("firstName").placeholder = t.firstName;

    document.getElementById("lastName").placeholder = t.lastName;

    document.getElementById("placeOfResidency").placeholder = t.residency;
    document.getElementById("phoneNumber").placeholder = t.tenDigits;

    document.getElementById("emailAddress").placeholder = t.email;
    document.getElementById("nationality").placeholder = t.nationality;
    document.getElementById("preferredLanguage").placeholder = t.preferredLang;
    document.getElementById("englishSubmit").textContent = t.submit;
    document.getElementById("phoneError").textContent = t.phoneError;

    if (document.getElementById("queryBlock")) {
      document.getElementById("queryBlock").textContent = t.block;
    }

    if (document.getElementById("queryPlot")) {
      document.getElementById("queryPlot").textContent = t.plot;
    }

    if (document.getElementById("sideNorth")) {
      document.getElementById("sideNorth").textContent = t.north;
      document.getElementById("sideSouth").textContent = t.south;
      document.getElementById("sideEast").textContent = t.east;
      document.getElementById("sideWest").textContent = t.west;
    }

    if (document.getElementById("queryTotalArea")) {
      document.getElementById("queryTotalArea").textContent = t.area;
      document.getElementById("queryType").textContent = t.type;
      document.getElementById("queryUsage").textContent = t.usage;

      document.getElementById("queryZone").textContent = t.zone;
      document.getElementById("queryZoneNumber").textContent =
        toArabicDigitsConvert(
          document.getElementById("queryZoneNumber").textContent
        );

      document.getElementById("queryBlockNumber").textContent =
        toArabicDigitsConvert(
          document.getElementById("queryBlockNumber").textContent
        );

      document.getElementById("queryPlotNumber").textContent =
        toArabicDigitsConvert(
          document.getElementById("queryPlotNumber").textContent
        );

      document.getElementById("queryTotalAreaNumber").textContent =
        toArabicDigitsConvert(
          document.getElementById("queryTotalAreaNumber").textContent
        );

      document.querySelectorAll(".queryDirections").forEach((el) => {
        el.textContent = toArabicDigitsConvert(el.textContent);
      });

      document.getElementById("querySetDynamicType").textContent =
        setQueryDynamicType(
          document.getElementById("querySetDynamicType").textContent
        );
    }

    //
    //Now and Future

    if (document.getElementById("englishNow")) {
      document.getElementById("englishNow").textContent = t.now;
    }
    if (document.getElementById("englishFuture")) {
      document.getElementById("englishFuture").textContent = t.future;
    }
  }

  //

  // englishResetFilters

  // Optional: change direction to RTL for Arabic
  //  document.body.dir = lang === 'ar' ? 'rtl' : 'ltr';
};

const toArabicDigitsConvert = (num) => {


  const englishDigits = "0123456789";
  const arabicDigits = "٠١٢٣٤٥٦٧٨٩";

  const isEnglish = () => window.currentLanguage === "en";

  if (isEnglish()) {
    // Convert Arabic → English
    return (
      num
        ?.toString()
        .replace(/[٠-٩]/g, (d) => englishDigits[arabicDigits.indexOf(d)]) || ""
    );
  } else {
    // Convert English → Arabic
    return (
      num
        ?.toString()
        .replace(/[0-9]/g, (d) => arabicDigits[englishDigits.indexOf(d)]) || ""
    );
  }
};

const setFormDirection = () => {
  const inputs = document.querySelectorAll(
    " #englishSearchFilter, #areaRangeContainer, #availabilityDropdown, #plotNumber, #firstName, #lastName,#placeOfResidency,#phoneNumber,#emailAddress,#nationality,#preferredLanguage"
  );
  const isArabic = window.currentLanguage === "ar";

  inputs.forEach((input) => {
    input.dir = isArabic ? "rtl" : "ltr";
  });
};

//  setSliderDynamicStatus
const setSliderDynamicStatus = (value) => {

  const status = {
    Available: "متاح",
    Sold: "مباع",
    Reserved: "محجوز",
  };

  const isEnglish = () => window.currentLanguage === "en";

  if (isEnglish()) {
    // If UI is English, make sure output is in English
    const reverseTypes = Object.fromEntries(
      Object.entries(status).map(([en, ar]) => [ar, en])
    );
    return reverseTypes[value] || value;
  } else {
    // If UI is Arabic, output Arabic
    // Clean spaces and normalize casing
    const cleanType = value.trim();

   
    return status[cleanType] || value;
  }
};

const setQueryDynamicType = (type) => {


  const types = {
    Residential: "سكني",
    commercial: "تجاري",
    "Mixed Use": "استخدام مختلط",
    "Eastern Municipality": "البلدية الشرقية",
    Palaces: "قصر",
    Towers: "برج",
  };
  const isEnglish = () => window.currentLanguage === "en";

  if (isEnglish()) {
    // If UI is English, make sure output is in English
    const reverseTypes = Object.fromEntries(
      Object.entries(types).map(([en, ar]) => [ar, en])
    );
    return reverseTypes[type] || type;
  } else {
    // If UI is Arabic, output Arabic
    // Clean spaces and normalize casing
    const cleanType = type.trim();

  
    return types[cleanType] || type;
  }
};

const setHotspotLanguage =(lang) => {

    console.log("lang", lang)
  const krpano = document.getElementById("krpanoSWFObject");

  if (!krpano) {
    console.error("Krpano viewer not found.");
    return;
  }
 // Your translations mapping
 




 


 if (lang === "ar") {
  // Loop through all hotspots
  const hotspotCount = krpano.get("hotspot.count");

  for (let i = 0; i < hotspotCount; i++) {
    const hsName = krpano.get(`hotspot[${i}].name`);
    console.log("hsName hsName", hsName)
   // Skip famousRoad hotspots unless manually triggered
    if (hsName.includes("hs_famousroad_")) continue;


    if (hsName.includes("_arabic")) {
        console.log("arabic", hsName)
         console.log("ARABICCCC")
      // Show Arabic hotspots
      
      krpano.set(`hotspot[${hsName}].visible`, true);
    } 
    else if (hsName.includes("_english")) {
      // Hide English hotspots
      
        console.log("_english", hsName)

      krpano.set(`hotspot[${hsName}].visible`, false);
    }
    else {
      // Leave all other hotspots unchanged

      
    }
  // 

  } 
 }else if (lang === "en"){
    const hotspotCount = krpano.get("hotspot.count");
 for (let i = 0; i < hotspotCount; i++) {
    const hsName = krpano.get(`hotspot[${i}].name`);

     // Skip famousRoad hotspots unless manually triggered
    if (hsName.includes("hs_famousroad_")) continue;

    if (hsName.includes("_english")) {
      console.log("ENGGGGGGGGGGGGGGGGGLISSSSSSSSSSSH")
     
      krpano.set(`hotspot[${hsName}].visible`, true);
    } 
    else if (hsName.includes("_arabic")) {
    
      krpano.set(`hotspot[${hsName}].visible`, false);
    }
    else {
      // Leave all other hotspots unchanged
    }
  

  }
  }
  //
}


const setFamousRoadLanguage =(lang) => {


const areRoadsEnabled = window.areRoadsEnabled
    console.log("lang", lang)
  const krpano = document.getElementById("krpanoSWFObject");

  if (!krpano) {
    console.error("Krpano viewer not found.");
    return;
  }
 // Your translations mapping
 




 


 if (lang === "ar" && areRoadsEnabled) {
  // Loop through all hotspots
  const hotspotCount = krpano.get("hotspot.count");

  for (let i = 0; i < hotspotCount; i++) {
    const hsName = krpano.get(`hotspot[${i}].name`).toLowerCase();
    console.log("hsName hsName", hsName)
 


    if (hsName.includes("hs_famousroad_") && hsName.includes("_arabic")) {
        console.log("arabic", hsName)
         console.log("setFamousRoadLanguage IF ARABIC")
      // Show Arabic hotspots
      krpano.set(`hotspot[${hsName}].visible`, true);
    } 
    else if (hsName.includes("hs_famousroad_") && hsName.includes("_english")) {
      // Hide English hotspots
      
        console.log("setFamousRoadLanguage ELSE", hsName)

      krpano.set(`hotspot[${hsName}].visible`, false);
    }
    else {
      // Leave all other hotspots unchanged
    }
  

  } 
 }else if (lang === "en" && areRoadsEnabled){
    const hotspotCount = krpano.get("hotspot.count");
 for (let i = 0; i < hotspotCount; i++) {
     const hsName = krpano.get(`hotspot[${i}].name`).toLowerCase();

    if (hsName.includes("hs_famousroad_") && hsName.includes("_english")) {
        console.log("setFamousRoadLanguage IF ENGLISH")
     
      krpano.set(`hotspot[${hsName}].visible`, true);
    } 
    else if (hsName.includes("hs_famousroad_") && hsName.includes("_arabic")) {
       console.log("setFamousRoadLanguage IF ARABIC")
     
      krpano.set(`hotspot[${hsName}].visible`, false);
    }
    else {
      // Leave all other hotspots unchanged
    }
  

  }
  }
  //
}



const amenitiesTime = () => {
  const zoneAmenities = window.zoneAmenities;
  zoneKey = window.zoneKey; // e.g., 'ZONE 1'

  const lang = window.currentLanguage; // "en" or "ar"

  const amenities = zoneAmenities[zoneKey].map((a) => ({
    label: a.label[lang],
    time: a.time[lang],
  }));


  return amenities;
};

document.addEventListener("DOMContentLoaded", function () {


  switchLanguage("en");
});
