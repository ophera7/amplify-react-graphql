import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled } from "@aws-amplify/datastore";

export enum SoonToBeApprovedDistricts {
  GULFCOAST = "GULFCOAST",
  NORTHCENTRAL = "NORTHCENTRAL",
  SOUTHCENTRAL = "SOUTHCENTRAL",
  OHIOVALLEY = "OHIOVALLEY"
}

export enum ApprovedDistrictList {
  MIDWEST = "MIDWEST"
}

export enum CusomterList {
  COMPANYX = "COMPANYX",
  COMPANYY = "COMPANYY",
  COMPANYZ = "COMPANYZ"
}

export enum Territory {
  MWGF01 = "MWGF01",
  MWGF02 = "MWGF02",
  MWGF03 = "MWGF03",
  MWGF04 = "MWGF04",
  MWGF05 = "MWGF05",
  MWGF06 = "MWGF06",
  MWGF07 = "MWGF07",
  MWGF08 = "MWGF08",
  MWGF09 = "MWGF09"
}



type EagerDistrict = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<District, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly ApprovedDistricts: ApprovedDistrictList | keyof typeof ApprovedDistrictList;
  readonly SoonToBeApprovedDistricts?: SoonToBeApprovedDistricts | keyof typeof SoonToBeApprovedDistricts | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyDistrict = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<District, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly ApprovedDistricts: ApprovedDistrictList | keyof typeof ApprovedDistrictList;
  readonly SoonToBeApprovedDistricts?: SoonToBeApprovedDistricts | keyof typeof SoonToBeApprovedDistricts | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type District = LazyLoading extends LazyLoadingDisabled ? EagerDistrict : LazyDistrict

export declare const District: (new (init: ModelInit<District>) => District) & {
  copyOf(source: District, mutator: (draft: MutableModel<District>) => MutableModel<District> | void): District;
}

type EagerCustomerSelect = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<CustomerSelect, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly Customer: CusomterList | keyof typeof CusomterList;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyCustomerSelect = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<CustomerSelect, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly Customer: CusomterList | keyof typeof CusomterList;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type CustomerSelect = LazyLoading extends LazyLoadingDisabled ? EagerCustomerSelect : LazyCustomerSelect

export declare const CustomerSelect: (new (init: ModelInit<CustomerSelect>) => CustomerSelect) & {
  copyOf(source: CustomerSelect, mutator: (draft: MutableModel<CustomerSelect>) => MutableModel<CustomerSelect> | void): CustomerSelect;
}

type EagerTerritorySelect = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<TerritorySelect, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly Territory: Territory | keyof typeof Territory;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyTerritorySelect = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<TerritorySelect, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly Territory: Territory | keyof typeof Territory;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type TerritorySelect = LazyLoading extends LazyLoadingDisabled ? EagerTerritorySelect : LazyTerritorySelect

export declare const TerritorySelect: (new (init: ModelInit<TerritorySelect>) => TerritorySelect) & {
  copyOf(source: TerritorySelect, mutator: (draft: MutableModel<TerritorySelect>) => MutableModel<TerritorySelect> | void): TerritorySelect;
}

type EagerNote = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Note, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly description?: string | null;
  readonly image?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyNote = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Note, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly description?: string | null;
  readonly image?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Note = LazyLoading extends LazyLoadingDisabled ? EagerNote : LazyNote

export declare const Note: (new (init: ModelInit<Note>) => Note) & {
  copyOf(source: Note, mutator: (draft: MutableModel<Note>) => MutableModel<Note> | void): Note;
}

type EagerAssessmentAccountDetails = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<AssessmentAccountDetails, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly AccountName?: string | null;
  readonly AccountManagerName?: string | null;
  readonly AccountSAName?: string | null;
  readonly AccountSalesforceLink?: string | null;
  readonly CustomerSalesConsoleLine?: string | null;
  readonly ProServTrainingSpentT12M?: number | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyAssessmentAccountDetails = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<AssessmentAccountDetails, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly AccountName?: string | null;
  readonly AccountManagerName?: string | null;
  readonly AccountSAName?: string | null;
  readonly AccountSalesforceLink?: string | null;
  readonly CustomerSalesConsoleLine?: string | null;
  readonly ProServTrainingSpentT12M?: number | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type AssessmentAccountDetails = LazyLoading extends LazyLoadingDisabled ? EagerAssessmentAccountDetails : LazyAssessmentAccountDetails

export declare const AssessmentAccountDetails: (new (init: ModelInit<AssessmentAccountDetails>) => AssessmentAccountDetails) & {
  copyOf(source: AssessmentAccountDetails, mutator: (draft: MutableModel<AssessmentAccountDetails>) => MutableModel<AssessmentAccountDetails> | void): AssessmentAccountDetails;
}