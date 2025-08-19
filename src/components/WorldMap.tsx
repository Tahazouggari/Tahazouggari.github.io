"use client";
import React from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  ZoomableGroup,
  Marker
} from "react-simple-maps";

// TopoJSON with numeric ISO country ids (world-atlas)
const geoUrl =
  "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

// Color only these countries (ISO-3166-1 numeric):
// Japan=392, Morocco=504, France=250, Belgium=56, Netherlands=528
const visitedIsoNumeric = new Set<number>([392, 504, 250, 56, 528]);

// Tuple type so Marker coords match [lng, lat]
type LngLat = [number, number];

type Label = {
  name: string;
  coordinates: LngLat;
  dx?: number;
  dy?: number;
};

// Label positions (capitals) with small offsets to reduce overlap
const labels: Label[] = [
  { name: "France",      coordinates: [  2.3522, 48.8566], dy: -12 },
  { name: "Belgium",     coordinates: [  4.3517, 50.8503], dy: -16, dx:  16 },
  { name: "Netherlands", coordinates: [  4.9041, 52.3676], dy: -18, dx: -16 },
  { name: "Morocco",     coordinates: [ -6.8498, 33.9716], dy: -12 },
  { name: "Japan",       coordinates: [139.6917, 35.6895], dy: -12 },
];

const COLORS = {
  visited: "#2563EB",       // vivid blue
  visitedHover: "#1D4ED8",
  default: "#EFF3F8",       // very light gray
  defaultHover: "#E5E7EB",
  stroke: "#C5CED8",
  label: "#111827"          // near-black
};

export const WorldMap: React.FC = () => (
  <div className="w-full h-[500px] border rounded-lg p-4 bg-white">
    <ComposableMap
      projection="geoMercator"
      projectionConfig={{ scale: 150 }}
      style={{ width: "100%", height: "100%" }}
    >
      <ZoomableGroup center={[10, 25]}>
        <Geographies geography={geoUrl}>
          {({ geographies }) =>
            geographies.map((geo) => {
              const isVisited = visitedIsoNumeric.has(Number(geo.id));
              return (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  fill={isVisited ? COLORS.visited : COLORS.default}
                  stroke={COLORS.stroke}
                  style={{
                    default: { outline: "none" },
                    hover: {
                      fill: isVisited ? COLORS.visitedHover : COLORS.defaultHover,
                      outline: "none"
                    },
                    pressed: { fill: COLORS.visitedHover, outline: "none" }
                  }}
                />
              );
            })
          }
        </Geographies>

        {/* Labels only (no pin icons) */}
        {labels.map(({ name, coordinates, dx = 0, dy = -12 }) => (
          <Marker key={name} coordinates={coordinates}>
            <text
              textAnchor="middle"
              x={dx}
              y={dy}
              style={{
                fontFamily: "system-ui, sans-serif",
                fontSize: 11,
                fontWeight: 700,
                fill: COLORS.label,
                stroke: "#FFFFFF",
                strokeWidth: 3,
                paintOrder: "stroke" // white halo under text for readability
              }}
            >
              {name}
            </text>
          </Marker>
        ))}
      </ZoomableGroup>
    </ComposableMap>
  </div>
);

export default WorldMap;
