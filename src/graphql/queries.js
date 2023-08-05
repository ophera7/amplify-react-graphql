/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getDistrict = /* GraphQL */ `
  query GetDistrict($id: ID!) {
    getDistrict(id: $id) {
      id
      ApprovedDistricts
      SoonToBeApprovedDistricts
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const listDistricts = /* GraphQL */ `
  query ListDistricts(
    $filter: ModelDistrictFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listDistricts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        ApprovedDistricts
        SoonToBeApprovedDistricts
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const syncDistricts = /* GraphQL */ `
  query SyncDistricts(
    $filter: ModelDistrictFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncDistricts(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        ApprovedDistricts
        SoonToBeApprovedDistricts
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const getCustomerSelect = /* GraphQL */ `
  query GetCustomerSelect($id: ID!) {
    getCustomerSelect(id: $id) {
      id
      Customer
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const listCustomerSelects = /* GraphQL */ `
  query ListCustomerSelects(
    $filter: ModelCustomerSelectFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCustomerSelects(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        Customer
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const syncCustomerSelects = /* GraphQL */ `
  query SyncCustomerSelects(
    $filter: ModelCustomerSelectFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncCustomerSelects(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        Customer
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const getTerritorySelect = /* GraphQL */ `
  query GetTerritorySelect($id: ID!) {
    getTerritorySelect(id: $id) {
      id
      Territory
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const listTerritorySelects = /* GraphQL */ `
  query ListTerritorySelects(
    $filter: ModelTerritorySelectFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTerritorySelects(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        Territory
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const syncTerritorySelects = /* GraphQL */ `
  query SyncTerritorySelects(
    $filter: ModelTerritorySelectFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncTerritorySelects(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        Territory
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      nextToken
      startedAt
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
      _version
      _deleted
      _lastChangedAt
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
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const syncNotes = /* GraphQL */ `
  query SyncNotes(
    $filter: ModelNoteFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncNotes(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        name
        description
        image
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const getAssessmentAccountDetails = /* GraphQL */ `
  query GetAssessmentAccountDetails($id: ID!) {
    getAssessmentAccountDetails(id: $id) {
      id
      AccountName
      AccountManagerName
      AccountSAName
      AccountSalesforceLink
      CustomerSalesConsoleLine
      ProServTrainingSpentT12M
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const listAssessmentAccountDetails = /* GraphQL */ `
  query ListAssessmentAccountDetails(
    $filter: ModelAssessmentAccountDetailsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAssessmentAccountDetails(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        AccountName
        AccountManagerName
        AccountSAName
        AccountSalesforceLink
        CustomerSalesConsoleLine
        ProServTrainingSpentT12M
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const syncAssessmentAccountDetails = /* GraphQL */ `
  query SyncAssessmentAccountDetails(
    $filter: ModelAssessmentAccountDetailsFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncAssessmentAccountDetails(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        AccountName
        AccountManagerName
        AccountSAName
        AccountSalesforceLink
        CustomerSalesConsoleLine
        ProServTrainingSpentT12M
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
