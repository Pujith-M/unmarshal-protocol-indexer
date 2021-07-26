type i8 = number;
type i16 = number;
type i32 = number;
type i64 = bigint;
type isize = number;
type u8 = number;
type u16 = number;
type u32 = number;
type u64 = bigint;
type usize = number;
type f32 = number;
type f64 = number;
type bool = boolean | number;
export namespace callback {
  export function greet(message: usize): usize;
}
export class Event {
  static wrap(ptr: usize): Event;
  valueOf(): usize;
  entity: usize;
  name: usize;
  value: usize;
  constructor(entity: usize, name: usize, value: usize);
}
export function handleNewEntry(event: usize): void;
export function greet(msg: usize): void;
// export const memory: WebAssembly.Memory;
export function __new(size: usize, id: u32): usize;
export function __pin(ptr: usize): usize;
export function __unpin(ptr: usize): void;
export function __collect(): void;
export const __rtti_base: usize;
export const __setArgumentsLength: ((n: i32) => void) | undefined;
