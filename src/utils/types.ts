export type ActionCreator<A extends { type: string }> = () => A;

export type ActionCreatorWithPayload<A extends { type: string; payload: {} }> = (payload: A['payload']) => A;
