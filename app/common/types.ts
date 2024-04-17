//import { Round } from "data-layer";
import { Hex } from "viem";
import { ChainId } from "./chain-ids";
import { VerifiableCredential } from "@gitcoinco/passport-sdk-types";

//import { AnyJson } from ".";
//import { BigNumber } from "ethers";

// export type CreateRoundData = {
//   roundMetadataWithProgramContractAddress: Round["roundMetadata"];
//   applicationQuestions: {
//     version: string;
//     lastUpdatedOn: number;
//     applicationSchema: {
//       questions: SchemaQuestion[];
//       requirements: ProjectRequirements;
//     };
//   };
//   round: Round;
//   roundCategory: RoundCategory;
// };

// export type UpdateRoundParams = {
//   applicationMetadata?: AnyJson;
//   roundMetadata?: AnyJson;
//   matchAmount?: BigNumber;
//   roundStartTime?: Date;
//   roundEndTime?: Date;
//   applicationsStartTime?: Date;
//   applicationsEndTime?: Date;
// };

// export type MatchingStatsData = {
//   index?: number;
//   projectName: string;
//   uniqueContributorsCount?: number;
//   contributionsCount: number;
//   matchPoolPercentage: number;
//   projectId: string;
//   applicationId: string;
//   matchAmountInToken: BigNumber;
//   originalMatchAmountInToken: BigNumber;
//   projectPayoutAddress: string;
//   status?: string;
//   hash?: string;
// };

// export type SchemaQuestion = {
//   id: number;
//   title: string;
//   type: InputType;
//   required: boolean;
//   hidden: boolean;
//   choices?: string[];
//   encrypted: boolean;
//   fixed?: boolean;
//   metadataExcluded?: boolean;
// };

// export type ProjectRequirements = {
//   twitter: {
//     required: boolean;
//     verification: boolean;
//   };
//   github: {
//     required: boolean;
//     verification: boolean;
//   };
// };

// export enum RoundCategory {
//   QuadraticFunding,
//   Direct,
// }

// export enum UpdateAction {
//   UPDATE_APPLICATION_META_PTR = "updateApplicationMetaPtr",
//   UPDATE_ROUND_META_PTR = "updateRoundMetaPtr",
//   UPDATE_ROUND_START_AND_END_TIMES = "updateStartAndEndTimes",
//   UPDATE_MATCH_AMOUNT = "updateMatchAmount",
//   UPDATE_ROUND_FEE_ADDRESS = "updateRoundFeeAddress",
//   UPDATE_ROUND_FEE_PERCENTAGE = "updateRoundFeePercentage",
// }

// export type InputType =
//   | "email"
//   | "address"
//   | "number"
//   | "text"
//   | "short-answer"
//   | "paragraph"
//   | "multiple-choice"
//   | "checkbox"
//   | "dropdown"
//   | "link";

// export type DeepRequired<T> = {
//   [K in keyof T]: Required<DeepRequired<T[K]>>;
// };

export type VotingToken = {
  name: string;
  chainId: ChainId;
  address: Hex;
  decimal: number;
  logo?: string;
  default?: boolean;
  redstoneTokenId: string;
  permitVersion?: string;
  //TODO: remove if the previous default was intended to be used as defaultForVoting
  defaultForVoting: boolean;
  //TODO: split PayoutTokens and VotingTokens in
  // 2 different types/lists and remove the following attribute
  canVote: boolean;
};

export type ProjectCredentials = {
  [key: string]: VerifiableCredential;
};
export interface ProjectOwner {
  address: string;
}

export type ProjectMetadata = {
  title: string;
  description: string;
  website: string;
  bannerImg?: string;
  logoImg?: string;
  projectTwitter?: string;
  userGithub?: string;
  projectGithub?: string;
  credentials: ProjectCredentials;
  owners: ProjectOwner[];
  createdAt: number;
  lastUpdated: number;
};

export type GrantApplicationFormAnswer = {
  questionId: number;
  question: string;
  answer: string | string[];
  hidden: boolean;
  type?: string;
};

export type ApplicationStatus =
  | "PENDING"
  | "APPROVED"
  | "IN_REVIEW"
  | "REJECTED"
  | "APPEAL"
  | "FRAUD"
  | "RECEIVED"
  | "CANCELLED"
  | "IN_REVIEW";

export type Project = {
  grantApplicationId: string;
  projectRegistryId: string;
  anchorAddress?: string;
  recipient: string;
  projectMetadata: ProjectMetadata;
  grantApplicationFormAnswers: GrantApplicationFormAnswer[];
  status: ApplicationStatus;
  applicationIndex: number;
};

export type CartProject = Project & {
  roundId: string;
  chainId: ChainId;
  amount: string;
};
