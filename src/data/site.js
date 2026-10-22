// Everything the page says about the game: links, features, regions, screenshots. Change it here.

export const links = {
  steam: "https://store.steampowered.com/app/2321880/Spire_Horizon/",
  online: "https://sho.mendoka.com/",
  studio: "https://www.mendoka.com/",
  privacy: "https://mendoka.com/privacy-policy#spire-horizon",
  terms: "https://www.mendoka.com/terms-of-service",
  eula: "https://www.mendoka.com/spire-horizon-eula",
  email: "contact@mendoka.com",
};

export const socials = [
  { name: "Discord", url: "https://discord.gg/AmFFEHyHWq", icon: "discord" },
  { name: "YouTube", url: "https://www.youtube.com/@mendokasan", icon: "youtube" },
  { name: "X", url: "https://x.com/mendokasan", icon: "x" },
  { name: "Facebook", url: "https://www.facebook.com/people/Mendoka/100088861612335/", icon: "facebook" },
];

export const trailer = { id: "LxkN3GAXh7I", title: "Spire Horizon — Official Trailer" };

export const facts = [
  { value: "800", label: "unique weapons" },
  { value: "10", label: "classes" },
  { value: "80+", label: "skills per class" },
  { value: "1", label: "tower to conquer" },
];

// Each feature plays a short looping clip from the game.
export const features = [
  {
    title: "800 unique weapons",
    text: "Swords, hammers, scythes, spears and stranger things. Every region hides something new to swing.",
    clip: "weapons",
  },
  {
    title: "10 classes, 80+ skills each",
    text: "Pick a class, level up and unlock more than eighty skills to shape the way you fight.",
    clip: "combat",
  },
  {
    title: "Gather and craft",
    text: "Mine, farm and collect ingredients, then craft armor strong enough for the road ahead.",
    clip: "mining",
  },
  {
    title: "Monsters of every land",
    text: "Each region has its own creatures — from wild boars in the meadows to wyverns in the sky. Farm bosses for rare loot.",
    clip: "wyvern",
  },
  {
    title: "Soar on the wind",
    text: "With the blessing of the wind, glide from the highest cliffs and see Aetheria from above.",
    clip: "glide",
  },
  {
    title: "Friends and PvP",
    text: "Bring your friends into Aetheria, take on missions together — or settle things in a duel.",
    clip: "pvp",
  },
];

const shot = (n, alt) => ({ src: `/media/shots/sc${n}.jpg`, thumb: `/media/shots/sc${n}-thumb.jpg`, alt });

export const regions = [
  { name: "The Meadows", text: "Windmills, farms and rolling hills where every journey begins.", ...shot("34", "The meadow village") },
  { name: "The Blossom Temple", text: "Cherry trees and pagodas on the eastern hills.", ...shot("14", "The blossom temple") },
  { name: "The Desert", text: "Giant bones and red rock under a blazing sun.", ...shot("03", "Bones in the desert") },
  { name: "The Snowfields", text: "Snowmen, pine trees and a long, cold climb.", ...shot("01", "The snowfields") },
];

export const gallery = [
  shot("02", "Aetheria from above"),
  shot("09", "A cherry tree by the lake"),
  shot("11", "Ruins on the hill"),
  shot("22", "The watermill"),
  shot("07", "A lonely tower"),
  shot("27", "Pumpkin farm"),
  shot("16", "Temple gardens"),
  shot("50", "Skills in battle"),
];

export const postcards = Array.from({ length: 14 }, (_, i) => `/media/postcards/pc-${String(i + 1).padStart(2, "0")}.jpg`);
