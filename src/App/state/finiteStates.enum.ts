export enum FiniteStates {
  Idle = 'Idle',
  Loading = 'Loading',
  Updated = 'Updated',
  Success = 'Success',
  Failure = 'Failure',
}

export type FiniteStatesType =
  | FiniteStates.Idle
  | FiniteStates.Loading
  | FiniteStates.Success
  | FiniteStates.Updated
  | FiniteStates.Failure;
