import getOptimizedImage from "@/lib/utils/get-omitimized-image";
import Game from "@/types/Game";
import Image from "next/image";
import Link from "next/link";
import CriticScore from "./critic-score";
import PlatformsIconList from "./platforms-icon-list";

interface Props extends Game {}

const GameCard = ({
  background_image: backgroundImage,
  metacritic,
  parent_platforms,
  slug,
  name,
}: Props) => (
  <Link href={`/games/${slug}`}>
    <article className="bg-licorice overflow-hidden rounded-3xl transition-transform hover:scale-105">
      <div className="w-full relative aspect-video">
        <Image src={getOptimizedImage(backgroundImage)} fill alt={name} />
      </div>
      <div className="p-6 space-y-3">
        {metacritic && <CriticScore score={metacritic} />}
        <h3 className="text-2xl font-sans font-medium truncate hover:text-springBud">
          {name}
        </h3>
        {parent_platforms && (
          <PlatformsIconList
            platforms={parent_platforms.map((platform) => platform.platform)}
          />
        )}
      </div>
    </article>
  </Link>
);

export default GameCard;
