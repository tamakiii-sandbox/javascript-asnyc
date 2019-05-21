export interface Err extends Error {}

export enum ResultType {
    OK = "ok",
    NG = "ng",
    ERR= "err",
}

export type Result<Ok, Ng, Error> =
    | {
        type: ResultType.OK
        body: Ok
    }
    | {
        type: ResultType.NG
        body: Ng
    }
    | {
        type: ResultType.ERR
        body: Error
    }

export const headers = {
    "X-Requested-With": "XMLHttpRequest",
    "Accept": "application/json",
    "Content-Type": "application/json",
}