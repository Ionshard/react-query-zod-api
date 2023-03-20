import { http } from "./http";
import { wrapAuth } from "./wrapAuth";

export const authHttp = wrapAuth(http, () => Promise.resolve("fake-token"));
