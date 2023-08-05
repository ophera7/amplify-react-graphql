// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';

const SoonToBeApprovedDistricts = {
  "GULFCOAST": "GULFCOAST",
  "NORTHCENTRAL": "NORTHCENTRAL",
  "SOUTHCENTRAL": "SOUTHCENTRAL",
  "OHIOVALLEY": "OHIOVALLEY"
};

const ApprovedDistrictList = {
  "MIDWEST": "MIDWEST"
};

const CusomterList = {
  "COMPANYX": "COMPANYX",
  "COMPANYY": "COMPANYY",
  "COMPANYZ": "COMPANYZ"
};

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

const { District, CustomerSelect, TerritorySelect, Note, AssessmentAccountDetails } = initSchema(schema);

export {
  District,
  CustomerSelect,
  TerritorySelect,
  Note,
  AssessmentAccountDetails,
  SoonToBeApprovedDistricts,
  ApprovedDistrictList,
  CusomterList,
  Territory
};