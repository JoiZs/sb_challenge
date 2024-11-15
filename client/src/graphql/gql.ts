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

export type CreateOneAuthorMutationVariables = Exact<{
  data: AuthorCreateInput;
}>;


export type CreateOneAuthorMutation = { __typename?: 'Mutation', createOneAuthor: { __typename?: 'Author', author_id: string, name: string, biography?: string | null, _count?: { __typename?: 'AuthorCount', Inventory: number } | null } };

export type CreateOneInventoryMutationVariables = Exact<{
  data: InventoryCreateInput;
}>;


export type CreateOneInventoryMutation = { __typename?: 'Mutation', createOneInventory: { __typename?: 'Inventory', title: string, entry_id: string, genre: Array<Genre>, isbn: string, publication_date: any, author: { __typename?: 'Author', name: string } } };

export type DeleteManyAuthorMutationVariables = Exact<{
  where?: InputMaybe<AuthorWhereInput>;
}>;


export type DeleteManyAuthorMutation = { __typename?: 'Mutation', deleteManyAuthor: { __typename?: 'AffectedRowsOutput', count: number } };

export type DeleteManyInventoryMutationVariables = Exact<{
  where?: InputMaybe<InventoryWhereInput>;
}>;


export type DeleteManyInventoryMutation = { __typename?: 'Mutation', deleteManyInventory: { __typename?: 'AffectedRowsOutput', count: number } };

export type UpdateOneAuthorMutationVariables = Exact<{
  data: AuthorUpdateInput;
  where: AuthorWhereUniqueInput;
}>;


export type UpdateOneAuthorMutation = { __typename?: 'Mutation', updateOneAuthor?: { __typename?: 'Author', author_id: string, biography?: string | null, name: string } | null };

export type UpdateOneInventoryMutationVariables = Exact<{
  data: InventoryUpdateInput;
  where: InventoryWhereUniqueInput;
}>;


export type UpdateOneInventoryMutation = { __typename?: 'Mutation', updateOneInventory?: { __typename?: 'Inventory', title: string, isbn: string, genre: Array<Genre>, publication_date: any, entry_id: string, author: { __typename?: 'Author', name: string } } | null };

export type QueryBooksQueryVariables = Exact<{
  take?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<InventoryOrderByWithRelationInput> | InventoryOrderByWithRelationInput>;
  where?: InputMaybe<InventoryWhereInput>;
}>;


export type QueryBooksQuery = { __typename?: 'Query', inventories: Array<{ __typename?: 'Inventory', entry_id: string, title: string, genre: Array<Genre>, publication_date: any, isbn: string, author: { __typename?: 'Author', name: string } }> };

export type QueryAuthorsQueryVariables = Exact<{
  take?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<AuthorOrderByWithRelationInput> | AuthorOrderByWithRelationInput>;
  where?: InputMaybe<AuthorWhereInput>;
}>;


export type QueryAuthorsQuery = { __typename?: 'Query', authors: Array<{ __typename?: 'Author', author_id: string, name: string, biography?: string | null, _count?: { __typename?: 'AuthorCount', Inventory: number } | null }> };

export type AuthorSearchQueryVariables = Exact<{
  where?: InputMaybe<AuthorWhereInput>;
  take?: InputMaybe<Scalars['Int']['input']>;
}>;


export type AuthorSearchQuery = { __typename?: 'Query', authors: Array<{ __typename?: 'Author', name: string, author_id: string }> };

export type AuthorCheckQueryVariables = Exact<{
  where?: InputMaybe<AuthorWhereInput>;
}>;


export type AuthorCheckQuery = { __typename?: 'Query', findFirstAuthorOrThrow?: { __typename?: 'Author', author_id: string } | null };


export const CreateOneAuthorDocument = gql`
    mutation CreateOneAuthor($data: AuthorCreateInput!) {
  createOneAuthor(data: $data) {
    author_id
    name
    biography
    _count {
      Inventory
    }
  }
}
    `;
export type CreateOneAuthorMutationFn = Apollo.MutationFunction<CreateOneAuthorMutation, CreateOneAuthorMutationVariables>;

/**
 * __useCreateOneAuthorMutation__
 *
 * To run a mutation, you first call `useCreateOneAuthorMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateOneAuthorMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createOneAuthorMutation, { data, loading, error }] = useCreateOneAuthorMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useCreateOneAuthorMutation(baseOptions?: Apollo.MutationHookOptions<CreateOneAuthorMutation, CreateOneAuthorMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateOneAuthorMutation, CreateOneAuthorMutationVariables>(CreateOneAuthorDocument, options);
      }
export type CreateOneAuthorMutationHookResult = ReturnType<typeof useCreateOneAuthorMutation>;
export type CreateOneAuthorMutationResult = Apollo.MutationResult<CreateOneAuthorMutation>;
export type CreateOneAuthorMutationOptions = Apollo.BaseMutationOptions<CreateOneAuthorMutation, CreateOneAuthorMutationVariables>;
export const CreateOneInventoryDocument = gql`
    mutation CreateOneInventory($data: InventoryCreateInput!) {
  createOneInventory(data: $data) {
    author {
      name
    }
    title
    entry_id
    genre
    isbn
    publication_date
  }
}
    `;
export type CreateOneInventoryMutationFn = Apollo.MutationFunction<CreateOneInventoryMutation, CreateOneInventoryMutationVariables>;

/**
 * __useCreateOneInventoryMutation__
 *
 * To run a mutation, you first call `useCreateOneInventoryMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateOneInventoryMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createOneInventoryMutation, { data, loading, error }] = useCreateOneInventoryMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useCreateOneInventoryMutation(baseOptions?: Apollo.MutationHookOptions<CreateOneInventoryMutation, CreateOneInventoryMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateOneInventoryMutation, CreateOneInventoryMutationVariables>(CreateOneInventoryDocument, options);
      }
export type CreateOneInventoryMutationHookResult = ReturnType<typeof useCreateOneInventoryMutation>;
export type CreateOneInventoryMutationResult = Apollo.MutationResult<CreateOneInventoryMutation>;
export type CreateOneInventoryMutationOptions = Apollo.BaseMutationOptions<CreateOneInventoryMutation, CreateOneInventoryMutationVariables>;
export const DeleteManyAuthorDocument = gql`
    mutation DeleteManyAuthor($where: AuthorWhereInput) {
  deleteManyAuthor(where: $where) {
    count
  }
}
    `;
export type DeleteManyAuthorMutationFn = Apollo.MutationFunction<DeleteManyAuthorMutation, DeleteManyAuthorMutationVariables>;

/**
 * __useDeleteManyAuthorMutation__
 *
 * To run a mutation, you first call `useDeleteManyAuthorMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteManyAuthorMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteManyAuthorMutation, { data, loading, error }] = useDeleteManyAuthorMutation({
 *   variables: {
 *      where: // value for 'where'
 *   },
 * });
 */
export function useDeleteManyAuthorMutation(baseOptions?: Apollo.MutationHookOptions<DeleteManyAuthorMutation, DeleteManyAuthorMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteManyAuthorMutation, DeleteManyAuthorMutationVariables>(DeleteManyAuthorDocument, options);
      }
export type DeleteManyAuthorMutationHookResult = ReturnType<typeof useDeleteManyAuthorMutation>;
export type DeleteManyAuthorMutationResult = Apollo.MutationResult<DeleteManyAuthorMutation>;
export type DeleteManyAuthorMutationOptions = Apollo.BaseMutationOptions<DeleteManyAuthorMutation, DeleteManyAuthorMutationVariables>;
export const DeleteManyInventoryDocument = gql`
    mutation DeleteManyInventory($where: InventoryWhereInput) {
  deleteManyInventory(where: $where) {
    count
  }
}
    `;
export type DeleteManyInventoryMutationFn = Apollo.MutationFunction<DeleteManyInventoryMutation, DeleteManyInventoryMutationVariables>;

/**
 * __useDeleteManyInventoryMutation__
 *
 * To run a mutation, you first call `useDeleteManyInventoryMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteManyInventoryMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteManyInventoryMutation, { data, loading, error }] = useDeleteManyInventoryMutation({
 *   variables: {
 *      where: // value for 'where'
 *   },
 * });
 */
export function useDeleteManyInventoryMutation(baseOptions?: Apollo.MutationHookOptions<DeleteManyInventoryMutation, DeleteManyInventoryMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteManyInventoryMutation, DeleteManyInventoryMutationVariables>(DeleteManyInventoryDocument, options);
      }
export type DeleteManyInventoryMutationHookResult = ReturnType<typeof useDeleteManyInventoryMutation>;
export type DeleteManyInventoryMutationResult = Apollo.MutationResult<DeleteManyInventoryMutation>;
export type DeleteManyInventoryMutationOptions = Apollo.BaseMutationOptions<DeleteManyInventoryMutation, DeleteManyInventoryMutationVariables>;
export const UpdateOneAuthorDocument = gql`
    mutation UpdateOneAuthor($data: AuthorUpdateInput!, $where: AuthorWhereUniqueInput!) {
  updateOneAuthor(data: $data, where: $where) {
    author_id
    biography
    name
  }
}
    `;
export type UpdateOneAuthorMutationFn = Apollo.MutationFunction<UpdateOneAuthorMutation, UpdateOneAuthorMutationVariables>;

/**
 * __useUpdateOneAuthorMutation__
 *
 * To run a mutation, you first call `useUpdateOneAuthorMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateOneAuthorMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateOneAuthorMutation, { data, loading, error }] = useUpdateOneAuthorMutation({
 *   variables: {
 *      data: // value for 'data'
 *      where: // value for 'where'
 *   },
 * });
 */
export function useUpdateOneAuthorMutation(baseOptions?: Apollo.MutationHookOptions<UpdateOneAuthorMutation, UpdateOneAuthorMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateOneAuthorMutation, UpdateOneAuthorMutationVariables>(UpdateOneAuthorDocument, options);
      }
export type UpdateOneAuthorMutationHookResult = ReturnType<typeof useUpdateOneAuthorMutation>;
export type UpdateOneAuthorMutationResult = Apollo.MutationResult<UpdateOneAuthorMutation>;
export type UpdateOneAuthorMutationOptions = Apollo.BaseMutationOptions<UpdateOneAuthorMutation, UpdateOneAuthorMutationVariables>;
export const UpdateOneInventoryDocument = gql`
    mutation UpdateOneInventory($data: InventoryUpdateInput!, $where: InventoryWhereUniqueInput!) {
  updateOneInventory(data: $data, where: $where) {
    title
    author {
      name
    }
    isbn
    genre
    publication_date
    entry_id
  }
}
    `;
export type UpdateOneInventoryMutationFn = Apollo.MutationFunction<UpdateOneInventoryMutation, UpdateOneInventoryMutationVariables>;

/**
 * __useUpdateOneInventoryMutation__
 *
 * To run a mutation, you first call `useUpdateOneInventoryMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateOneInventoryMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateOneInventoryMutation, { data, loading, error }] = useUpdateOneInventoryMutation({
 *   variables: {
 *      data: // value for 'data'
 *      where: // value for 'where'
 *   },
 * });
 */
export function useUpdateOneInventoryMutation(baseOptions?: Apollo.MutationHookOptions<UpdateOneInventoryMutation, UpdateOneInventoryMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateOneInventoryMutation, UpdateOneInventoryMutationVariables>(UpdateOneInventoryDocument, options);
      }
export type UpdateOneInventoryMutationHookResult = ReturnType<typeof useUpdateOneInventoryMutation>;
export type UpdateOneInventoryMutationResult = Apollo.MutationResult<UpdateOneInventoryMutation>;
export type UpdateOneInventoryMutationOptions = Apollo.BaseMutationOptions<UpdateOneInventoryMutation, UpdateOneInventoryMutationVariables>;
export const QueryBooksDocument = gql`
    query QueryBooks($take: Int, $skip: Int, $orderBy: [InventoryOrderByWithRelationInput!], $where: InventoryWhereInput) {
  inventories(take: $take, skip: $skip, orderBy: $orderBy, where: $where) {
    entry_id
    title
    author {
      name
    }
    genre
    publication_date
    isbn
  }
}
    `;

/**
 * __useQueryBooksQuery__
 *
 * To run a query within a React component, call `useQueryBooksQuery` and pass it any options that fit your needs.
 * When your component renders, `useQueryBooksQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useQueryBooksQuery({
 *   variables: {
 *      take: // value for 'take'
 *      skip: // value for 'skip'
 *      orderBy: // value for 'orderBy'
 *      where: // value for 'where'
 *   },
 * });
 */
export function useQueryBooksQuery(baseOptions?: Apollo.QueryHookOptions<QueryBooksQuery, QueryBooksQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<QueryBooksQuery, QueryBooksQueryVariables>(QueryBooksDocument, options);
      }
export function useQueryBooksLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<QueryBooksQuery, QueryBooksQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<QueryBooksQuery, QueryBooksQueryVariables>(QueryBooksDocument, options);
        }
export function useQueryBooksSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<QueryBooksQuery, QueryBooksQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<QueryBooksQuery, QueryBooksQueryVariables>(QueryBooksDocument, options);
        }
export type QueryBooksQueryHookResult = ReturnType<typeof useQueryBooksQuery>;
export type QueryBooksLazyQueryHookResult = ReturnType<typeof useQueryBooksLazyQuery>;
export type QueryBooksSuspenseQueryHookResult = ReturnType<typeof useQueryBooksSuspenseQuery>;
export type QueryBooksQueryResult = Apollo.QueryResult<QueryBooksQuery, QueryBooksQueryVariables>;
export const QueryAuthorsDocument = gql`
    query QueryAuthors($take: Int, $skip: Int, $orderBy: [AuthorOrderByWithRelationInput!], $where: AuthorWhereInput) {
  authors(take: $take, skip: $skip, orderBy: $orderBy, where: $where) {
    author_id
    name
    biography
    _count {
      Inventory
    }
  }
}
    `;

/**
 * __useQueryAuthorsQuery__
 *
 * To run a query within a React component, call `useQueryAuthorsQuery` and pass it any options that fit your needs.
 * When your component renders, `useQueryAuthorsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useQueryAuthorsQuery({
 *   variables: {
 *      take: // value for 'take'
 *      skip: // value for 'skip'
 *      orderBy: // value for 'orderBy'
 *      where: // value for 'where'
 *   },
 * });
 */
export function useQueryAuthorsQuery(baseOptions?: Apollo.QueryHookOptions<QueryAuthorsQuery, QueryAuthorsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<QueryAuthorsQuery, QueryAuthorsQueryVariables>(QueryAuthorsDocument, options);
      }
export function useQueryAuthorsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<QueryAuthorsQuery, QueryAuthorsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<QueryAuthorsQuery, QueryAuthorsQueryVariables>(QueryAuthorsDocument, options);
        }
export function useQueryAuthorsSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<QueryAuthorsQuery, QueryAuthorsQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<QueryAuthorsQuery, QueryAuthorsQueryVariables>(QueryAuthorsDocument, options);
        }
export type QueryAuthorsQueryHookResult = ReturnType<typeof useQueryAuthorsQuery>;
export type QueryAuthorsLazyQueryHookResult = ReturnType<typeof useQueryAuthorsLazyQuery>;
export type QueryAuthorsSuspenseQueryHookResult = ReturnType<typeof useQueryAuthorsSuspenseQuery>;
export type QueryAuthorsQueryResult = Apollo.QueryResult<QueryAuthorsQuery, QueryAuthorsQueryVariables>;
export const AuthorSearchDocument = gql`
    query AuthorSearch($where: AuthorWhereInput, $take: Int) {
  authors(where: $where, take: $take) {
    name
    author_id
  }
}
    `;

/**
 * __useAuthorSearchQuery__
 *
 * To run a query within a React component, call `useAuthorSearchQuery` and pass it any options that fit your needs.
 * When your component renders, `useAuthorSearchQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAuthorSearchQuery({
 *   variables: {
 *      where: // value for 'where'
 *      take: // value for 'take'
 *   },
 * });
 */
export function useAuthorSearchQuery(baseOptions?: Apollo.QueryHookOptions<AuthorSearchQuery, AuthorSearchQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<AuthorSearchQuery, AuthorSearchQueryVariables>(AuthorSearchDocument, options);
      }
export function useAuthorSearchLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<AuthorSearchQuery, AuthorSearchQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<AuthorSearchQuery, AuthorSearchQueryVariables>(AuthorSearchDocument, options);
        }
export function useAuthorSearchSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<AuthorSearchQuery, AuthorSearchQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<AuthorSearchQuery, AuthorSearchQueryVariables>(AuthorSearchDocument, options);
        }
export type AuthorSearchQueryHookResult = ReturnType<typeof useAuthorSearchQuery>;
export type AuthorSearchLazyQueryHookResult = ReturnType<typeof useAuthorSearchLazyQuery>;
export type AuthorSearchSuspenseQueryHookResult = ReturnType<typeof useAuthorSearchSuspenseQuery>;
export type AuthorSearchQueryResult = Apollo.QueryResult<AuthorSearchQuery, AuthorSearchQueryVariables>;
export const AuthorCheckDocument = gql`
    query AuthorCheck($where: AuthorWhereInput) {
  findFirstAuthorOrThrow(where: $where) {
    author_id
  }
}
    `;

/**
 * __useAuthorCheckQuery__
 *
 * To run a query within a React component, call `useAuthorCheckQuery` and pass it any options that fit your needs.
 * When your component renders, `useAuthorCheckQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAuthorCheckQuery({
 *   variables: {
 *      where: // value for 'where'
 *   },
 * });
 */
export function useAuthorCheckQuery(baseOptions?: Apollo.QueryHookOptions<AuthorCheckQuery, AuthorCheckQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<AuthorCheckQuery, AuthorCheckQueryVariables>(AuthorCheckDocument, options);
      }
export function useAuthorCheckLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<AuthorCheckQuery, AuthorCheckQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<AuthorCheckQuery, AuthorCheckQueryVariables>(AuthorCheckDocument, options);
        }
export function useAuthorCheckSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<AuthorCheckQuery, AuthorCheckQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<AuthorCheckQuery, AuthorCheckQueryVariables>(AuthorCheckDocument, options);
        }
export type AuthorCheckQueryHookResult = ReturnType<typeof useAuthorCheckQuery>;
export type AuthorCheckLazyQueryHookResult = ReturnType<typeof useAuthorCheckLazyQuery>;
export type AuthorCheckSuspenseQueryHookResult = ReturnType<typeof useAuthorCheckSuspenseQuery>;
export type AuthorCheckQueryResult = Apollo.QueryResult<AuthorCheckQuery, AuthorCheckQueryVariables>;