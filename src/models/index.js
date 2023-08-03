// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';

const Territory = {
  "MWGF01": "MWGF01",
  "MWGF02": "MWGF02",
  "MWGF03": "MWGF03",
  "MWGF04": "MWGF04",
  "MWGF05": "MWGF05",
  "MWGF06": "MWGF06",
  "MWGF07": "MWGF07",
  "MWGF08": "MWGF08",
  "MWGF09": "MWGF09"
};

const { TerritorySelect, TerritorySlider, Note } = initSchema(schema);

export {
  TerritorySelect,
  TerritorySlider,
  Note,
  Territory
};