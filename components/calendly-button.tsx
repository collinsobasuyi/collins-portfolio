"use client";

type CalendlyButtonProps = {
  label?: string;
  className?: string;
};

export default function CalendlyButton({
  label = "Book a 15-min Strategy Call",
  className = "",
}: CalendlyButtonProps) {
  const handleOpenCalendly = () => {
    window.Calendly?.initPopupWidget?.({
      url: "https://calendly.com/collins-product-ai/15min?hide_event_type_details=1&text_color=111827&primary_color=0d896c",
    });
  };

  return (
    <button
      type="button"
      onClick={handleOpenCalendly}
      className={`inline-flex items-center justify-center rounded-2xl bg-[#0D896C] px-6 py-4 text-base font-medium text-white transition hover:opacity-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0D896C] focus-visible:ring-offset-2 ${className}`}
    >
      {label}
    </button>
  );
}