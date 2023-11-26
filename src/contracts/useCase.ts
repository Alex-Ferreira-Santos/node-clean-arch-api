export interface IUseCase<P = void, R = void>{
  execute: (props: P) => Promise<R>
}