
const ENV = "staging"; // or "production"

const CONFIG = {
  production: {
    redirectURL: "https://www.zameengeomatics.com/public/Marina_Interactive_Masterplan/",
  },
  staging: {
    redirectURL: "https://www.zameengeomatics.com/demos/marinaStaging/",
  },
};

const currentEnvConfig = CONFIG[ENV];
