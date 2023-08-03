/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getTerritorySlider = /* GraphQL */ `
  query GetTerritorySlider($id: ID!) {
    getTerritorySlider(id: $id) {
      id
      Field0
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listTerritorySliders = /* GraphQL */ `
  query ListTerritorySliders(
    $filter: ModelTerritorySliderFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTerritorySliders(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        Field0
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getTerritorySlider2 = /* GraphQL */ `
  query GetTerritorySlider2($id: ID!) {
    getTerritorySlider2(id: $id) {
      id
      Field0
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listTerritorySlider2s = /* GraphQL */ `
  query ListTerritorySlider2s(
    $filter: ModelTerritorySlider2FilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTerritorySlider2s(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        Field0
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getNote = /* GraphQL */ `
  query GetNote($id: ID!) {
    getNote(id: $id) {
      id
      name
      description
      image
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listNotes = /* GraphQL */ `
  query ListNotes(
    $filter: ModelNoteFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listNotes(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        description
        image
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
