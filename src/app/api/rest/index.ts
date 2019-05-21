export interface Err extends Error {}

export enum ApiResultType {
    OK = "ok",
    NG = "ng",
    ERROR= "error",
}

export type ApiResult<Ok, Ng, Error> =
    | {
        type: ApiResultType.OK
        body: Ok
    }
    | {
        type: ApiResultType.NG
        body: Ng
    }
    | {
        type: ApiResultType.ERROR
        body: Error
    }

export const headers = {
    "X-Requested-With": "XMLHttpRequest",
    "Accept": "application/json",
    "Content-Type": "application/json",
}