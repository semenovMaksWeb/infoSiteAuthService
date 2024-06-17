import { statusType } from "src/lib/interface/status.interface";

export interface AuthRepositoryRegistrationReturn {
    id_?: number;
    status_: statusType;
}

export interface AuthRepositoryAuthorizatioReturn {
    id_?: number;
    check_user_: boolean;
}