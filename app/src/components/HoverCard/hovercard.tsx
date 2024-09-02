"use client"
import { useAudio } from "../AudioContext";
import { HoverEffect } from "../ui/card-hover-effect";


export default function HoverCard() {
  const { playingIndices, handlePlayPauseClick, setPlayingIndices, masterVolume, setMasterVolume } = useAudio()

  return (
    <div className="max-w-[90rem] mx-auto px-8">
      <HoverEffect items={projects} playingIndices={playingIndices} handlePlayPauseClick={handlePlayPauseClick} masterVolume={masterVolume}  />
    </div>
  );
}
export const projects = [
  {
    title: "River",
    description:
      "A gentle murmur flows by, with soft splashes and a rhythmic, calming rush as water weaves through unseen paths. And doing things here and there and here and there",
    link: "./audio/river.mp3",
    src: "./images/river.webp"
  },
  {
    title: "Wind in the Trees",
    description:
      "A soft, rustling whisper sways through the air, leaves fluttering and branches gently creaking as the breeze dances through the trees.",
    link: "./audio/wind-in-trees.mp3",
    src: "./images/wind-in-trees.webp"
  },
  {
    title: "Ocean",
    description:
      "A rhythmic, endless whoosh of waves gently crashing and receding, mixed with the distant roar of the surf, creates a soothing, ever-present hum",
    link: "./audio/ocean.mp3",
    src: "./images/ocean.webp"
  },
  {
    title: "Jungle",
    description:
      "A lively symphony of chirps, rustles, and calls fills the air, with distant echoes of unseen creatures and the occasional rustling of leaves, creating a vibrant, layered soundscape.",
    link: "./audio/jungle.mp3",
    src: "./images/jungle.webp"
  },
  {
    title: "Fireplace",
    description:
      "A warm, crackling sound as flames dance and wood pops, accompanied by the gentle hiss of embers, creates a cozy, soothing ambiance.",
    link: "./audio/fireplace.mp3",
    src: "./images/fireplace.webp"
  },
  {
    title: "Rainfall",
    description:
      "A soft, steady patter as droplets tap against surfaces, sometimes swelling into a gentle roar, creating a calm, rhythmic lullaby.",
    link: "./audio/rainfall.mp3",
    src: "./images/rainfall.webp"
  },
  {
    title: "Forest at Night",
    description:
      "A quiet chorus of distant rustling leaves, soft chirps, and occasional hoots, wrapped in a deep, calming stillness under the night sky.",
    link: "./audio/forest-at-night.mp3",
    src: "./images/forest-at-night.webp"
  },
  {
    title: "Purring Cat",
    description:
      "A gentle, rhythmic vibration accompanied by a soft, continuous hum, exuding warmth and comfort with each steady breath.",
    link: "./audio/cat-purr.mp3",
    src: "./images/cat.webp"
  },
  {
    title: "Muted City",
    description:
      "A distant hum of traffic, occasional muffled voices, and the faint echo of movement, all blending into a subdued, ambient background.",
    link: "./audio/muted-city.mp3",
    src: "./images/muted-city.webp"
  },
  {
    title: "Fan",
    description:
      "A steady, low hum with a soft, repetitive whirring as blades cut through the air, creating a consistent, soothing drone.",
    link: "./audio/fan.mp3",
    src: "./images/fan.webp"
  },
  {
    title: "Creek",
    description:
      "A gentle babble of water flowing over rocks, with soft splashes and occasional gurgles, creating a peaceful, melodic sound.",
    link: "./audio/creek.mp3",
    src: "./images/creek.webp"
  },
  {
    title: "Campfire",
    description:
      "A crackling symphony of popping wood and soft hisses, with flames softly flickering and embers glowing, creating a warm, cozy atmosphere.",
    link: "./audio/campfire.mp3",
    src: "./images/campfire.webp"
  },
  {
    title: "Walking in Fall",
    description:
      "A crisp crunch with each step as leaves rustle and twigs snap underfoot, accompanied by the occasional whisper of a cool breeze.",
    link: "./audio/walking-in-fall.mp3",
    src: "./images/fall-leaves.webp"
  },
  {
    title: "Spacestation",
    description:
      "A low, constant hum of engines, punctuated by the faint beeps of control panels and the occasional soft hiss of air systems.",
    link: "./audio/spacestation.mp3",
    src: "./images/spaceship-v2.webp"
  },
  {
    title: "Coffee Shop",
    description:
      "A gentle buzz of conversation mixed with the clinking of cups, the occasional hiss of a steaming espresso machine, and soft background music, creating a cozy, lively ambiance.",
    link: "./audio/coffee-shop.mp3",
    src: "./images/coffee-shop.webp"
  },
  {
    title: "Keyboard",
    description:
      "A rhythmic series of clicks and taps, with occasional pauses and the soft clatter of keys being struck in quick succession.",
    link: "./audio/keyboard.mp3",
    src: "./images/keyboard.webp"
  },
];