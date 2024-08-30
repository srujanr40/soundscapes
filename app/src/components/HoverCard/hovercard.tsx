"use client"
import { useAudio } from "../AudioContext";
import { HoverEffect } from "../ui/card-hover-effect";
import { getImage } from '../../utils/s3';

export async function getServerSideProps() {
  const image = await getImage('image-name.jpg');

  return {
    props: {
      image,
    },
  };
}



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
    link: "./rain.wav",
    src: "./images/river.webp"
  },
  {
    title: "Wind in the Trees",
    description:
      "A soft, rustling whisper sways through the air, leaves fluttering and branches gently creaking as the breeze dances through the trees.",
    link: "./rain.wav",
    src: "./images/wind-in-trees.webp"
  },
  {
    title: "Ocean",
    description:
      "A rhythmic, endless whoosh of waves gently crashing and receding, mixed with the distant roar of the surf, creates a soothing, ever-present hum",
    link: "./rain.wav",
    src: "./images/ocean.webp"
  },
  {
    title: "Jungle",
    description:
      "A lively symphony of chirps, rustles, and calls fills the air, with distant echoes of unseen creatures and the occasional rustling of leaves, creating a vibrant, layered soundscape.",
    link: "./rain.wav",
    src: "./images/jungle.webp"
  },
  {
    title: "Fireplace",
    description:
      "A warm, crackling sound as flames dance and wood pops, accompanied by the gentle hiss of embers, creates a cozy, soothing ambiance.",
    link: "./rain.wav",
    src: "./images/fireplace.webp"
  },
  {
    title: "Rainfall",
    description:
      "A soft, steady patter as droplets tap against surfaces, sometimes swelling into a gentle roar, creating a calm, rhythmic lullaby.",
    link: "./rain.wav",
    src: "./images/rainfall.webp"
  },
  {
    title: "Forest at Night",
    description:
      "A quiet chorus of distant rustling leaves, soft chirps, and occasional hoots, wrapped in a deep, calming stillness under the night sky.",
    link: "./rain.wav",
    src: "./images/forest-at-night.webp"
  },
  {
    title: "Purring Cat",
    description:
      "A gentle, rhythmic vibration accompanied by a soft, continuous hum, exuding warmth and comfort with each steady breath.",
    link: "./rain.wav",
    src: "./images/cat.webp"
  },
  {
    title: "Muted City",
    description:
      "A distant hum of traffic, occasional muffled voices, and the faint echo of movement, all blending into a subdued, ambient background.",
    link: "./rain.wav",
    src: "./images/muted-city.webp"
  },
  {
    title: "Fan",
    description:
      "A steady, low hum with a soft, repetitive whirring as blades cut through the air, creating a consistent, soothing drone.",
    link: "./rain.wav",
    src: "./images/fan.webp"
  },
  {
    title: "Creek",
    description:
      "A gentle babble of water flowing over rocks, with soft splashes and occasional gurgles, creating a peaceful, melodic sound.",
    link: "./rain.wav",
    src: "./images/creek.webp"
  },
  {
    title: "Campfire",
    description:
      "A crackling symphony of popping wood and soft hisses, with flames softly flickering and embers glowing, creating a warm, cozy atmosphere.",
    link: "./rain.wav",
    src: "./images/campfire.webp"
  },
  {
    title: "Walking in Fall",
    description:
      "A crisp crunch with each step as leaves rustle and twigs snap underfoot, accompanied by the occasional whisper of a cool breeze.",
    link: "./rain.wav",
    src: "./images/fall-leaves.webp"
  },
  {
    title: "Spaceship",
    description:
      "A low, constant hum of engines, punctuated by the faint beeps of control panels and the occasional soft hiss of air systems.",
    link: "./rain.wav",
    src: "./images/spaceship-v2.webp"
  },
  {
    title: "Coffee Shop",
    description:
      "A gentle buzz of conversation mixed with the clinking of cups, the occasional hiss of a steaming espresso machine, and soft background music, creating a cozy, lively ambiance.",
    link: "./rain.wav",
    src: "./images/coffee-shop.webp"
  },
];