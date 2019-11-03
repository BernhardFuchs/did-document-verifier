export namespace Did {
  export type Document = {
    context: string | string[];
    id: string;
    publicKey?: PublicKey[];
  };

  export type PublicKey = {
    id?: string;
    type: string;
    controller: string;
  };

  export interface Result {
    valid: boolean;
    errorMessage?: string
  }
}
