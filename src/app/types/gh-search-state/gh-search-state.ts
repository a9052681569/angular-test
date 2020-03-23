import { Repository } from '../repository/repository';

export interface GhSearchState {
    repositories?: Repository[];
    isLoading?: boolean;
    noticeMessage?: string;
}
