/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createDistrict = /* GraphQL */ `
  mutation CreateDistrict(
    $input: CreateDistrictInput!
    $condition: ModelDistrictConditionInput
  ) {
    createDistrict(input: $input, condition: $condition) {
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
export const updateDistrict = /* GraphQL */ `
  mutation UpdateDistrict(
    $input: UpdateDistrictInput!
    $condition: ModelDistrictConditionInput
  ) {
    updateDistrict(input: $input, condition: $condition) {
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
export const deleteDistrict = /* GraphQL */ `
  mutation DeleteDistrict(
    $input: DeleteDistrictInput!
    $condition: ModelDistrictConditionInput
  ) {
    deleteDistrict(input: $input, condition: $condition) {
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
export const createCustomerSelect = /* GraphQL */ `
  mutation CreateCustomerSelect(
    $input: CreateCustomerSelectInput!
    $condition: ModelCustomerSelectConditionInput
  ) {
    createCustomerSelect(input: $input, condition: $condition) {
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
export const updateCustomerSelect = /* GraphQL */ `
  mutation UpdateCustomerSelect(
    $input: UpdateCustomerSelectInput!
    $condition: ModelCustomerSelectConditionInput
  ) {
    updateCustomerSelect(input: $input, condition: $condition) {
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
export const deleteCustomerSelect = /* GraphQL */ `
  mutation DeleteCustomerSelect(
    $input: DeleteCustomerSelectInput!
    $condition: ModelCustomerSelectConditionInput
  ) {
    deleteCustomerSelect(input: $input, condition: $condition) {
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
export const createTerritorySelect = /* GraphQL */ `
  mutation CreateTerritorySelect(
    $input: CreateTerritorySelectInput!
    $condition: ModelTerritorySelectConditionInput
  ) {
    createTerritorySelect(input: $input, condition: $condition) {
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
export const updateTerritorySelect = /* GraphQL */ `
  mutation UpdateTerritorySelect(
    $input: UpdateTerritorySelectInput!
    $condition: ModelTerritorySelectConditionInput
  ) {
    updateTerritorySelect(input: $input, condition: $condition) {
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
export const deleteTerritorySelect = /* GraphQL */ `
  mutation DeleteTerritorySelect(
    $input: DeleteTerritorySelectInput!
    $condition: ModelTerritorySelectConditionInput
  ) {
    deleteTerritorySelect(input: $input, condition: $condition) {
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
export const createNote = /* GraphQL */ `
  mutation CreateNote(
    $input: CreateNoteInput!
    $condition: ModelNoteConditionInput
  ) {
    createNote(input: $input, condition: $condition) {
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
export const updateNote = /* GraphQL */ `
  mutation UpdateNote(
    $input: UpdateNoteInput!
    $condition: ModelNoteConditionInput
  ) {
    updateNote(input: $input, condition: $condition) {
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
export const deleteNote = /* GraphQL */ `
  mutation DeleteNote(
    $input: DeleteNoteInput!
    $condition: ModelNoteConditionInput
  ) {
    deleteNote(input: $input, condition: $condition) {
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
export const createAssessmentAccountDetails = /* GraphQL */ `
  mutation CreateAssessmentAccountDetails(
    $input: CreateAssessmentAccountDetailsInput!
    $condition: ModelAssessmentAccountDetailsConditionInput
  ) {
    createAssessmentAccountDetails(input: $input, condition: $condition) {
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
export const updateAssessmentAccountDetails = /* GraphQL */ `
  mutation UpdateAssessmentAccountDetails(
    $input: UpdateAssessmentAccountDetailsInput!
    $condition: ModelAssessmentAccountDetailsConditionInput
  ) {
    updateAssessmentAccountDetails(input: $input, condition: $condition) {
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
export const deleteAssessmentAccountDetails = /* GraphQL */ `
  mutation DeleteAssessmentAccountDetails(
    $input: DeleteAssessmentAccountDetailsInput!
    $condition: ModelAssessmentAccountDetailsConditionInput
  ) {
    deleteAssessmentAccountDetails(input: $input, condition: $condition) {
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
export const createGtoGEDescription = /* GraphQL */ `
  mutation CreateGtoGEDescription(
    $input: CreateGtoGEDescriptionInput!
    $condition: ModelGtoGEDescriptionConditionInput
  ) {
    createGtoGEDescription(input: $input, condition: $condition) {
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
export const updateGtoGEDescription = /* GraphQL */ `
  mutation UpdateGtoGEDescription(
    $input: UpdateGtoGEDescriptionInput!
    $condition: ModelGtoGEDescriptionConditionInput
  ) {
    updateGtoGEDescription(input: $input, condition: $condition) {
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
export const deleteGtoGEDescription = /* GraphQL */ `
  mutation DeleteGtoGEDescription(
    $input: DeleteGtoGEDescriptionInput!
    $condition: ModelGtoGEDescriptionConditionInput
  ) {
    deleteGtoGEDescription(input: $input, condition: $condition) {
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
export const createDimension = /* GraphQL */ `
  mutation CreateDimension(
    $input: CreateDimensionInput!
    $condition: ModelDimensionConditionInput
  ) {
    createDimension(input: $input, condition: $condition) {
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
export const updateDimension = /* GraphQL */ `
  mutation UpdateDimension(
    $input: UpdateDimensionInput!
    $condition: ModelDimensionConditionInput
  ) {
    updateDimension(input: $input, condition: $condition) {
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
export const deleteDimension = /* GraphQL */ `
  mutation DeleteDimension(
    $input: DeleteDimensionInput!
    $condition: ModelDimensionConditionInput
  ) {
    deleteDimension(input: $input, condition: $condition) {
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
