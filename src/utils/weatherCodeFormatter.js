export const weatherCodeFormatter = (weatherCode) => {
  let imgSrc = "";
  if (weatherCode == 51 || weatherCode == 53 || weatherCode == 55)
    imgSrc = "/images/icon-drizzle.webp";
  else if (weatherCode == 45 || weatherCode == 48)
    imgSrc = "/images/icon-fog.webp";
  else if (weatherCode == 3) imgSrc = "/images/icon-overcast.webp";
  else if (weatherCode == 2) imgSrc = "/images/icon-partly-cloudy.webp";
  else if (weatherCode == 61 || weatherCode == 63 || weatherCode == 65)
    imgSrc = "/images/icon-rain.webp";
  else if (weatherCode == 85 || weatherCode == 86)
    imgSrc = "/images/icon-fog.webp";
  else if (weatherCode >= 95) imgSrc = "/images/icon-storm.webp";
  else imgSrc = "/images/icon-sunny.webp";

  return imgSrc;
};
