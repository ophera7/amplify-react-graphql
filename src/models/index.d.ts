import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled } from "@aws-amplify/datastore";

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

type EagerTerritorySlider = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<TerritorySlider, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly Field0?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyTerritorySlider = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<TerritorySlider, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly Field0?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type TerritorySlider = LazyLoading extends LazyLoadingDisabled ? EagerTerritorySlider : LazyTerritorySlider

export declare const TerritorySlider: (new (init: ModelInit<TerritorySlider>) => TerritorySlider) & {
  copyOf(source: TerritorySlider, mutator: (draft: MutableModel<TerritorySlider>) => MutableModel<TerritorySlider> | void): TerritorySlider;
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