import { statusType } from "src/lib/interface/status.interface";

export interface AuthRepositoryRegisterReturn {
    id_?: number;
    status_: statusType;
}