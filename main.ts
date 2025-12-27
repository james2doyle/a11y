import Alpine from "alpinejs";
import Color from "color";

type ContrastApp = {
  textColor: string;
  bgColor: string;
  fontSize: number;
  fontWeight: string;
  complianceLevel: string;
  copying: boolean;
  sampleText: string;
  contrastRatio: number;
  isLargeText: boolean;
  requiredRatio: number;
  passes: boolean;
  suggestedText: string;
  url: URL;
  updateUrl: () => void;
  copyUrl: () => void;
};

Alpine.data<ContrastApp, unknown[]>("contrastApp", () => ({
  textColor: "#747474",
  bgColor: "#eeeeee",
  fontSize: 16,
  fontWeight: "normal",
  complianceLevel: "AA",
  copying: false,
  sampleText: "Sample text to test readability.",

  init() {
    // Sync from URL if exists
    const params = new URLSearchParams(window.location.search);

    if (params.get("text")) {
      this.textColor = params.get("text");
    }

    if (params.get("bg")) {
      this.bgColor = params.get("bg");
    }

    if (params.get("size")) {
      this.fontSize = parseInt(params.get("size") || "16", 10);
    }

    if (params.get("weight")) {
      this.fontWeight = params.get("weight");
    }

    if (params.get("test")) {
      this.complianceLevel = params.get("test");
    }
  },

  get contrastRatio() {
    try {
      return Color(this.textColor).contrast(Color(this.bgColor));
    } catch (e) {
      console.error(e);

      return 1;
    }
  },

  get isLargeText() {
    const size = parseFloat(this.fontSize);

    return size >= 24 || (size >= 18.66 && this.fontWeight === "bold");
  },

  get requiredRatio() {
    if (this.complianceLevel === "AAA") {
      return this.isLargeText ? 4.5 : 7.0;
    }

    return this.isLargeText ? 3.0 : 4.5;
  },

  get passes() {
    return this.contrastRatio >= this.requiredRatio;
  },

  get suggestedText() {
    try {
      const txt = Color(this.textColor);
      const bg = Color(this.bgColor);

      // Move luminosity further away from background
      return bg.isLight() ? txt.darken(0.3).hex() : txt.lighten(0.3).hex();
    } catch (e) {
      console.error(e);

      return "#000000";
    }
  },

  get url() {
    const url = new URL(window.location.href);
    url.searchParams.set("text", this.textColor);
    url.searchParams.set("bg", this.bgColor);
    url.searchParams.set("size", this.fontSize);
    url.searchParams.set("weight", this.fontWeight);
    url.searchParams.set("test", this.complianceLevel);

    return url;
  },

  updateUrl() {
    window.history.replaceState({}, "", this.url);
  },

  copyUrl() {
    this.copying = true;

    navigator.clipboard.writeText(this.url.href).then(() => {
      setTimeout(() => {
        this.copying = false;
      }, 2000);
    });
  },
}));

Alpine.start();
