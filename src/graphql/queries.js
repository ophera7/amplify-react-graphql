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
      CustomerSalesConsoleLink
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
        CustomerSalesConsoleLink
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
        CustomerSalesConsoleLink
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
export const getGtoGEDescription = /* GraphQL */ `
  query GetGtoGEDescription($id: ID!) {
    getGtoGEDescription(id: $id) {
      id
      Company
      Quarter
      Date
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const listGtoGEDescriptions = /* GraphQL */ `
  query ListGtoGEDescriptions(
    $filter: ModelGtoGEDescriptionFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listGtoGEDescriptions(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        Company
        Quarter
        Date
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
export const syncGtoGEDescriptions = /* GraphQL */ `
  query SyncGtoGEDescriptions(
    $filter: ModelGtoGEDescriptionFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncGtoGEDescriptions(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        Company
        Quarter
        Date
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
export const getDimension = /* GraphQL */ `
  query GetDimension($id: ID!) {
    getDimension(id: $id) {
      id
      StrategicDrivers {
        id
        StrategicDrivers
        CultureOfInnovation {
          CultureOfInnovation
          CultureOfInnovationSessionDelivered
          AdditionalComments
          __typename
        }
        WorkingBackwards {
          WorkingBackwards
          WorkingBackwardsSessionDelivered
          AdditionalComments
          __typename
        }
        Governance {
          Governance
          Current
          TransitionRoadMap
          FutureState
          AdditionalComments
          __typename
        }
        StrategicITDirection {
          StrategicITDirection
          PrivateCloud
          HybridCloud
          AWSAllIn
          DigitalTransformation
          AdditionalComments
          __typename
        }
        UnderstandingofBusinessDriversandOutcomes {
          UnderstandingofBusinessDriversandOutcomes
          BuisnessDriver1
          BuisnessDriver2
          BuisnessDriver3
          AdditionalComments
          __typename
        }
        QuantificationofBusinessImpact {
          QuantificationofBusinessImpact
          BusinessImpactQuanitified
          PrimaryBenefit
          SecondaryBenefit
          AdditionalComments
          __typename
        }
        AdditionalComments
        __typename
      }
      CommericalReadiness {
        id
        CommercialReadiness
        NDA {
          NDA
          Stage
          AdditionalComments
          __typename
        }
        AWSSupportPlan {
          AWSSupportPlan
          SupportPlan
          AdditionalComments
          __typename
        }
        EA {
          EA
          Stage
          AdditionalComments
          __typename
        }
        PublicReference {
          PublicReference
          Stage
          AdditionalComments
          __typename
        }
        ExecutiveSponsor {
          ExecutiveSponsor
          AdditionalComments
          __typename
        }
        CCOE {
          CCOE
          NewCloudRolesDefine
          AppTeamEngagementProcessEstablished
          CCOEEstablishedCommunityofPractice
          CloudOperationalStructure
          CloudCareerPathDefined
          CCOEDefined
          AdditionalComments
          __typename
        }
        SecurityApproval {
          ApproverName
          Stage
          __typename
        }
        ProcurementFinanceApproval {
          ProcursementFinanceApproval
          AdditionalComments
          __typename
        }
        AdditionalComments
        __typename
      }
      TechnicalReadiness {
        id
        TechnicalReadiness
        AWSValuePropositionOverview {
          AWSValuePropositionOverview
          AdditionalComments
          Stage
          __typename
        }
        AWSWARSessionorArchitecturalReview {
          AWSWARSessionorArchitecturalReview
          AdditionalComments
          Stage
          __typename
        }
        AWSImmersionDays {
          AWSImmersionDays
          AdvancedImmersionDays
          AdditionalComments
          __typename
        }
        AWSTraining {
          AWSTraining
          AdditionalComments
          __typename
        }
        TechnicalDeepDiveWhiteBoarding {
          TechnicalDeepDiveWhiteBoarding
          AddditonalComments
          __typename
        }
        CostAssessmentTCOorWorkloadCostEstimateAWSCE {
          CostAssessmentTCOorWorkloadCostEstimateAWSCE
          AdditionalComments
          __typename
        }
        IntroductiontoIncentivePrograms {
          IntroductiontoIncentivePrograms
          Stage
          AdditionalComments
          __typename
        }
        PartnerProServeIntroduction {
          PartnerProServeIntroduction
          Stage
          AdditonalComments
          __typename
        }
        ControlTowerDeployementorSimilarGovernance {
          ControlTowerDeployementorSimilarGovernance
          Deployment
          AdditionalComments
          __typename
        }
        Networking {
          Networking
          AdditionalComments
          __typename
        }
        Security {
          ApproverName
          Stage
          __typename
        }
        Adoption {
          Adoption
          AdditionalComments
          __typename
        }
        AdditionalComments
        __typename
      }
      OverallReadiness
      AssessmentAccountDetails {
        id
        AccountName
        AccountManagerName
        AccountSAName
        AccountSalesforceLink
        CustomerSalesConsoleLink
        ProServTrainingSpentT12M
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      dimensionAssessmentAccountDetailsId
      __typename
    }
  }
`;
export const listDimensions = /* GraphQL */ `
  query ListDimensions(
    $filter: ModelDimensionFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listDimensions(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        StrategicDrivers {
          id
          StrategicDrivers
          AdditionalComments
          __typename
        }
        CommericalReadiness {
          id
          CommercialReadiness
          AdditionalComments
          __typename
        }
        TechnicalReadiness {
          id
          TechnicalReadiness
          AdditionalComments
          __typename
        }
        OverallReadiness
        AssessmentAccountDetails {
          id
          AccountName
          AccountManagerName
          AccountSAName
          AccountSalesforceLink
          CustomerSalesConsoleLink
          ProServTrainingSpentT12M
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        dimensionAssessmentAccountDetailsId
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const syncDimensions = /* GraphQL */ `
  query SyncDimensions(
    $filter: ModelDimensionFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncDimensions(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        StrategicDrivers {
          id
          StrategicDrivers
          AdditionalComments
          __typename
        }
        CommericalReadiness {
          id
          CommercialReadiness
          AdditionalComments
          __typename
        }
        TechnicalReadiness {
          id
          TechnicalReadiness
          AdditionalComments
          __typename
        }
        OverallReadiness
        AssessmentAccountDetails {
          id
          AccountName
          AccountManagerName
          AccountSAName
          AccountSalesforceLink
          CustomerSalesConsoleLink
          ProServTrainingSpentT12M
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        dimensionAssessmentAccountDetailsId
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
