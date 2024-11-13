import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  DateTimeISO: { input: any; output: any; }
};

export type AffectedRowsOutput = {
  __typename?: 'AffectedRowsOutput';
  count: Scalars['Int']['output'];
};

export type AggregateAuthor = {
  __typename?: 'AggregateAuthor';
  _count?: Maybe<AuthorCountAggregate>;
  _max?: Maybe<AuthorMaxAggregate>;
  _min?: Maybe<AuthorMinAggregate>;
};

export type AggregateInventory = {
  __typename?: 'AggregateInventory';
  _count?: Maybe<InventoryCountAggregate>;
  _max?: Maybe<InventoryMaxAggregate>;
  _min?: Maybe<InventoryMinAggregate>;
};

export type Author = {
  __typename?: 'Author';
  Inventory: Array<Inventory>;
  _count?: Maybe<AuthorCount>;
  author_id: Scalars['String']['output'];
  biography?: Maybe<Scalars['String']['output']>;
  created_at: Scalars['DateTimeISO']['output'];
  name: Scalars['String']['output'];
  updated_at: Scalars['DateTimeISO']['output'];
};


export type AuthorInventoryArgs = {
  cursor?: InputMaybe<InventoryWhereUniqueInput>;
  distinct?: InputMaybe<Array<InventoryScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<InventoryOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<InventoryWhereInput>;
};

export type AuthorCount = {
  __typename?: 'AuthorCount';
  Inventory: Scalars['Int']['output'];
};


export type AuthorCountInventoryArgs = {
  where?: InputMaybe<InventoryWhereInput>;
};

export type AuthorCountAggregate = {
  __typename?: 'AuthorCountAggregate';
  _all: Scalars['Int']['output'];
  author_id: Scalars['Int']['output'];
  biography: Scalars['Int']['output'];
  created_at: Scalars['Int']['output'];
  name: Scalars['Int']['output'];
  updated_at: Scalars['Int']['output'];
};

export type AuthorCountOrderByAggregateInput = {
  author_id?: InputMaybe<SortOrder>;
  biography?: InputMaybe<SortOrder>;
  created_at?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  updated_at?: InputMaybe<SortOrder>;
};

export type AuthorCreateInput = {
  Inventory?: InputMaybe<InventoryCreateNestedManyWithoutAuthorInput>;
  author_id?: InputMaybe<Scalars['String']['input']>;
  biography?: InputMaybe<Scalars['String']['input']>;
  created_at?: InputMaybe<Scalars['DateTimeISO']['input']>;
  name: Scalars['String']['input'];
  updated_at?: InputMaybe<Scalars['DateTimeISO']['input']>;
};

export type AuthorCreateManyInput = {
  author_id?: InputMaybe<Scalars['String']['input']>;
  biography?: InputMaybe<Scalars['String']['input']>;
  created_at?: InputMaybe<Scalars['DateTimeISO']['input']>;
  name: Scalars['String']['input'];
  updated_at?: InputMaybe<Scalars['DateTimeISO']['input']>;
};

export type AuthorCreateNestedOneWithoutInventoryInput = {
  connect?: InputMaybe<AuthorWhereUniqueInput>;
  connectOrCreate?: InputMaybe<AuthorCreateOrConnectWithoutInventoryInput>;
  create?: InputMaybe<AuthorCreateWithoutInventoryInput>;
};

export type AuthorCreateOrConnectWithoutInventoryInput = {
  create: AuthorCreateWithoutInventoryInput;
  where: AuthorWhereUniqueInput;
};

export type AuthorCreateWithoutInventoryInput = {
  author_id?: InputMaybe<Scalars['String']['input']>;
  biography?: InputMaybe<Scalars['String']['input']>;
  created_at?: InputMaybe<Scalars['DateTimeISO']['input']>;
  name: Scalars['String']['input'];
  updated_at?: InputMaybe<Scalars['DateTimeISO']['input']>;
};

export type AuthorGroupBy = {
  __typename?: 'AuthorGroupBy';
  _count?: Maybe<AuthorCountAggregate>;
  _max?: Maybe<AuthorMaxAggregate>;
  _min?: Maybe<AuthorMinAggregate>;
  author_id: Scalars['String']['output'];
  biography?: Maybe<Scalars['String']['output']>;
  created_at: Scalars['DateTimeISO']['output'];
  name: Scalars['String']['output'];
  updated_at: Scalars['DateTimeISO']['output'];
};

export type AuthorMaxAggregate = {
  __typename?: 'AuthorMaxAggregate';
  author_id?: Maybe<Scalars['String']['output']>;
  biography?: Maybe<Scalars['String']['output']>;
  created_at?: Maybe<Scalars['DateTimeISO']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['DateTimeISO']['output']>;
};

export type AuthorMaxOrderByAggregateInput = {
  author_id?: InputMaybe<SortOrder>;
  biography?: InputMaybe<SortOrder>;
  created_at?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  updated_at?: InputMaybe<SortOrder>;
};

export type AuthorMinAggregate = {
  __typename?: 'AuthorMinAggregate';
  author_id?: Maybe<Scalars['String']['output']>;
  biography?: Maybe<Scalars['String']['output']>;
  created_at?: Maybe<Scalars['DateTimeISO']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['DateTimeISO']['output']>;
};

export type AuthorMinOrderByAggregateInput = {
  author_id?: InputMaybe<SortOrder>;
  biography?: InputMaybe<SortOrder>;
  created_at?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  updated_at?: InputMaybe<SortOrder>;
};

export type AuthorOrderByWithAggregationInput = {
  _count?: InputMaybe<AuthorCountOrderByAggregateInput>;
  _max?: InputMaybe<AuthorMaxOrderByAggregateInput>;
  _min?: InputMaybe<AuthorMinOrderByAggregateInput>;
  author_id?: InputMaybe<SortOrder>;
  biography?: InputMaybe<SortOrderInput>;
  created_at?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  updated_at?: InputMaybe<SortOrder>;
};

export type AuthorOrderByWithRelationInput = {
  Inventory?: InputMaybe<InventoryOrderByRelationAggregateInput>;
  author_id?: InputMaybe<SortOrder>;
  biography?: InputMaybe<SortOrderInput>;
  created_at?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  updated_at?: InputMaybe<SortOrder>;
};

export type AuthorRelationFilter = {
  is?: InputMaybe<AuthorWhereInput>;
  isNot?: InputMaybe<AuthorWhereInput>;
};

export enum AuthorScalarFieldEnum {
  AuthorId = 'author_id',
  Biography = 'biography',
  CreatedAt = 'created_at',
  Name = 'name',
  UpdatedAt = 'updated_at'
}

export type AuthorScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<AuthorScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<AuthorScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<AuthorScalarWhereWithAggregatesInput>>;
  author_id?: InputMaybe<UuidWithAggregatesFilter>;
  biography?: InputMaybe<StringNullableWithAggregatesFilter>;
  created_at?: InputMaybe<DateTimeWithAggregatesFilter>;
  name?: InputMaybe<StringWithAggregatesFilter>;
  updated_at?: InputMaybe<DateTimeWithAggregatesFilter>;
};

export type AuthorUpdateInput = {
  Inventory?: InputMaybe<InventoryUpdateManyWithoutAuthorNestedInput>;
  author_id?: InputMaybe<StringFieldUpdateOperationsInput>;
  biography?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  created_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  updated_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type AuthorUpdateManyMutationInput = {
  author_id?: InputMaybe<StringFieldUpdateOperationsInput>;
  biography?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  created_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  updated_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type AuthorUpdateOneRequiredWithoutInventoryNestedInput = {
  connect?: InputMaybe<AuthorWhereUniqueInput>;
  connectOrCreate?: InputMaybe<AuthorCreateOrConnectWithoutInventoryInput>;
  create?: InputMaybe<AuthorCreateWithoutInventoryInput>;
  update?: InputMaybe<AuthorUpdateToOneWithWhereWithoutInventoryInput>;
  upsert?: InputMaybe<AuthorUpsertWithoutInventoryInput>;
};

export type AuthorUpdateToOneWithWhereWithoutInventoryInput = {
  data: AuthorUpdateWithoutInventoryInput;
  where?: InputMaybe<AuthorWhereInput>;
};

export type AuthorUpdateWithoutInventoryInput = {
  author_id?: InputMaybe<StringFieldUpdateOperationsInput>;
  biography?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  created_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  updated_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type AuthorUpsertWithoutInventoryInput = {
  create: AuthorCreateWithoutInventoryInput;
  update: AuthorUpdateWithoutInventoryInput;
  where?: InputMaybe<AuthorWhereInput>;
};

export type AuthorWhereInput = {
  AND?: InputMaybe<Array<AuthorWhereInput>>;
  Inventory?: InputMaybe<InventoryListRelationFilter>;
  NOT?: InputMaybe<Array<AuthorWhereInput>>;
  OR?: InputMaybe<Array<AuthorWhereInput>>;
  author_id?: InputMaybe<UuidFilter>;
  biography?: InputMaybe<StringNullableFilter>;
  created_at?: InputMaybe<DateTimeFilter>;
  name?: InputMaybe<StringFilter>;
  updated_at?: InputMaybe<DateTimeFilter>;
};

export type AuthorWhereUniqueInput = {
  AND?: InputMaybe<Array<AuthorWhereInput>>;
  Inventory?: InputMaybe<InventoryListRelationFilter>;
  NOT?: InputMaybe<Array<AuthorWhereInput>>;
  OR?: InputMaybe<Array<AuthorWhereInput>>;
  author_id?: InputMaybe<Scalars['String']['input']>;
  biography?: InputMaybe<StringNullableFilter>;
  created_at?: InputMaybe<DateTimeFilter>;
  name?: InputMaybe<StringFilter>;
  updated_at?: InputMaybe<DateTimeFilter>;
};

export type CreateManyAndReturnAuthor = {
  __typename?: 'CreateManyAndReturnAuthor';
  author_id: Scalars['String']['output'];
  biography?: Maybe<Scalars['String']['output']>;
  created_at: Scalars['DateTimeISO']['output'];
  name: Scalars['String']['output'];
  updated_at: Scalars['DateTimeISO']['output'];
};

export type CreateManyAndReturnInventory = {
  __typename?: 'CreateManyAndReturnInventory';
  author: Author;
  authorAuthor_id: Scalars['String']['output'];
  entry_id: Scalars['String']['output'];
  genre?: Maybe<Array<Genre>>;
  isbn: Scalars['String']['output'];
  publication_date: Scalars['DateTimeISO']['output'];
  title: Scalars['String']['output'];
};

export type DateTimeFieldUpdateOperationsInput = {
  set?: InputMaybe<Scalars['DateTimeISO']['input']>;
};

export type DateTimeFilter = {
  equals?: InputMaybe<Scalars['DateTimeISO']['input']>;
  gt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  gte?: InputMaybe<Scalars['DateTimeISO']['input']>;
  in?: InputMaybe<Array<Scalars['DateTimeISO']['input']>>;
  lt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  lte?: InputMaybe<Scalars['DateTimeISO']['input']>;
  not?: InputMaybe<NestedDateTimeFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTimeISO']['input']>>;
};

export type DateTimeWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedDateTimeFilter>;
  _min?: InputMaybe<NestedDateTimeFilter>;
  equals?: InputMaybe<Scalars['DateTimeISO']['input']>;
  gt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  gte?: InputMaybe<Scalars['DateTimeISO']['input']>;
  in?: InputMaybe<Array<Scalars['DateTimeISO']['input']>>;
  lt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  lte?: InputMaybe<Scalars['DateTimeISO']['input']>;
  not?: InputMaybe<NestedDateTimeWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTimeISO']['input']>>;
};

export type EnumGenreNullableListFilter = {
  equals?: InputMaybe<Array<Genre>>;
  has?: InputMaybe<Genre>;
  hasEvery?: InputMaybe<Array<Genre>>;
  hasSome?: InputMaybe<Array<Genre>>;
  isEmpty?: InputMaybe<Scalars['Boolean']['input']>;
};

export enum Genre {
  Adventure = 'ADVENTURE',
  Childrenfiction = 'CHILDRENFICTION',
  Drama = 'DRAMA',
  Dystopian = 'DYSTOPIAN',
  Fantasy = 'FANTASY',
  Historialfiction = 'HISTORIALFICTION',
  Horror = 'HORROR',
  Mystery = 'MYSTERY',
  Romance = 'ROMANCE',
  Sciencefiction = 'SCIENCEFICTION',
  Thriller = 'THRILLER'
}

export type Inventory = {
  __typename?: 'Inventory';
  author: Author;
  authorAuthor_id: Scalars['String']['output'];
  entry_id: Scalars['String']['output'];
  genre: Array<Genre>;
  isbn: Scalars['String']['output'];
  publication_date: Scalars['DateTimeISO']['output'];
  title: Scalars['String']['output'];
};

export type InventoryCountAggregate = {
  __typename?: 'InventoryCountAggregate';
  _all: Scalars['Int']['output'];
  authorAuthor_id: Scalars['Int']['output'];
  entry_id: Scalars['Int']['output'];
  genre: Scalars['Int']['output'];
  isbn: Scalars['Int']['output'];
  publication_date: Scalars['Int']['output'];
  title: Scalars['Int']['output'];
};

export type InventoryCountOrderByAggregateInput = {
  authorAuthor_id?: InputMaybe<SortOrder>;
  entry_id?: InputMaybe<SortOrder>;
  genre?: InputMaybe<SortOrder>;
  isbn?: InputMaybe<SortOrder>;
  publication_date?: InputMaybe<SortOrder>;
  title?: InputMaybe<SortOrder>;
};

export type InventoryCreateInput = {
  author: AuthorCreateNestedOneWithoutInventoryInput;
  entry_id?: InputMaybe<Scalars['String']['input']>;
  genre?: InputMaybe<InventoryCreategenreInput>;
  isbn: Scalars['String']['input'];
  publication_date: Scalars['DateTimeISO']['input'];
  title: Scalars['String']['input'];
};

export type InventoryCreateManyAuthorInput = {
  entry_id?: InputMaybe<Scalars['String']['input']>;
  genre?: InputMaybe<InventoryCreategenreInput>;
  isbn: Scalars['String']['input'];
  publication_date: Scalars['DateTimeISO']['input'];
  title: Scalars['String']['input'];
};

export type InventoryCreateManyAuthorInputEnvelope = {
  data: Array<InventoryCreateManyAuthorInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type InventoryCreateManyInput = {
  authorAuthor_id: Scalars['String']['input'];
  entry_id?: InputMaybe<Scalars['String']['input']>;
  genre?: InputMaybe<InventoryCreategenreInput>;
  isbn: Scalars['String']['input'];
  publication_date: Scalars['DateTimeISO']['input'];
  title: Scalars['String']['input'];
};

export type InventoryCreateNestedManyWithoutAuthorInput = {
  connect?: InputMaybe<Array<InventoryWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<InventoryCreateOrConnectWithoutAuthorInput>>;
  create?: InputMaybe<Array<InventoryCreateWithoutAuthorInput>>;
  createMany?: InputMaybe<InventoryCreateManyAuthorInputEnvelope>;
};

export type InventoryCreateOrConnectWithoutAuthorInput = {
  create: InventoryCreateWithoutAuthorInput;
  where: InventoryWhereUniqueInput;
};

export type InventoryCreateWithoutAuthorInput = {
  entry_id?: InputMaybe<Scalars['String']['input']>;
  genre?: InputMaybe<InventoryCreategenreInput>;
  isbn: Scalars['String']['input'];
  publication_date: Scalars['DateTimeISO']['input'];
  title: Scalars['String']['input'];
};

export type InventoryCreategenreInput = {
  set: Array<Genre>;
};

export type InventoryGroupBy = {
  __typename?: 'InventoryGroupBy';
  _count?: Maybe<InventoryCountAggregate>;
  _max?: Maybe<InventoryMaxAggregate>;
  _min?: Maybe<InventoryMinAggregate>;
  authorAuthor_id: Scalars['String']['output'];
  entry_id: Scalars['String']['output'];
  genre?: Maybe<Array<Genre>>;
  isbn: Scalars['String']['output'];
  publication_date: Scalars['DateTimeISO']['output'];
  title: Scalars['String']['output'];
};

export type InventoryListRelationFilter = {
  every?: InputMaybe<InventoryWhereInput>;
  none?: InputMaybe<InventoryWhereInput>;
  some?: InputMaybe<InventoryWhereInput>;
};

export type InventoryMaxAggregate = {
  __typename?: 'InventoryMaxAggregate';
  authorAuthor_id?: Maybe<Scalars['String']['output']>;
  entry_id?: Maybe<Scalars['String']['output']>;
  isbn?: Maybe<Scalars['String']['output']>;
  publication_date?: Maybe<Scalars['DateTimeISO']['output']>;
  title?: Maybe<Scalars['String']['output']>;
};

export type InventoryMaxOrderByAggregateInput = {
  authorAuthor_id?: InputMaybe<SortOrder>;
  entry_id?: InputMaybe<SortOrder>;
  isbn?: InputMaybe<SortOrder>;
  publication_date?: InputMaybe<SortOrder>;
  title?: InputMaybe<SortOrder>;
};

export type InventoryMinAggregate = {
  __typename?: 'InventoryMinAggregate';
  authorAuthor_id?: Maybe<Scalars['String']['output']>;
  entry_id?: Maybe<Scalars['String']['output']>;
  isbn?: Maybe<Scalars['String']['output']>;
  publication_date?: Maybe<Scalars['DateTimeISO']['output']>;
  title?: Maybe<Scalars['String']['output']>;
};

export type InventoryMinOrderByAggregateInput = {
  authorAuthor_id?: InputMaybe<SortOrder>;
  entry_id?: InputMaybe<SortOrder>;
  isbn?: InputMaybe<SortOrder>;
  publication_date?: InputMaybe<SortOrder>;
  title?: InputMaybe<SortOrder>;
};

export type InventoryOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type InventoryOrderByWithAggregationInput = {
  _count?: InputMaybe<InventoryCountOrderByAggregateInput>;
  _max?: InputMaybe<InventoryMaxOrderByAggregateInput>;
  _min?: InputMaybe<InventoryMinOrderByAggregateInput>;
  authorAuthor_id?: InputMaybe<SortOrder>;
  entry_id?: InputMaybe<SortOrder>;
  genre?: InputMaybe<SortOrder>;
  isbn?: InputMaybe<SortOrder>;
  publication_date?: InputMaybe<SortOrder>;
  title?: InputMaybe<SortOrder>;
};

export type InventoryOrderByWithRelationInput = {
  author?: InputMaybe<AuthorOrderByWithRelationInput>;
  authorAuthor_id?: InputMaybe<SortOrder>;
  entry_id?: InputMaybe<SortOrder>;
  genre?: InputMaybe<SortOrder>;
  isbn?: InputMaybe<SortOrder>;
  publication_date?: InputMaybe<SortOrder>;
  title?: InputMaybe<SortOrder>;
};

export enum InventoryScalarFieldEnum {
  AuthorAuthorId = 'authorAuthor_id',
  EntryId = 'entry_id',
  Genre = 'genre',
  Isbn = 'isbn',
  PublicationDate = 'publication_date',
  Title = 'title'
}

export type InventoryScalarWhereInput = {
  AND?: InputMaybe<Array<InventoryScalarWhereInput>>;
  NOT?: InputMaybe<Array<InventoryScalarWhereInput>>;
  OR?: InputMaybe<Array<InventoryScalarWhereInput>>;
  authorAuthor_id?: InputMaybe<UuidFilter>;
  entry_id?: InputMaybe<UuidFilter>;
  genre?: InputMaybe<EnumGenreNullableListFilter>;
  isbn?: InputMaybe<StringFilter>;
  publication_date?: InputMaybe<DateTimeFilter>;
  title?: InputMaybe<StringFilter>;
};

export type InventoryScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<InventoryScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<InventoryScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<InventoryScalarWhereWithAggregatesInput>>;
  authorAuthor_id?: InputMaybe<UuidWithAggregatesFilter>;
  entry_id?: InputMaybe<UuidWithAggregatesFilter>;
  genre?: InputMaybe<EnumGenreNullableListFilter>;
  isbn?: InputMaybe<StringWithAggregatesFilter>;
  publication_date?: InputMaybe<DateTimeWithAggregatesFilter>;
  title?: InputMaybe<StringWithAggregatesFilter>;
};

export type InventoryUpdateInput = {
  author?: InputMaybe<AuthorUpdateOneRequiredWithoutInventoryNestedInput>;
  entry_id?: InputMaybe<StringFieldUpdateOperationsInput>;
  genre?: InputMaybe<InventoryUpdategenreInput>;
  isbn?: InputMaybe<StringFieldUpdateOperationsInput>;
  publication_date?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type InventoryUpdateManyMutationInput = {
  entry_id?: InputMaybe<StringFieldUpdateOperationsInput>;
  genre?: InputMaybe<InventoryUpdategenreInput>;
  isbn?: InputMaybe<StringFieldUpdateOperationsInput>;
  publication_date?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type InventoryUpdateManyWithWhereWithoutAuthorInput = {
  data: InventoryUpdateManyMutationInput;
  where: InventoryScalarWhereInput;
};

export type InventoryUpdateManyWithoutAuthorNestedInput = {
  connect?: InputMaybe<Array<InventoryWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<InventoryCreateOrConnectWithoutAuthorInput>>;
  create?: InputMaybe<Array<InventoryCreateWithoutAuthorInput>>;
  createMany?: InputMaybe<InventoryCreateManyAuthorInputEnvelope>;
  delete?: InputMaybe<Array<InventoryWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<InventoryScalarWhereInput>>;
  disconnect?: InputMaybe<Array<InventoryWhereUniqueInput>>;
  set?: InputMaybe<Array<InventoryWhereUniqueInput>>;
  update?: InputMaybe<Array<InventoryUpdateWithWhereUniqueWithoutAuthorInput>>;
  updateMany?: InputMaybe<Array<InventoryUpdateManyWithWhereWithoutAuthorInput>>;
  upsert?: InputMaybe<Array<InventoryUpsertWithWhereUniqueWithoutAuthorInput>>;
};

export type InventoryUpdateWithWhereUniqueWithoutAuthorInput = {
  data: InventoryUpdateWithoutAuthorInput;
  where: InventoryWhereUniqueInput;
};

export type InventoryUpdateWithoutAuthorInput = {
  entry_id?: InputMaybe<StringFieldUpdateOperationsInput>;
  genre?: InputMaybe<InventoryUpdategenreInput>;
  isbn?: InputMaybe<StringFieldUpdateOperationsInput>;
  publication_date?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type InventoryUpdategenreInput = {
  push?: InputMaybe<Array<Genre>>;
  set?: InputMaybe<Array<Genre>>;
};

export type InventoryUpsertWithWhereUniqueWithoutAuthorInput = {
  create: InventoryCreateWithoutAuthorInput;
  update: InventoryUpdateWithoutAuthorInput;
  where: InventoryWhereUniqueInput;
};

export type InventoryWhereInput = {
  AND?: InputMaybe<Array<InventoryWhereInput>>;
  NOT?: InputMaybe<Array<InventoryWhereInput>>;
  OR?: InputMaybe<Array<InventoryWhereInput>>;
  author?: InputMaybe<AuthorRelationFilter>;
  authorAuthor_id?: InputMaybe<UuidFilter>;
  entry_id?: InputMaybe<UuidFilter>;
  genre?: InputMaybe<EnumGenreNullableListFilter>;
  isbn?: InputMaybe<StringFilter>;
  publication_date?: InputMaybe<DateTimeFilter>;
  title?: InputMaybe<StringFilter>;
};

export type InventoryWhereUniqueInput = {
  AND?: InputMaybe<Array<InventoryWhereInput>>;
  NOT?: InputMaybe<Array<InventoryWhereInput>>;
  OR?: InputMaybe<Array<InventoryWhereInput>>;
  author?: InputMaybe<AuthorRelationFilter>;
  authorAuthor_id?: InputMaybe<UuidFilter>;
  entry_id?: InputMaybe<Scalars['String']['input']>;
  genre?: InputMaybe<EnumGenreNullableListFilter>;
  isbn?: InputMaybe<Scalars['String']['input']>;
  publication_date?: InputMaybe<DateTimeFilter>;
  title?: InputMaybe<StringFilter>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createManyAndReturnAuthor: Array<CreateManyAndReturnAuthor>;
  createManyAndReturnInventory: Array<CreateManyAndReturnInventory>;
  createManyAuthor: AffectedRowsOutput;
  createManyInventory: AffectedRowsOutput;
  createOneAuthor: Author;
  createOneInventory: Inventory;
  deleteManyAuthor: AffectedRowsOutput;
  deleteManyInventory: AffectedRowsOutput;
  deleteOneAuthor?: Maybe<Author>;
  deleteOneInventory?: Maybe<Inventory>;
  updateManyAuthor: AffectedRowsOutput;
  updateManyInventory: AffectedRowsOutput;
  updateOneAuthor?: Maybe<Author>;
  updateOneInventory?: Maybe<Inventory>;
  upsertOneAuthor: Author;
  upsertOneInventory: Inventory;
};


export type MutationCreateManyAndReturnAuthorArgs = {
  data: Array<AuthorCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationCreateManyAndReturnInventoryArgs = {
  data: Array<InventoryCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationCreateManyAuthorArgs = {
  data: Array<AuthorCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationCreateManyInventoryArgs = {
  data: Array<InventoryCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationCreateOneAuthorArgs = {
  data: AuthorCreateInput;
};


export type MutationCreateOneInventoryArgs = {
  data: InventoryCreateInput;
};


export type MutationDeleteManyAuthorArgs = {
  where?: InputMaybe<AuthorWhereInput>;
};


export type MutationDeleteManyInventoryArgs = {
  where?: InputMaybe<InventoryWhereInput>;
};


export type MutationDeleteOneAuthorArgs = {
  where: AuthorWhereUniqueInput;
};


export type MutationDeleteOneInventoryArgs = {
  where: InventoryWhereUniqueInput;
};


export type MutationUpdateManyAuthorArgs = {
  data: AuthorUpdateManyMutationInput;
  where?: InputMaybe<AuthorWhereInput>;
};


export type MutationUpdateManyInventoryArgs = {
  data: InventoryUpdateManyMutationInput;
  where?: InputMaybe<InventoryWhereInput>;
};


export type MutationUpdateOneAuthorArgs = {
  data: AuthorUpdateInput;
  where: AuthorWhereUniqueInput;
};


export type MutationUpdateOneInventoryArgs = {
  data: InventoryUpdateInput;
  where: InventoryWhereUniqueInput;
};


export type MutationUpsertOneAuthorArgs = {
  create: AuthorCreateInput;
  update: AuthorUpdateInput;
  where: AuthorWhereUniqueInput;
};


export type MutationUpsertOneInventoryArgs = {
  create: InventoryCreateInput;
  update: InventoryUpdateInput;
  where: InventoryWhereUniqueInput;
};

export type NestedDateTimeFilter = {
  equals?: InputMaybe<Scalars['DateTimeISO']['input']>;
  gt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  gte?: InputMaybe<Scalars['DateTimeISO']['input']>;
  in?: InputMaybe<Array<Scalars['DateTimeISO']['input']>>;
  lt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  lte?: InputMaybe<Scalars['DateTimeISO']['input']>;
  not?: InputMaybe<NestedDateTimeFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTimeISO']['input']>>;
};

export type NestedDateTimeWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedDateTimeFilter>;
  _min?: InputMaybe<NestedDateTimeFilter>;
  equals?: InputMaybe<Scalars['DateTimeISO']['input']>;
  gt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  gte?: InputMaybe<Scalars['DateTimeISO']['input']>;
  in?: InputMaybe<Array<Scalars['DateTimeISO']['input']>>;
  lt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  lte?: InputMaybe<Scalars['DateTimeISO']['input']>;
  not?: InputMaybe<NestedDateTimeWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTimeISO']['input']>>;
};

export type NestedIntFilter = {
  equals?: InputMaybe<Scalars['Int']['input']>;
  gt?: InputMaybe<Scalars['Int']['input']>;
  gte?: InputMaybe<Scalars['Int']['input']>;
  in?: InputMaybe<Array<Scalars['Int']['input']>>;
  lt?: InputMaybe<Scalars['Int']['input']>;
  lte?: InputMaybe<Scalars['Int']['input']>;
  not?: InputMaybe<NestedIntFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']['input']>>;
};

export type NestedIntNullableFilter = {
  equals?: InputMaybe<Scalars['Int']['input']>;
  gt?: InputMaybe<Scalars['Int']['input']>;
  gte?: InputMaybe<Scalars['Int']['input']>;
  in?: InputMaybe<Array<Scalars['Int']['input']>>;
  lt?: InputMaybe<Scalars['Int']['input']>;
  lte?: InputMaybe<Scalars['Int']['input']>;
  not?: InputMaybe<NestedIntNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']['input']>>;
};

export type NestedStringFilter = {
  contains?: InputMaybe<Scalars['String']['input']>;
  endsWith?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  not?: InputMaybe<NestedStringFilter>;
  notIn?: InputMaybe<Array<Scalars['String']['input']>>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

export type NestedStringNullableFilter = {
  contains?: InputMaybe<Scalars['String']['input']>;
  endsWith?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  not?: InputMaybe<NestedStringNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['String']['input']>>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

export type NestedStringNullableWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntNullableFilter>;
  _max?: InputMaybe<NestedStringNullableFilter>;
  _min?: InputMaybe<NestedStringNullableFilter>;
  contains?: InputMaybe<Scalars['String']['input']>;
  endsWith?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  not?: InputMaybe<NestedStringNullableWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['String']['input']>>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

export type NestedStringWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedStringFilter>;
  _min?: InputMaybe<NestedStringFilter>;
  contains?: InputMaybe<Scalars['String']['input']>;
  endsWith?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  not?: InputMaybe<NestedStringWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['String']['input']>>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

export type NestedUuidFilter = {
  equals?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  not?: InputMaybe<NestedUuidFilter>;
  notIn?: InputMaybe<Array<Scalars['String']['input']>>;
};

export type NestedUuidWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedStringFilter>;
  _min?: InputMaybe<NestedStringFilter>;
  equals?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  not?: InputMaybe<NestedUuidWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['String']['input']>>;
};

export type NullableStringFieldUpdateOperationsInput = {
  set?: InputMaybe<Scalars['String']['input']>;
};

export enum NullsOrder {
  First = 'first',
  Last = 'last'
}

export type Query = {
  __typename?: 'Query';
  aggregateAuthor: AggregateAuthor;
  aggregateInventory: AggregateInventory;
  author?: Maybe<Author>;
  authors: Array<Author>;
  findFirstAuthor?: Maybe<Author>;
  findFirstAuthorOrThrow?: Maybe<Author>;
  findFirstInventory?: Maybe<Inventory>;
  findFirstInventoryOrThrow?: Maybe<Inventory>;
  getAuthor?: Maybe<Author>;
  getInventory?: Maybe<Inventory>;
  groupByAuthor: Array<AuthorGroupBy>;
  groupByInventory: Array<InventoryGroupBy>;
  inventories: Array<Inventory>;
  inventory?: Maybe<Inventory>;
};


export type QueryAggregateAuthorArgs = {
  cursor?: InputMaybe<AuthorWhereUniqueInput>;
  orderBy?: InputMaybe<Array<AuthorOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<AuthorWhereInput>;
};


export type QueryAggregateInventoryArgs = {
  cursor?: InputMaybe<InventoryWhereUniqueInput>;
  orderBy?: InputMaybe<Array<InventoryOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<InventoryWhereInput>;
};


export type QueryAuthorArgs = {
  where: AuthorWhereUniqueInput;
};


export type QueryAuthorsArgs = {
  cursor?: InputMaybe<AuthorWhereUniqueInput>;
  distinct?: InputMaybe<Array<AuthorScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<AuthorOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<AuthorWhereInput>;
};


export type QueryFindFirstAuthorArgs = {
  cursor?: InputMaybe<AuthorWhereUniqueInput>;
  distinct?: InputMaybe<Array<AuthorScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<AuthorOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<AuthorWhereInput>;
};


export type QueryFindFirstAuthorOrThrowArgs = {
  cursor?: InputMaybe<AuthorWhereUniqueInput>;
  distinct?: InputMaybe<Array<AuthorScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<AuthorOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<AuthorWhereInput>;
};


export type QueryFindFirstInventoryArgs = {
  cursor?: InputMaybe<InventoryWhereUniqueInput>;
  distinct?: InputMaybe<Array<InventoryScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<InventoryOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<InventoryWhereInput>;
};


export type QueryFindFirstInventoryOrThrowArgs = {
  cursor?: InputMaybe<InventoryWhereUniqueInput>;
  distinct?: InputMaybe<Array<InventoryScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<InventoryOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<InventoryWhereInput>;
};


export type QueryGetAuthorArgs = {
  where: AuthorWhereUniqueInput;
};


export type QueryGetInventoryArgs = {
  where: InventoryWhereUniqueInput;
};


export type QueryGroupByAuthorArgs = {
  by: Array<AuthorScalarFieldEnum>;
  having?: InputMaybe<AuthorScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<AuthorOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<AuthorWhereInput>;
};


export type QueryGroupByInventoryArgs = {
  by: Array<InventoryScalarFieldEnum>;
  having?: InputMaybe<InventoryScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<InventoryOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<InventoryWhereInput>;
};


export type QueryInventoriesArgs = {
  cursor?: InputMaybe<InventoryWhereUniqueInput>;
  distinct?: InputMaybe<Array<InventoryScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<InventoryOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<InventoryWhereInput>;
};


export type QueryInventoryArgs = {
  where: InventoryWhereUniqueInput;
};

export enum QueryMode {
  Default = 'default',
  Insensitive = 'insensitive'
}

export enum SortOrder {
  Asc = 'asc',
  Desc = 'desc'
}

export type SortOrderInput = {
  nulls?: InputMaybe<NullsOrder>;
  sort: SortOrder;
};

export type StringFieldUpdateOperationsInput = {
  set?: InputMaybe<Scalars['String']['input']>;
};

export type StringFilter = {
  contains?: InputMaybe<Scalars['String']['input']>;
  endsWith?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  mode?: InputMaybe<QueryMode>;
  not?: InputMaybe<NestedStringFilter>;
  notIn?: InputMaybe<Array<Scalars['String']['input']>>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

export type StringNullableFilter = {
  contains?: InputMaybe<Scalars['String']['input']>;
  endsWith?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  mode?: InputMaybe<QueryMode>;
  not?: InputMaybe<NestedStringNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['String']['input']>>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

export type StringNullableWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntNullableFilter>;
  _max?: InputMaybe<NestedStringNullableFilter>;
  _min?: InputMaybe<NestedStringNullableFilter>;
  contains?: InputMaybe<Scalars['String']['input']>;
  endsWith?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  mode?: InputMaybe<QueryMode>;
  not?: InputMaybe<NestedStringNullableWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['String']['input']>>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

export type StringWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedStringFilter>;
  _min?: InputMaybe<NestedStringFilter>;
  contains?: InputMaybe<Scalars['String']['input']>;
  endsWith?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  mode?: InputMaybe<QueryMode>;
  not?: InputMaybe<NestedStringWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['String']['input']>>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

export type UuidFilter = {
  equals?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  mode?: InputMaybe<QueryMode>;
  not?: InputMaybe<NestedUuidFilter>;
  notIn?: InputMaybe<Array<Scalars['String']['input']>>;
};

export type UuidWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedStringFilter>;
  _min?: InputMaybe<NestedStringFilter>;
  equals?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  mode?: InputMaybe<QueryMode>;
  not?: InputMaybe<NestedUuidWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['String']['input']>>;
};

export type AuthorsQueryVariables = Exact<{ [key: string]: never; }>;


export type AuthorsQuery = { __typename?: 'Query', authors: Array<{ __typename?: 'Author', author_id: string, name: string, biography?: string | null, created_at: any, updated_at: any }> };


export const AuthorsDocument = gql`
    query Authors {
  authors {
    author_id
    name
    biography
    created_at
    updated_at
  }
}
    `;

/**
 * __useAuthorsQuery__
 *
 * To run a query within a React component, call `useAuthorsQuery` and pass it any options that fit your needs.
 * When your component renders, `useAuthorsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAuthorsQuery({
 *   variables: {
 *   },
 * });
 */
export function useAuthorsQuery(baseOptions?: Apollo.QueryHookOptions<AuthorsQuery, AuthorsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<AuthorsQuery, AuthorsQueryVariables>(AuthorsDocument, options);
      }
export function useAuthorsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<AuthorsQuery, AuthorsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<AuthorsQuery, AuthorsQueryVariables>(AuthorsDocument, options);
        }
export function useAuthorsSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<AuthorsQuery, AuthorsQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<AuthorsQuery, AuthorsQueryVariables>(AuthorsDocument, options);
        }
export type AuthorsQueryHookResult = ReturnType<typeof useAuthorsQuery>;
export type AuthorsLazyQueryHookResult = ReturnType<typeof useAuthorsLazyQuery>;
export type AuthorsSuspenseQueryHookResult = ReturnType<typeof useAuthorsSuspenseQuery>;
export type AuthorsQueryResult = Apollo.QueryResult<AuthorsQuery, AuthorsQueryVariables>;