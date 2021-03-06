import { SelectQuery, IError } from '../../../common/index';
import { Base } from '../base';
export declare class Union extends Base {
    execute(query: SelectQuery[], onSuccess: (results: object[]) => void, onError: (err: IError) => void): void;
}
