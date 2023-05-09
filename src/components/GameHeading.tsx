import { Heading } from '@chakra-ui/react';
import { GameQuery } from '../App';
import useGenre from '../hooks/useGenre';
import usePlatform from '../hooks/usePlatform';

interface Props {
  gameQuery: GameQuery;
}

const GameHeading = ({ gameQuery }: Props) => {
  const { platformId, genreId } = gameQuery;
  const genre = useGenre(genreId);
  const platform = usePlatform(platformId);

  const heading = `${platform?.name || ''} ${genre?.name || ''} Games`;

  return (
    <Heading as='h1' marginY={5} fontSize={{ base: '3xl', md: '5xl' }}>
      {heading}
    </Heading>
  );
};

export default GameHeading;
