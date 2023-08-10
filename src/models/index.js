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

const Cusomter = {
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

const FutureState = {
  "WATERFALL": "WATERFALL",
  "AGILE": "AGILE",
  "ATTAINED": "ATTAINED"
};

const CurrentState = {
  "WATERFALL": "WATERFALL",
  "AGILE": "AGILE"
};

const Stage4 = {
  "INPROCESS": "INPROCESS",
  "COMPLETED": "COMPLETED"
};

const Stage3 = {
  "DEPLOYED": "DEPLOYED",
  "WAITINGCUSTOMERACTION": "WAITINGCUSTOMERACTION",
  "WAITINGONPARTNER": "WAITINGONPARTNER"
};

const Stage2 = {
  "ASSESSMENT": "ASSESSMENT",
  "INTRODUCTION": "INTRODUCTION",
  "NEXTSTEPS": "NEXTSTEPS"
};

const Stage1 = {
  "INTRODUCTION": "INTRODUCTION",
  "SCHEDULED": "SCHEDULED",
  "DELIVERED": "DELIVERED"
};

const { District, CustomerSelect, TerritorySelect, Note, AssessmentAccountDetails, GtoGEDescription, Dimension, QuantificationofBusinessImpact, UnderstandingofBusinessDriversandOutcomes, StrategicITDirection, Governance, WorkingBackwards, CultureOfInnovation, ProcurementFinanceApprovalforSpent, ProcurementFinanceApproval, SecurityApprovalforPRODWorkloads, SecurityApproval, CCOE, AWSChampions, ExecutiveSponsor, PublicReference, EA, AWSSupportPlan, NDA, StagesofAdoption, Adoption, AdditonalServices, CoreServices, Security, CurrentSetupandISVDetails, Networking, ControlTowerDeployementorSimilarGovernance, PartnerProServeIntroduction, IntroductiontoIncentivePrograms, TCODetailsorAWSCCURL, CostAssessmentTCOorWorkloadCostEstimateAWSCE, WorkloadDeepDiveDiscussion, TechnicalDeepDiveWhiteBoarding, TrainingSessionCompleted, AWSTraining, FoundationalImmersionDays, AWSImmersionDays, AWSWARSessionorArchitecturalReview, AWSValuePropositionOverview, CommericalReadiness, StrategicDrivers, TechnicalReadiness } = initSchema(schema);

export {
  District,
  CustomerSelect,
  TerritorySelect,
  Note,
  AssessmentAccountDetails,
  GtoGEDescription,
  Dimension,
  SoonToBeApprovedDistricts,
  ApprovedDistrictList,
  Cusomter,
  Territory,
  FutureState,
  CurrentState,
  Stage4,
  Stage3,
  Stage2,
  Stage1,
  QuantificationofBusinessImpact,
  UnderstandingofBusinessDriversandOutcomes,
  StrategicITDirection,
  Governance,
  WorkingBackwards,
  CultureOfInnovation,
  ProcurementFinanceApprovalforSpent,
  ProcurementFinanceApproval,
  SecurityApprovalforPRODWorkloads,
  SecurityApproval,
  CCOE,
  AWSChampions,
  ExecutiveSponsor,
  PublicReference,
  EA,
  AWSSupportPlan,
  NDA,
  StagesofAdoption,
  Adoption,
  AdditonalServices,
  CoreServices,
  Security,
  CurrentSetupandISVDetails,
  Networking,
  ControlTowerDeployementorSimilarGovernance,
  PartnerProServeIntroduction,
  IntroductiontoIncentivePrograms,
  TCODetailsorAWSCCURL,
  CostAssessmentTCOorWorkloadCostEstimateAWSCE,
  WorkloadDeepDiveDiscussion,
  TechnicalDeepDiveWhiteBoarding,
  TrainingSessionCompleted,
  AWSTraining,
  FoundationalImmersionDays,
  AWSImmersionDays,
  AWSWARSessionorArchitecturalReview,
  AWSValuePropositionOverview,
  CommericalReadiness,
  StrategicDrivers,
  TechnicalReadiness
};