import { ImageResponse } from "next/og";

import { PortfolioSocialImage } from "@/lib/social-image";

export const size = {
  width: 1200,
  height: 630,
};
export const alt = "Ilshat — frontend / full-stack разработчик для сайтов и интерфейсов";
export const contentType = "image/png";

export default function TwitterImage() {
  return new ImageResponse(<PortfolioSocialImage />, size);
}
