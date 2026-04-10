"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    Calendly?: {
      initBadgeWidget: (options: {
        url: string;
        text: string;
        color: string;
        textColor: string;
        branding: boolean;
      }) => void;
      initPopupWidget?: (options: {
        url: string;
      }) => void;
    };
  }
}

export default function CalendlyWidget() {
  useEffect(() => {
    const existingScript = document.querySelector(
      'script[src="https://assets.calendly.com/assets/external/widget.js"]'
    );
    const existingLink = document.querySelector(
      'link[href="https://assets.calendly.com/assets/external/widget.css"]'
    );

    if (!existingLink) {
      const link = document.createElement("link");
      link.href = "https://assets.calendly.com/assets/external/widget.css";
      link.rel = "stylesheet";
      document.head.appendChild(link);
    }

    const initCalendly = () => {
      if (window.Calendly) {
        window.Calendly.initBadgeWidget({
          url: "https://calendly.com/collins-product-ai/15min?hide_event_type_details=1&text_color=111827&primary_color=0d896c",
          text: "Book a 15-min Strategy Call Today",
          color: "#0d896c",
          textColor: "#ffffff",
          branding: true,
        });
      }
    };

    if (!existingScript) {
      const script = document.createElement("script");
      script.src = "https://assets.calendly.com/assets/external/widget.js";
      script.async = true;
      script.onload = initCalendly;
      document.body.appendChild(script);
    } else {
      initCalendly();
    }
  }, []);

  return null;
}