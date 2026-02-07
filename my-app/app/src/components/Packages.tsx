import { ArrowRight } from "lucide-react";
import { Suspense } from "react";

type Package = {
  tier: string;
  videographers: number;
  photographers: number;
  coverage: string[];
  access: string;
  delivery: string;
  timeframe: string;
  color: string;
  link: string;
};

export default function Packages() {
  const packages = [
    {
      tier: "BRONZE",
      videographers: 1,
      photographers: 1,
      coverage: ["Full Video", "Highlight"],
      access: "All Access Photo",
      delivery: "Downloadable customized online link",
      timeframe: "7–10 Days",
      link: "#",
      color: "#CD7F32",
    },
    {
      tier: "SILVER",
      videographers: 2,
      photographers: 1,
      coverage: ["Full Video", "Highlight"],
      access: "All Access Photo",
      delivery: "Downloadable customized online link",
      timeframe: "7–12 Days",
      link: "#",
      color: "#C0C0C0",
    },
    {
      tier: "GOLD",
      videographers: 3,
      photographers: 2,
      coverage: ["Full Video", "Highlight"],
      access: "All Access Photo",
      delivery: "Downloadable customized online link",
      timeframe: "7–15 Days",
      link: "#",
      color: "#FFD700",
    },
  ];

  // const extras = [
  //   {
  //     id: "highlight_trailer",
  //     title: "Theatrical Movie Trailer",
  //     description: "Highlight video for web sharing with friends and family",
  //     pricing: {
  //       type: "flat",
  //       amount: 500,
  //       currency: "USD",
  //     },
  //   },
  //   {
  //     id: "rock_the_dress",
  //     title: "Rock the Dress / Rehearsal Dinner",
  //     description: "Up to 3 hours, one location",
  //     pricing: {
  //       type: "flat",
  //       amount: 1000,
  //       currency: "USD",
  //     },
  //   },
  //   {
  //     id: "bluray_delivery",
  //     title: "Blu-ray Disc Production",
  //     description: "Production delivered on Blu-ray disc",
  //     pricing: {
  //       type: "tiered",
  //       amount: 500,
  //       additionalUnitAmount: 50,
  //       unit: "disc",
  //       currency: "USD",
  //     },
  //   },
  //   {
  //     id: "raw_footage_hd",
  //     title: "Raw Footage in HD",
  //     description: "Delivered on external hard drive or Blu-ray discs",
  //     pricing: {
  //       type: "flat",
  //       amount: 600,
  //       currency: "USD",
  //     },
  //   },
  //   {
  //     id: "additional_dvd",
  //     title: "Additional DVD",
  //     description: "Custom-designed DVD",
  //     pricing: {
  //       type: "flat",
  //       amount: 400,
  //       currency: "USD",
  //     },
  //   },
  //   {
  //     id: "overtime",
  //     title: "Overtime",
  //     description: "Per hour, includes post-production and editing",
  //     pricing: {
  //       type: "hourly",
  //       amount: 400,
  //       currency: "USD",
  //     },
  //   },
  //   {
  //     id: "additional_cinematographer",
  //     title: "Additional Cinematographer",
  //     description: "Recommended for larger events or more guests",
  //     pricing: {
  //       type: "flat",
  //       amount: 500,
  //       currency: "USD",
  //     },
  //   },
  //   {
  //     id: "aerial_drone",
  //     title: "Aerial Drone",
  //     description: "HD camera for epic location footage",
  //     pricing: {
  //       type: "flat",
  //       amount: 500,
  //       currency: "USD",
  //     },
  //   },
  //   {
  //     id: "camera_crane",
  //     title: "Camera Crane",
  //     description: "Includes one operator",
  //     pricing: {
  //       type: "flat",
  //       amount: 1000,
  //       currency: "USD",
  //     },
  //   },
  //   {
  //     id: "full_ceremony_edit",
  //     title: "Full Ceremony Edit",
  //     description: "Online delivery, 60 minutes plus",
  //     pricing: {
  //       type: "flat",
  //       amount: 500,
  //       currency: "USD",
  //     },
  //   },
  //   {
  //     id: "online_dvd_menu",
  //     title: "Online DVD Menu",
  //     description: "Feature film or trailer for web sharing",
  //     pricing: {
  //       type: "flat",
  //       amount: 500,
  //       currency: "USD",
  //     },
  //   },
  //   {
  //     id: "usb_delivery",
  //     title: "USB Delivery",
  //     description: "Custom-designed case",
  //     pricing: {
  //       type: "flat",
  //       amount: 700,
  //       currency: "USD",
  //     },
  //   },
  //   {
  //     id: "international_travel",
  //     title: "International Travel Fee",
  //     description: null,
  //     pricing: {
  //       type: "flat",
  //       amount: 2000,
  //       currency: "USD",
  //     },
  //   },
  //   {
  //     id: "domestic_travel",
  //     title: "Domestic Travel Fee",
  //     description: "Select states only",
  //     pricing: {
  //       type: "conditional",
  //       amount: null,
  //       currency: "USD",
  //       note: "May apply",
  //     },
  //   },
  // ];

  function darkenHex(hex: string, amount = 0.15) {
    const num = parseInt(hex.replace("#", ""), 16);
    const r = Math.max(0, Math.floor((num >> 16) * (1 - amount)));
    const g = Math.max(0, Math.floor(((num >> 8) & 0xff) * (1 - amount)));
    const b = Math.max(0, Math.floor((num & 0xff) * (1 - amount)));

    return `rgb(${r}, ${g}, ${b})`;
  }

  return (
    <Suspense fallback={<div>Loading Packages...</div>}>
    <div
      className="py-20 px-16 md:px-20 border-y border-gray-400"
      id="Packages"
    >
      <div className="w-full flex flex-col gap-5">
        <h1 className="text-3xl text-white">Packages</h1>
        {packages.map((_package: Package, index) => (
          <div
            key={index}
            className={`flex justify-between border-t-16 bg-white p-5 w-full ${
              _package.tier === `BRONZE` && `border-[${_package.color}]`
            } ${_package.tier === `SILVER` && `border-[${_package.color}]`} ${
              _package.tier === `GOLD` && `border-[${_package.color}]`
            }`}
            style={{ borderTopColor: _package.color }}
          >
            <div className="w-fit flex flex-col gap-3">
              <h1 className="text-xl font-bold">{_package.tier}</h1>
              <div>
                <span className="font-bold">{_package.photographers}</span>{" "}
                Photographer{_package.photographers > 1 && "s"} |{" "}
                <span className="font-bold">{_package.videographers}</span>{" "}
                Videographer{_package.videographers > 1 && "s"} |{" "}
                <span className="font-bold">
                  {_package.coverage[0]} {" & "} {_package.coverage[1]}
                </span>{" "}
                | {_package.access} |
              </div>
              <div>
                <span className="font-bold">Delivery: {_package.delivery}</span>{" "}
                |
              </div>
              {/* <p>
                <span className="font-bold">{_package.timeframe}</span>{" "}
                Deliverable Timeframe
              </p> */}
            </div>
            <div className="w-fit self-end">
              <a
                href={`/photography/package-form?package=${_package.tier}`}
                className={`flex items-center gap-5 px-4 py-2 bg-[var(--pkg-color)]
                hover:bg-[var(--pkg-color-hover)] text-white group`}
                style={
                  {
                    "--pkg-color": _package.color,
                    "--pkg-color-hover": darkenHex(_package.color, 0.2), // darker via alpha
                  } as React.CSSProperties
                }
              >
                BOOK CONSULTATION FOR MORE INFO.
                <ArrowRight
                  size={20}
                  className="group-hover:transform group-hover:translate-x-3 transition-transform duration-300"
                />
              </a>
            </div>
          </div>
        ))}
        <div className="flex text-white w-full mt-10">
            {/* <h1 className="text-xl font-bold">FOR CUSTOM PACKAGES</h1> */}
            <a
                href={`/photography/package-form?package=custom`}
                className={`flex items-center gap-5 px-4 py-2 bg-gray-800
                hover:bg-gray-900 text-white group`}
              >
                FOR CUSTOM PACKAGES
                <ArrowRight
                  size={20}
                  className="group-hover:transform group-hover:translate-x-3 transition-transform duration-300"
                />
              </a>
        </div>
      </div>
    </div>
    </Suspense>
  );
}
