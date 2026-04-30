import { getEnv } from "./env";
// import {getEnv} from "../"

export const JWT_SECRET = new TextEncoder().encode(getEnv().AUTH_SECRET);