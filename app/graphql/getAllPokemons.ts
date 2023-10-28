import { gql } from '@apollo/client';
import { getClient } from '@/app/lib/client';

const GET_POKEMONS = gql`
  query Pokemons($limit: Int, $offset: Int) {
    pokemons(limit: $limit, offset: $offset) {
      results {
        id
        image
        name
      }
    }
  }
`;

const gqlVariables = {
  limit: 200,
  offset: 0,
};

const decoratePokemonsWithUrl = (pokemons: any[]) => pokemons.map(pokemon => ({
  ...pokemon,
  url: `/${pokemon.name}`,
}));

export const getAllPokemons = async () => {
  const { data } = await getClient().query({ query: GET_POKEMONS, variables: gqlVariables});
  const results = data.pokemons?.results || [];

  return decoratePokemonsWithUrl(results);
};
