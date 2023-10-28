import { gql } from '@apollo/client';
import { getClient } from '@/app/lib/client';

const GET_ONE_POKEMON = gql`
  query pokemon ($name: String!) {
    pokemon(name: $name) {
      name
      height
      sprites {
        front_default
      }
    }
  }
`;

export const getOnePokemon = async (name: string) => {
  const { data } = await getClient().query({ query: GET_ONE_POKEMON, variables: { name } });
  const results = data.pokemon || [];

  return results;
};