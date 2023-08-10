import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled, AsyncItem } from "@aws-amplify/datastore";

export enum SoonToBeApprovedDistricts {
  GULFCOAST = "GULFCOAST",
  NORTHCENTRAL = "NORTHCENTRAL",
  SOUTHCENTRAL = "SOUTHCENTRAL",
  OHIOVALLEY = "OHIOVALLEY"
}

export enum ApprovedDistrictList {
  MIDWEST = "MIDWEST"
}

export enum Cusomter {
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

export enum FutureState {
  WATERFALL = "WATERFALL",
  AGILE = "AGILE",
  ATTAINED = "ATTAINED"
}

export enum CurrentState {
  WATERFALL = "WATERFALL",
  AGILE = "AGILE"
}

export enum Stage4 {
  INPROCESS = "INPROCESS",
  COMPLETED = "COMPLETED"
}

export enum Stage3 {
  DEPLOYED = "DEPLOYED",
  WAITINGCUSTOMERACTION = "WAITINGCUSTOMERACTION",
  WAITINGONPARTNER = "WAITINGONPARTNER"
}

export enum Stage2 {
  ASSESSMENT = "ASSESSMENT",
  INTRODUCTION = "INTRODUCTION",
  NEXTSTEPS = "NEXTSTEPS"
}

export enum Stage1 {
  INTRODUCTION = "INTRODUCTION",
  SCHEDULED = "SCHEDULED",
  DELIVERED = "DELIVERED"
}

type EagerQuantificationofBusinessImpact = {
  readonly QuantificationofBusinessImpact?: number | null;
  readonly BusinessImpactQuanitified?: string | null;
  readonly PrimaryBenefit?: string | null;
  readonly SecondaryBenefit?: string | null;
  readonly AdditionalComments?: string | null;
}

type LazyQuantificationofBusinessImpact = {
  readonly QuantificationofBusinessImpact?: number | null;
  readonly BusinessImpactQuanitified?: string | null;
  readonly PrimaryBenefit?: string | null;
  readonly SecondaryBenefit?: string | null;
  readonly AdditionalComments?: string | null;
}

export declare type QuantificationofBusinessImpact = LazyLoading extends LazyLoadingDisabled ? EagerQuantificationofBusinessImpact : LazyQuantificationofBusinessImpact

export declare const QuantificationofBusinessImpact: (new (init: ModelInit<QuantificationofBusinessImpact>) => QuantificationofBusinessImpact)

type EagerUnderstandingofBusinessDriversandOutcomes = {
  readonly UnderstandingofBusinessDriversandOutcomes?: number | null;
  readonly BuisnessDriver1?: string | null;
  readonly BuisnessDriver2?: string | null;
  readonly BuisnessDriver3?: string | null;
  readonly AdditionalComments?: string | null;
}

type LazyUnderstandingofBusinessDriversandOutcomes = {
  readonly UnderstandingofBusinessDriversandOutcomes?: number | null;
  readonly BuisnessDriver1?: string | null;
  readonly BuisnessDriver2?: string | null;
  readonly BuisnessDriver3?: string | null;
  readonly AdditionalComments?: string | null;
}

export declare type UnderstandingofBusinessDriversandOutcomes = LazyLoading extends LazyLoadingDisabled ? EagerUnderstandingofBusinessDriversandOutcomes : LazyUnderstandingofBusinessDriversandOutcomes

export declare const UnderstandingofBusinessDriversandOutcomes: (new (init: ModelInit<UnderstandingofBusinessDriversandOutcomes>) => UnderstandingofBusinessDriversandOutcomes)

type EagerStrategicITDirection = {
  readonly StrategicITDirection?: number | null;
  readonly PrivateCloud?: boolean | null;
  readonly HybridCloud?: boolean | null;
  readonly AWSAllIn?: boolean | null;
  readonly DigitalTransformation?: boolean | null;
  readonly AdditionalComments?: string | null;
}

type LazyStrategicITDirection = {
  readonly StrategicITDirection?: number | null;
  readonly PrivateCloud?: boolean | null;
  readonly HybridCloud?: boolean | null;
  readonly AWSAllIn?: boolean | null;
  readonly DigitalTransformation?: boolean | null;
  readonly AdditionalComments?: string | null;
}

export declare type StrategicITDirection = LazyLoading extends LazyLoadingDisabled ? EagerStrategicITDirection : LazyStrategicITDirection

export declare const StrategicITDirection: (new (init: ModelInit<StrategicITDirection>) => StrategicITDirection)

type EagerGovernance = {
  readonly Governance?: number | null;
  readonly Current?: CurrentState | keyof typeof CurrentState | null;
  readonly TransitionRoadMap?: string | null;
  readonly FutureState?: FutureState | keyof typeof FutureState | null;
  readonly AdditionalComments?: string | null;
}

type LazyGovernance = {
  readonly Governance?: number | null;
  readonly Current?: CurrentState | keyof typeof CurrentState | null;
  readonly TransitionRoadMap?: string | null;
  readonly FutureState?: FutureState | keyof typeof FutureState | null;
  readonly AdditionalComments?: string | null;
}

export declare type Governance = LazyLoading extends LazyLoadingDisabled ? EagerGovernance : LazyGovernance

export declare const Governance: (new (init: ModelInit<Governance>) => Governance)

type EagerWorkingBackwards = {
  readonly WorkingBackwards?: number | null;
  readonly WorkingBackwardsSessionDelivered?: Stage1 | keyof typeof Stage1 | null;
  readonly AdditionalComments?: string | null;
}

type LazyWorkingBackwards = {
  readonly WorkingBackwards?: number | null;
  readonly WorkingBackwardsSessionDelivered?: Stage1 | keyof typeof Stage1 | null;
  readonly AdditionalComments?: string | null;
}

export declare type WorkingBackwards = LazyLoading extends LazyLoadingDisabled ? EagerWorkingBackwards : LazyWorkingBackwards

export declare const WorkingBackwards: (new (init: ModelInit<WorkingBackwards>) => WorkingBackwards)

type EagerCultureOfInnovation = {
  readonly CultureOfInnovation?: number | null;
  readonly CultureOfInnovationSessionDelivered?: Stage1 | keyof typeof Stage1 | null;
  readonly AdditionalComments?: string | null;
}

type LazyCultureOfInnovation = {
  readonly CultureOfInnovation?: number | null;
  readonly CultureOfInnovationSessionDelivered?: Stage1 | keyof typeof Stage1 | null;
  readonly AdditionalComments?: string | null;
}

export declare type CultureOfInnovation = LazyLoading extends LazyLoadingDisabled ? EagerCultureOfInnovation : LazyCultureOfInnovation

export declare const CultureOfInnovation: (new (init: ModelInit<CultureOfInnovation>) => CultureOfInnovation)

type EagerProcurementFinanceApprovalforSpent = {
  readonly ApproverName?: string | null;
  readonly Stage?: Stage4 | keyof typeof Stage4 | null;
}

type LazyProcurementFinanceApprovalforSpent = {
  readonly ApproverName?: string | null;
  readonly Stage?: Stage4 | keyof typeof Stage4 | null;
}

export declare type ProcurementFinanceApprovalforSpent = LazyLoading extends LazyLoadingDisabled ? EagerProcurementFinanceApprovalforSpent : LazyProcurementFinanceApprovalforSpent

export declare const ProcurementFinanceApprovalforSpent: (new (init: ModelInit<ProcurementFinanceApprovalforSpent>) => ProcurementFinanceApprovalforSpent)

type EagerProcurementFinanceApproval = {
  readonly ProcursementFinanceApproval?: number | null;
  readonly ProcurementFinanceApprovalforSpent?: ProcurementFinanceApprovalforSpent | null;
  readonly AdditionalComments?: string | null;
}

type LazyProcurementFinanceApproval = {
  readonly ProcursementFinanceApproval?: number | null;
  readonly ProcurementFinanceApprovalforSpent?: ProcurementFinanceApprovalforSpent | null;
  readonly AdditionalComments?: string | null;
}

export declare type ProcurementFinanceApproval = LazyLoading extends LazyLoadingDisabled ? EagerProcurementFinanceApproval : LazyProcurementFinanceApproval

export declare const ProcurementFinanceApproval: (new (init: ModelInit<ProcurementFinanceApproval>) => ProcurementFinanceApproval)

type EagerSecurityApprovalforPRODWorkloads = {
  readonly ApproverName?: string | null;
  readonly Stage?: Stage4 | keyof typeof Stage4 | null;
}

type LazySecurityApprovalforPRODWorkloads = {
  readonly ApproverName?: string | null;
  readonly Stage?: Stage4 | keyof typeof Stage4 | null;
}

export declare type SecurityApprovalforPRODWorkloads = LazyLoading extends LazyLoadingDisabled ? EagerSecurityApprovalforPRODWorkloads : LazySecurityApprovalforPRODWorkloads

export declare const SecurityApprovalforPRODWorkloads: (new (init: ModelInit<SecurityApprovalforPRODWorkloads>) => SecurityApprovalforPRODWorkloads)

type EagerSecurityApproval = {
  readonly SecurityApproval?: number | null;
  readonly SecurityApprovalforPRODWorkloads?: SecurityApprovalforPRODWorkloads | null;
  readonly AdditionalComments?: string | null;
}

type LazySecurityApproval = {
  readonly SecurityApproval?: number | null;
  readonly SecurityApprovalforPRODWorkloads?: SecurityApprovalforPRODWorkloads | null;
  readonly AdditionalComments?: string | null;
}

export declare type SecurityApproval = LazyLoading extends LazyLoadingDisabled ? EagerSecurityApproval : LazySecurityApproval

export declare const SecurityApproval: (new (init: ModelInit<SecurityApproval>) => SecurityApproval)

type EagerCCOE = {
  readonly CCOE?: number | null;
  readonly NewCloudRolesDefine?: boolean | null;
  readonly AppTeamEngagementProcessEstablished?: boolean | null;
  readonly CCOEEstablishedCommunityofPractice?: boolean | null;
  readonly CloudOperationalStructure?: boolean | null;
  readonly CloudCareerPathDefined?: boolean | null;
  readonly CCOEDefined?: boolean | null;
  readonly AdditionalComments?: string | null;
}

type LazyCCOE = {
  readonly CCOE?: number | null;
  readonly NewCloudRolesDefine?: boolean | null;
  readonly AppTeamEngagementProcessEstablished?: boolean | null;
  readonly CCOEEstablishedCommunityofPractice?: boolean | null;
  readonly CloudOperationalStructure?: boolean | null;
  readonly CloudCareerPathDefined?: boolean | null;
  readonly CCOEDefined?: boolean | null;
  readonly AdditionalComments?: string | null;
}

export declare type CCOE = LazyLoading extends LazyLoadingDisabled ? EagerCCOE : LazyCCOE

export declare const CCOE: (new (init: ModelInit<CCOE>) => CCOE)

type EagerAWSChampions = {
  readonly TitleorRole?: string | null;
  readonly Name?: string | null;
  readonly Sponsor?: boolean | null;
}

type LazyAWSChampions = {
  readonly TitleorRole?: string | null;
  readonly Name?: string | null;
  readonly Sponsor?: boolean | null;
}

export declare type AWSChampions = LazyLoading extends LazyLoadingDisabled ? EagerAWSChampions : LazyAWSChampions

export declare const AWSChampions: (new (init: ModelInit<AWSChampions>) => AWSChampions)

type EagerExecutiveSponsor = {
  readonly ExecutiveSponsor?: number | null;
  readonly AWSChampions?: AWSChampions | null;
  readonly AdditionalComments?: string | null;
}

type LazyExecutiveSponsor = {
  readonly ExecutiveSponsor?: number | null;
  readonly AWSChampions?: AWSChampions | null;
  readonly AdditionalComments?: string | null;
}

export declare type ExecutiveSponsor = LazyLoading extends LazyLoadingDisabled ? EagerExecutiveSponsor : LazyExecutiveSponsor

export declare const ExecutiveSponsor: (new (init: ModelInit<ExecutiveSponsor>) => ExecutiveSponsor)

type EagerPublicReference = {
  readonly PublicReference?: number | null;
  readonly Stage?: Stage1 | keyof typeof Stage1 | null;
  readonly AdditionalComments?: string | null;
}

type LazyPublicReference = {
  readonly PublicReference?: number | null;
  readonly Stage?: Stage1 | keyof typeof Stage1 | null;
  readonly AdditionalComments?: string | null;
}

export declare type PublicReference = LazyLoading extends LazyLoadingDisabled ? EagerPublicReference : LazyPublicReference

export declare const PublicReference: (new (init: ModelInit<PublicReference>) => PublicReference)

type EagerEA = {
  readonly EA?: number | null;
  readonly Stage?: Stage1 | keyof typeof Stage1 | null;
  readonly AdditionalComments?: string | null;
}

type LazyEA = {
  readonly EA?: number | null;
  readonly Stage?: Stage1 | keyof typeof Stage1 | null;
  readonly AdditionalComments?: string | null;
}

export declare type EA = LazyLoading extends LazyLoadingDisabled ? EagerEA : LazyEA

export declare const EA: (new (init: ModelInit<EA>) => EA)

type EagerAWSSupportPlan = {
  readonly AWSSupportPlan?: number | null;
  readonly SupportPlan?: string | null;
  readonly AdditionalComments?: string | null;
}

type LazyAWSSupportPlan = {
  readonly AWSSupportPlan?: number | null;
  readonly SupportPlan?: string | null;
  readonly AdditionalComments?: string | null;
}

export declare type AWSSupportPlan = LazyLoading extends LazyLoadingDisabled ? EagerAWSSupportPlan : LazyAWSSupportPlan

export declare const AWSSupportPlan: (new (init: ModelInit<AWSSupportPlan>) => AWSSupportPlan)

type EagerNDA = {
  readonly NDA?: number | null;
  readonly Stage?: Stage1 | keyof typeof Stage1 | null;
  readonly AdditionalComments?: string | null;
}

type LazyNDA = {
  readonly NDA?: number | null;
  readonly Stage?: Stage1 | keyof typeof Stage1 | null;
  readonly AdditionalComments?: string | null;
}

export declare type NDA = LazyLoading extends LazyLoadingDisabled ? EagerNDA : LazyNDA

export declare const NDA: (new (init: ModelInit<NDA>) => NDA)

type EagerStagesofAdoption = {
  readonly POC?: boolean | null;
  readonly DevTestWorkload?: boolean | null;
  readonly PRODWorkload?: boolean | null;
}

type LazyStagesofAdoption = {
  readonly POC?: boolean | null;
  readonly DevTestWorkload?: boolean | null;
  readonly PRODWorkload?: boolean | null;
}

export declare type StagesofAdoption = LazyLoading extends LazyLoadingDisabled ? EagerStagesofAdoption : LazyStagesofAdoption

export declare const StagesofAdoption: (new (init: ModelInit<StagesofAdoption>) => StagesofAdoption)

type EagerAdoption = {
  readonly Adoption?: number | null;
  readonly StagesOfAdoption?: StagesofAdoption | null;
  readonly AdditionalComments?: string | null;
}

type LazyAdoption = {
  readonly Adoption?: number | null;
  readonly StagesOfAdoption?: StagesofAdoption | null;
  readonly AdditionalComments?: string | null;
}

export declare type Adoption = LazyLoading extends LazyLoadingDisabled ? EagerAdoption : LazyAdoption

export declare const Adoption: (new (init: ModelInit<Adoption>) => Adoption)

type EagerAdditonalServices = {
  readonly GuardDuty?: boolean | null;
  readonly ACM?: boolean | null;
  readonly AmazonDetective?: boolean | null;
  readonly OtherServices?: string | null;
}

type LazyAdditonalServices = {
  readonly GuardDuty?: boolean | null;
  readonly ACM?: boolean | null;
  readonly AmazonDetective?: boolean | null;
  readonly OtherServices?: string | null;
}

export declare type AdditonalServices = LazyLoading extends LazyLoadingDisabled ? EagerAdditonalServices : LazyAdditonalServices

export declare const AdditonalServices: (new (init: ModelInit<AdditonalServices>) => AdditonalServices)

type EagerCoreServices = {
  readonly SSO?: boolean | null;
  readonly AWSIAM?: boolean | null;
  readonly MFARootUser?: boolean | null;
  readonly AWSConfig?: boolean | null;
  readonly SecurityHub?: boolean | null;
  readonly KMS?: boolean | null;
}

type LazyCoreServices = {
  readonly SSO?: boolean | null;
  readonly AWSIAM?: boolean | null;
  readonly MFARootUser?: boolean | null;
  readonly AWSConfig?: boolean | null;
  readonly SecurityHub?: boolean | null;
  readonly KMS?: boolean | null;
}

export declare type CoreServices = LazyLoading extends LazyLoadingDisabled ? EagerCoreServices : LazyCoreServices

export declare const CoreServices: (new (init: ModelInit<CoreServices>) => CoreServices)

type EagerSecurity = {
  readonly Security?: number | null;
  readonly CoreServices?: CoreServices | null;
  readonly AdditonalServices?: AdditonalServices | null;
  readonly AdditionalComments?: string | null;
}

type LazySecurity = {
  readonly Security?: number | null;
  readonly CoreServices?: CoreServices | null;
  readonly AdditonalServices?: AdditonalServices | null;
  readonly AdditionalComments?: string | null;
}

export declare type Security = LazyLoading extends LazyLoadingDisabled ? EagerSecurity : LazySecurity

export declare const Security: (new (init: ModelInit<Security>) => Security)

type EagerCurrentSetupandISVDetails = {
  readonly VPN?: boolean | null;
  readonly Dx?: boolean | null;
}

type LazyCurrentSetupandISVDetails = {
  readonly VPN?: boolean | null;
  readonly Dx?: boolean | null;
}

export declare type CurrentSetupandISVDetails = LazyLoading extends LazyLoadingDisabled ? EagerCurrentSetupandISVDetails : LazyCurrentSetupandISVDetails

export declare const CurrentSetupandISVDetails: (new (init: ModelInit<CurrentSetupandISVDetails>) => CurrentSetupandISVDetails)

type EagerNetworking = {
  readonly Networking?: number | null;
  readonly CurrentSetupandISVDetails?: CurrentSetupandISVDetails | null;
  readonly AdditionalComments?: string | null;
}

type LazyNetworking = {
  readonly Networking?: number | null;
  readonly CurrentSetupandISVDetails?: CurrentSetupandISVDetails | null;
  readonly AdditionalComments?: string | null;
}

export declare type Networking = LazyLoading extends LazyLoadingDisabled ? EagerNetworking : LazyNetworking

export declare const Networking: (new (init: ModelInit<Networking>) => Networking)

type EagerControlTowerDeployementorSimilarGovernance = {
  readonly ControlTowerDeployementorSimilarGovernance?: number | null;
  readonly Deployment?: Stage3 | keyof typeof Stage3 | null;
  readonly AdditionalComments?: string | null;
}

type LazyControlTowerDeployementorSimilarGovernance = {
  readonly ControlTowerDeployementorSimilarGovernance?: number | null;
  readonly Deployment?: Stage3 | keyof typeof Stage3 | null;
  readonly AdditionalComments?: string | null;
}

export declare type ControlTowerDeployementorSimilarGovernance = LazyLoading extends LazyLoadingDisabled ? EagerControlTowerDeployementorSimilarGovernance : LazyControlTowerDeployementorSimilarGovernance

export declare const ControlTowerDeployementorSimilarGovernance: (new (init: ModelInit<ControlTowerDeployementorSimilarGovernance>) => ControlTowerDeployementorSimilarGovernance)

type EagerPartnerProServeIntroduction = {
  readonly PartnerProServeIntroduction?: number | null;
  readonly Stage?: Stage2 | keyof typeof Stage2 | null;
  readonly AdditonalComments?: string | null;
}

type LazyPartnerProServeIntroduction = {
  readonly PartnerProServeIntroduction?: number | null;
  readonly Stage?: Stage2 | keyof typeof Stage2 | null;
  readonly AdditonalComments?: string | null;
}

export declare type PartnerProServeIntroduction = LazyLoading extends LazyLoadingDisabled ? EagerPartnerProServeIntroduction : LazyPartnerProServeIntroduction

export declare const PartnerProServeIntroduction: (new (init: ModelInit<PartnerProServeIntroduction>) => PartnerProServeIntroduction)

type EagerIntroductiontoIncentivePrograms = {
  readonly IntroductiontoIncentivePrograms?: number | null;
  readonly Stage?: Stage1 | keyof typeof Stage1 | null;
  readonly AdditionalComments?: string | null;
}

type LazyIntroductiontoIncentivePrograms = {
  readonly IntroductiontoIncentivePrograms?: number | null;
  readonly Stage?: Stage1 | keyof typeof Stage1 | null;
  readonly AdditionalComments?: string | null;
}

export declare type IntroductiontoIncentivePrograms = LazyLoading extends LazyLoadingDisabled ? EagerIntroductiontoIncentivePrograms : LazyIntroductiontoIncentivePrograms

export declare const IntroductiontoIncentivePrograms: (new (init: ModelInit<IntroductiontoIncentivePrograms>) => IntroductiontoIncentivePrograms)

type EagerTCODetailsorAWSCCURL = {
  readonly Delivered?: boolean | null;
  readonly CostCalculator?: number | null;
  readonly TCOWorkdocsURL?: string | null;
}

type LazyTCODetailsorAWSCCURL = {
  readonly Delivered?: boolean | null;
  readonly CostCalculator?: number | null;
  readonly TCOWorkdocsURL?: string | null;
}

export declare type TCODetailsorAWSCCURL = LazyLoading extends LazyLoadingDisabled ? EagerTCODetailsorAWSCCURL : LazyTCODetailsorAWSCCURL

export declare const TCODetailsorAWSCCURL: (new (init: ModelInit<TCODetailsorAWSCCURL>) => TCODetailsorAWSCCURL)

type EagerCostAssessmentTCOorWorkloadCostEstimateAWSCE = {
  readonly CostAssessmentTCOorWorkloadCostEstimateAWSCE?: number | null;
  readonly TCODetailsorAWSCCURL?: TCODetailsorAWSCCURL | null;
  readonly AdditionalComments?: string | null;
}

type LazyCostAssessmentTCOorWorkloadCostEstimateAWSCE = {
  readonly CostAssessmentTCOorWorkloadCostEstimateAWSCE?: number | null;
  readonly TCODetailsorAWSCCURL?: TCODetailsorAWSCCURL | null;
  readonly AdditionalComments?: string | null;
}

export declare type CostAssessmentTCOorWorkloadCostEstimateAWSCE = LazyLoading extends LazyLoadingDisabled ? EagerCostAssessmentTCOorWorkloadCostEstimateAWSCE : LazyCostAssessmentTCOorWorkloadCostEstimateAWSCE

export declare const CostAssessmentTCOorWorkloadCostEstimateAWSCE: (new (init: ModelInit<CostAssessmentTCOorWorkloadCostEstimateAWSCE>) => CostAssessmentTCOorWorkloadCostEstimateAWSCE)

type EagerWorkloadDeepDiveDiscussion = {
  readonly Delivered?: boolean | null;
  readonly UseCaseDetails?: string | null;
}

type LazyWorkloadDeepDiveDiscussion = {
  readonly Delivered?: boolean | null;
  readonly UseCaseDetails?: string | null;
}

export declare type WorkloadDeepDiveDiscussion = LazyLoading extends LazyLoadingDisabled ? EagerWorkloadDeepDiveDiscussion : LazyWorkloadDeepDiveDiscussion

export declare const WorkloadDeepDiveDiscussion: (new (init: ModelInit<WorkloadDeepDiveDiscussion>) => WorkloadDeepDiveDiscussion)

type EagerTechnicalDeepDiveWhiteBoarding = {
  readonly TechnicalDeepDiveWhiteBoarding?: number | null;
  readonly WorkloadDeepDiveDiscussion?: WorkloadDeepDiveDiscussion | null;
  readonly AddditonalComments?: string | null;
}

type LazyTechnicalDeepDiveWhiteBoarding = {
  readonly TechnicalDeepDiveWhiteBoarding?: number | null;
  readonly WorkloadDeepDiveDiscussion?: WorkloadDeepDiveDiscussion | null;
  readonly AddditonalComments?: string | null;
}

export declare type TechnicalDeepDiveWhiteBoarding = LazyLoading extends LazyLoadingDisabled ? EagerTechnicalDeepDiveWhiteBoarding : LazyTechnicalDeepDiveWhiteBoarding

export declare const TechnicalDeepDiveWhiteBoarding: (new (init: ModelInit<TechnicalDeepDiveWhiteBoarding>) => TechnicalDeepDiveWhiteBoarding)

type EagerTrainingSessionCompleted = {
  readonly ArchitectingOnAWS?: boolean | null;
  readonly AWSOperations?: boolean | null;
  readonly AWSSecurity?: boolean | null;
  readonly DevOpsOnAWS?: boolean | null;
  readonly DatabaseMigration?: boolean | null;
  readonly AWSAIML?: boolean | null;
  readonly DatalakeOnAWS?: boolean | null;
}

type LazyTrainingSessionCompleted = {
  readonly ArchitectingOnAWS?: boolean | null;
  readonly AWSOperations?: boolean | null;
  readonly AWSSecurity?: boolean | null;
  readonly DevOpsOnAWS?: boolean | null;
  readonly DatabaseMigration?: boolean | null;
  readonly AWSAIML?: boolean | null;
  readonly DatalakeOnAWS?: boolean | null;
}

export declare type TrainingSessionCompleted = LazyLoading extends LazyLoadingDisabled ? EagerTrainingSessionCompleted : LazyTrainingSessionCompleted

export declare const TrainingSessionCompleted: (new (init: ModelInit<TrainingSessionCompleted>) => TrainingSessionCompleted)

type EagerAWSTraining = {
  readonly AWSTraining?: number | null;
  readonly TrainingSessionCompleted?: TrainingSessionCompleted | null;
  readonly AdditionalComments?: string | null;
}

type LazyAWSTraining = {
  readonly AWSTraining?: number | null;
  readonly TrainingSessionCompleted?: TrainingSessionCompleted | null;
  readonly AdditionalComments?: string | null;
}

export declare type AWSTraining = LazyLoading extends LazyLoadingDisabled ? EagerAWSTraining : LazyAWSTraining

export declare const AWSTraining: (new (init: ModelInit<AWSTraining>) => AWSTraining)

type EagerFoundationalImmersionDays = {
  readonly General?: boolean | null;
  readonly Security?: boolean | null;
  readonly Networking?: boolean | null;
  readonly ControlTowerLandingZone?: boolean | null;
}

type LazyFoundationalImmersionDays = {
  readonly General?: boolean | null;
  readonly Security?: boolean | null;
  readonly Networking?: boolean | null;
  readonly ControlTowerLandingZone?: boolean | null;
}

export declare type FoundationalImmersionDays = LazyLoading extends LazyLoadingDisabled ? EagerFoundationalImmersionDays : LazyFoundationalImmersionDays

export declare const FoundationalImmersionDays: (new (init: ModelInit<FoundationalImmersionDays>) => FoundationalImmersionDays)

type EagerAWSImmersionDays = {
  readonly AWSImmersionDays?: number | null;
  readonly ImmersionDayType?: FoundationalImmersionDays | null;
  readonly AdvancedImmersionDays?: string | null;
  readonly AdditionalComments?: string | null;
}

type LazyAWSImmersionDays = {
  readonly AWSImmersionDays?: number | null;
  readonly ImmersionDayType?: FoundationalImmersionDays | null;
  readonly AdvancedImmersionDays?: string | null;
  readonly AdditionalComments?: string | null;
}

export declare type AWSImmersionDays = LazyLoading extends LazyLoadingDisabled ? EagerAWSImmersionDays : LazyAWSImmersionDays

export declare const AWSImmersionDays: (new (init: ModelInit<AWSImmersionDays>) => AWSImmersionDays)

type EagerAWSWARSessionorArchitecturalReview = {
  readonly AWSWARSessionorArchitecturalReview?: number | null;
  readonly AdditionalComments?: string | null;
  readonly Stage?: Stage1 | keyof typeof Stage1 | null;
}

type LazyAWSWARSessionorArchitecturalReview = {
  readonly AWSWARSessionorArchitecturalReview?: number | null;
  readonly AdditionalComments?: string | null;
  readonly Stage?: Stage1 | keyof typeof Stage1 | null;
}

export declare type AWSWARSessionorArchitecturalReview = LazyLoading extends LazyLoadingDisabled ? EagerAWSWARSessionorArchitecturalReview : LazyAWSWARSessionorArchitecturalReview

export declare const AWSWARSessionorArchitecturalReview: (new (init: ModelInit<AWSWARSessionorArchitecturalReview>) => AWSWARSessionorArchitecturalReview)

type EagerAWSValuePropositionOverview = {
  readonly AWSValuePropositionOverview?: number | null;
  readonly AdditionalComments?: string | null;
  readonly Stage?: Stage1 | keyof typeof Stage1 | null;
}

type LazyAWSValuePropositionOverview = {
  readonly AWSValuePropositionOverview?: number | null;
  readonly AdditionalComments?: string | null;
  readonly Stage?: Stage1 | keyof typeof Stage1 | null;
}

export declare type AWSValuePropositionOverview = LazyLoading extends LazyLoadingDisabled ? EagerAWSValuePropositionOverview : LazyAWSValuePropositionOverview

export declare const AWSValuePropositionOverview: (new (init: ModelInit<AWSValuePropositionOverview>) => AWSValuePropositionOverview)

type EagerCommericalReadiness = {
  readonly id?: string | null;
  readonly CommercialReadiness?: number | null;
  readonly NDA?: NDA | null;
  readonly AWSSupportPlan?: AWSSupportPlan | null;
  readonly EA?: EA | null;
  readonly PublicReference?: PublicReference | null;
  readonly ExecutiveSponsor?: ExecutiveSponsor | null;
  readonly CCOE?: CCOE | null;
  readonly SecurityApproval?: SecurityApprovalforPRODWorkloads | null;
  readonly ProcurementFinanceApproval?: ProcurementFinanceApproval | null;
  readonly AdditionalComments?: string | null;
}

type LazyCommericalReadiness = {
  readonly id?: string | null;
  readonly CommercialReadiness?: number | null;
  readonly NDA?: NDA | null;
  readonly AWSSupportPlan?: AWSSupportPlan | null;
  readonly EA?: EA | null;
  readonly PublicReference?: PublicReference | null;
  readonly ExecutiveSponsor?: ExecutiveSponsor | null;
  readonly CCOE?: CCOE | null;
  readonly SecurityApproval?: SecurityApprovalforPRODWorkloads | null;
  readonly ProcurementFinanceApproval?: ProcurementFinanceApproval | null;
  readonly AdditionalComments?: string | null;
}

export declare type CommericalReadiness = LazyLoading extends LazyLoadingDisabled ? EagerCommericalReadiness : LazyCommericalReadiness

export declare const CommericalReadiness: (new (init: ModelInit<CommericalReadiness>) => CommericalReadiness)

type EagerStrategicDrivers = {
  readonly id?: string | null;
  readonly StrategicDrivers?: number | null;
  readonly CultureOfInnovation?: CultureOfInnovation | null;
  readonly WorkingBackwards?: WorkingBackwards | null;
  readonly Governance?: Governance | null;
  readonly StrategicITDirection?: StrategicITDirection | null;
  readonly UnderstandingofBusinessDriversandOutcomes?: UnderstandingofBusinessDriversandOutcomes | null;
  readonly QuantificationofBusinessImpact?: QuantificationofBusinessImpact | null;
  readonly AdditionalComments?: string | null;
}

type LazyStrategicDrivers = {
  readonly id?: string | null;
  readonly StrategicDrivers?: number | null;
  readonly CultureOfInnovation?: CultureOfInnovation | null;
  readonly WorkingBackwards?: WorkingBackwards | null;
  readonly Governance?: Governance | null;
  readonly StrategicITDirection?: StrategicITDirection | null;
  readonly UnderstandingofBusinessDriversandOutcomes?: UnderstandingofBusinessDriversandOutcomes | null;
  readonly QuantificationofBusinessImpact?: QuantificationofBusinessImpact | null;
  readonly AdditionalComments?: string | null;
}

export declare type StrategicDrivers = LazyLoading extends LazyLoadingDisabled ? EagerStrategicDrivers : LazyStrategicDrivers

export declare const StrategicDrivers: (new (init: ModelInit<StrategicDrivers>) => StrategicDrivers)

type EagerTechnicalReadiness = {
  readonly id?: string | null;
  readonly TechnicalReadiness?: number | null;
  readonly AWSValuePropositionOverview?: AWSValuePropositionOverview | null;
  readonly AWSWARSessionorArchitecturalReview?: AWSWARSessionorArchitecturalReview | null;
  readonly AWSImmersionDays?: AWSImmersionDays | null;
  readonly AWSTraining?: AWSTraining | null;
  readonly TechnicalDeepDiveWhiteBoarding?: TechnicalDeepDiveWhiteBoarding | null;
  readonly CostAssessmentTCOorWorkloadCostEstimateAWSCE?: CostAssessmentTCOorWorkloadCostEstimateAWSCE | null;
  readonly IntroductiontoIncentivePrograms?: IntroductiontoIncentivePrograms | null;
  readonly PartnerProServeIntroduction?: PartnerProServeIntroduction | null;
  readonly ControlTowerDeployementorSimilarGovernance?: ControlTowerDeployementorSimilarGovernance | null;
  readonly Networking?: Networking | null;
  readonly Security?: SecurityApprovalforPRODWorkloads | null;
  readonly Adoption?: Adoption | null;
  readonly AdditionalComments?: string | null;
}

type LazyTechnicalReadiness = {
  readonly id?: string | null;
  readonly TechnicalReadiness?: number | null;
  readonly AWSValuePropositionOverview?: AWSValuePropositionOverview | null;
  readonly AWSWARSessionorArchitecturalReview?: AWSWARSessionorArchitecturalReview | null;
  readonly AWSImmersionDays?: AWSImmersionDays | null;
  readonly AWSTraining?: AWSTraining | null;
  readonly TechnicalDeepDiveWhiteBoarding?: TechnicalDeepDiveWhiteBoarding | null;
  readonly CostAssessmentTCOorWorkloadCostEstimateAWSCE?: CostAssessmentTCOorWorkloadCostEstimateAWSCE | null;
  readonly IntroductiontoIncentivePrograms?: IntroductiontoIncentivePrograms | null;
  readonly PartnerProServeIntroduction?: PartnerProServeIntroduction | null;
  readonly ControlTowerDeployementorSimilarGovernance?: ControlTowerDeployementorSimilarGovernance | null;
  readonly Networking?: Networking | null;
  readonly Security?: SecurityApprovalforPRODWorkloads | null;
  readonly Adoption?: Adoption | null;
  readonly AdditionalComments?: string | null;
}

export declare type TechnicalReadiness = LazyLoading extends LazyLoadingDisabled ? EagerTechnicalReadiness : LazyTechnicalReadiness

export declare const TechnicalReadiness: (new (init: ModelInit<TechnicalReadiness>) => TechnicalReadiness)

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
  readonly Customer: Cusomter | keyof typeof Cusomter;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyCustomerSelect = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<CustomerSelect, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly Customer: Cusomter | keyof typeof Cusomter;
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
  readonly CustomerSalesConsoleLink?: string | null;
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
  readonly CustomerSalesConsoleLink?: string | null;
  readonly ProServTrainingSpentT12M?: number | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type AssessmentAccountDetails = LazyLoading extends LazyLoadingDisabled ? EagerAssessmentAccountDetails : LazyAssessmentAccountDetails

export declare const AssessmentAccountDetails: (new (init: ModelInit<AssessmentAccountDetails>) => AssessmentAccountDetails) & {
  copyOf(source: AssessmentAccountDetails, mutator: (draft: MutableModel<AssessmentAccountDetails>) => MutableModel<AssessmentAccountDetails> | void): AssessmentAccountDetails;
}

type EagerGtoGEDescription = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<GtoGEDescription, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly Company?: string | null;
  readonly Quarter?: string | null;
  readonly Date?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyGtoGEDescription = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<GtoGEDescription, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly Company?: string | null;
  readonly Quarter?: string | null;
  readonly Date?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type GtoGEDescription = LazyLoading extends LazyLoadingDisabled ? EagerGtoGEDescription : LazyGtoGEDescription

export declare const GtoGEDescription: (new (init: ModelInit<GtoGEDescription>) => GtoGEDescription) & {
  copyOf(source: GtoGEDescription, mutator: (draft: MutableModel<GtoGEDescription>) => MutableModel<GtoGEDescription> | void): GtoGEDescription;
}

type EagerDimension = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Dimension, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly StrategicDrivers?: StrategicDrivers | null;
  readonly CommericalReadiness?: CommericalReadiness | null;
  readonly TechnicalReadiness?: TechnicalReadiness | null;
  readonly OverallReadiness?: number | null;
  readonly AssessmentAccountDetails?: AssessmentAccountDetails | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly dimensionAssessmentAccountDetailsId?: string | null;
}

type LazyDimension = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Dimension, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly StrategicDrivers?: StrategicDrivers | null;
  readonly CommericalReadiness?: CommericalReadiness | null;
  readonly TechnicalReadiness?: TechnicalReadiness | null;
  readonly OverallReadiness?: number | null;
  readonly AssessmentAccountDetails: AsyncItem<AssessmentAccountDetails | undefined>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly dimensionAssessmentAccountDetailsId?: string | null;
}

export declare type Dimension = LazyLoading extends LazyLoadingDisabled ? EagerDimension : LazyDimension

export declare const Dimension: (new (init: ModelInit<Dimension>) => Dimension) & {
  copyOf(source: Dimension, mutator: (draft: MutableModel<Dimension>) => MutableModel<Dimension> | void): Dimension;
}