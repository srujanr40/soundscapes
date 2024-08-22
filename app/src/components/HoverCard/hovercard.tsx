"use client"
import { HoverEffect } from "../ui/card-hover-effect";
 
export default function HoverCard() {
  return (
    <div className="max-w-5xl mx-auto px-8">
      <HoverEffect items={projects} />
    </div>
  );
}
export const projects = [
  {
    title: "River",
    description:
      "A gentle murmur flows by, with soft splashes and a rhythmic, calming rush as water weaves through unseen paths. And doing things here and there and here and there",
    link: "https://stripe.com",
    src: "https://images.unsplash.com/photo-1437482078695-73f5ca6c96e2?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    title: "Wind in the Trees",
    description:
      "A soft, rustling whisper sways through the air, leaves fluttering and branches gently creaking as the breeze dances through the trees.",
    link: "https://netflix.com",
    src: "https://plus.unsplash.com/premium_photo-1667405554973-18349f4d4dd1?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    title: "Ocean",
    description:
      "A rhythmic, endless whoosh of waves gently crashing and receding, mixed with the distant roar of the surf, creates a soothing, ever-present hum",
    link: "https://google.com",
    src: "https://images.unsplash.com/photo-1484291470158-b8f8d608850d?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    title: "Jungle",
    description:
      "A lively symphony of chirps, rustles, and calls fills the air, with distant echoes of unseen creatures and the occasional rustling of leaves, creating a vibrant, layered soundscape.",
    link: "https://meta.com",
    src: "https://images.unsplash.com/photo-1575489272413-cb506258027e?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    title: "Fireplace",
    description:
      "A warm, crackling sound as flames dance and wood pops, accompanied by the gentle hiss of embers, creates a cozy, soothing ambiance.",
    link: "https://amazon.com",
    src: "https://images.unsplash.com/photo-1554332208-9dfebcc48334?q=80&w=1738&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    title: "Rain",
    description:
      "A soft, steady patter as droplets tap against surfaces, sometimes swelling into a gentle roar, creating a calm, rhythmic lullaby.",
    link: "https://microsoft.com",
    src: "https://images.unsplash.com/uploads/14116603688211a68546c/30f8f30b?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    title: "Forest at Night",
    description:
      "A quiet chorus of distant rustling leaves, soft chirps, and occasional hoots, wrapped in a deep, calming stillness under the night sky.",
    link: "https://microsoft.com",
    src: "https://images.unsplash.com/photo-1499875087559-ee0963a091c6?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    title: "Purring Cat",
    description:
      "A gentle, rhythmic vibration accompanied by a soft, continuous hum, exuding warmth and comfort with each steady breath.",
    link: "https://microsoft.com",
    src: "https://images.unsplash.com/photo-1705278995823-a68aa0b561d9?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    title: "Muted City",
    description:
      "A distant hum of traffic, occasional muffled voices, and the faint echo of movement, all blending into a subdued, ambient background.",
    link: "https://microsoft.com",
    src: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/ec7d26b1-d557-47c1-a877-6050004d2fc2/dbb7hcs-1f9e8f0a-c4c7-4fc9-baf6-9e075ce86e30.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2VjN2QyNmIxLWQ1NTctNDdjMS1hODc3LTYwNTAwMDRkMmZjMlwvZGJiN2hjcy0xZjllOGYwYS1jNGM3LTRmYzktYmFmNi05ZTA3NWNlODZlMzAuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.-7-iEaeDDddcIw8RSKsKr7t8JpLF4DYv6ZQzuOVtQ28"
  },
  {
    title: "Fan",
    description:
      "A steady, low hum with a soft, repetitive whirring as blades cut through the air, creating a consistent, soothing drone.",
    link: "https://microsoft.com",
    src: "https://nypost.com/wp-content/uploads/sites/2/2019/08/electric-fan-.jpg?quality=75&strip=all"
  },
  {
    title: "Creek",
    description:
      "A gentle babble of water flowing over rocks, with soft splashes and occasional gurgles, creating a peaceful, melodic sound.",
    link: "https://microsoft.com",
    src: "https://plus.unsplash.com/premium_photo-1673631128603-3fd421af36c7?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    title: "Campfire",
    description:
      "A crackling symphony of popping wood and soft hisses, with flames softly flickering and embers glowing, creating a warm, cozy atmosphere.",
    link: "https://microsoft.com",
    src: "https://images.unsplash.com/photo-1437719417032-8595fd9e9dc6?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    title: "Walking in Fall",
    description:
      "A crisp crunch with each step as leaves rustle and twigs snap underfoot, accompanied by the occasional whisper of a cool breeze.",
    link: "https://microsoft.com",
    src: "https://plus.unsplash.com/premium_photo-1668136403317-1230640e4b9f?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    title: "Spaceship",
    description:
      "A low, constant hum of engines, punctuated by the faint beeps of control panels and the occasional soft hiss of air systems.",
    link: "https://microsoft.com",
    src: "https://cdnb.artstation.com/p/assets/images/images/008/428/497/large/galan-pang-0731-staging-area.jpg?1512689334"
  },
  {
    title: "Coffee Shop",
    description:
      "A gentle buzz of conversation mixed with the clinking of cups, the occasional hiss of a steaming espresso machine, and soft background music, creating a cozy, lively ambiance.",
    link: "https://microsoft.com",
    src: "https://images.unsplash.com/photo-1525610553991-2bede1a236e2?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
];