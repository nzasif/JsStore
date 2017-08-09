import Model = JsStore.Model;
import DataBase = Model.DataBase;
import Column = Model.Column;
import Table = Model.Table;
module JsStore {

    export class Instance extends CodeExecutionHelper {

        constructor() {
            super();
            Utils.setDbType();
            try {
                this.createWorker();
            }
            catch (ex) {
                this.WorkerStatus = WebWorkerStatus.Failed;
            }
        }


        /**
         * creates DataBase
         * 
         * @param {IDataBase} dataBase 
         * @param {Function} onSuccess 
         * @param {Function} [onError=null] 
         * @returns 
         * 
         * @memberOf Main
         */
        createDb(dataBase: Model.IDataBase, onSuccess: Function, onError: Function = null) {
            this.prcoessExecutionOfCode(<IWebWorkerRequest>{
                Name: 'create_db',
                OnSuccess: onSuccess,
                OnError: onError,
                Query: dataBase
            });
            return this;
        }


        /**
         * drop dataBase
         * 
         * @param {Function} onSuccess 
         * @param {Function} [onError=null] 
         * @memberof Instance
         */
        dropDb(onSuccess: Function, onError: Function = null) {
            this.prcoessExecutionOfCode(<IWebWorkerRequest>{
                Name: 'drop_db',
                OnSuccess: onSuccess,
                OnError: onError
            });
        }

        /**
         * select data from table
         * 
         * @param {IQuery} query 
         * @param {Function} [onSuccess=null]  
         * @param {Function} [onError=null] 
         * 
         * @memberOf Main
         */
        select(query: ISelect, onSuccess: Function = null, onError: Function = null) {
            var OnSuccess = query.OnSuccess ? query.OnSuccess : onSuccess,
                OnError = query.OnError ? query.OnError : onError;
            this.prcoessExecutionOfCode(<IWebWorkerRequest>{
                Name: 'select',
                Query: query,
                OnSuccess: OnSuccess,
                OnError: OnError
            });
        }

        /**
         * get no of result from table
         * 
         * @param {ICount} query 
         * @param {Function} [onSuccess=null]  
         * @param {Function} [onError=null] 
         * @memberof Instance
         */
        count(query: ICount, onSuccess: Function = null, onError: Function = null) {
            var OnSuccess = query.OnSuccess ? query.OnSuccess : onSuccess,
                OnError = query.OnError ? query.OnError : onError;
            this.prcoessExecutionOfCode(<IWebWorkerRequest>{
                Name: 'count',
                Query: query,
                OnSuccess: OnSuccess,
                OnError: OnError
            });
        }


        /**
         * insert data into table
         * 
         * @param {IInsert} query 
         * @param {Function} [onSuccess=null] 
         * @param {Function} [onError=null] 
         * @memberof Instance
         */
        insert(query: IInsert, onSuccess: Function = null, onError: Function = null) {
            var OnSuccess = query.OnSuccess ? query.OnSuccess : onSuccess,
                OnError = query.OnError ? query.OnError : onError;
            this.prcoessExecutionOfCode(<IWebWorkerRequest>{
                Name: 'insert',
                Query: query,
                OnSuccess: OnSuccess,
                OnError: OnError
            });
        }

        /**
         * update data into table
         * 
         * @param {IUpdate} query 
         * @param {Function} [onSuccess=null] 
         * @param {Function} [onError=null] 
         * @memberof Instance
         */
        update(query: IUpdate, onSuccess: Function = null, onError: Function = null) {
            var OnSuccess = query.OnSuccess ? query.OnSuccess : onSuccess,
                OnError = query.OnError ? query.OnError : onError;
            this.prcoessExecutionOfCode(<IWebWorkerRequest>{
                Name: 'update',
                Query: query,
                OnSuccess: OnSuccess,
                OnError: OnError
            });
        }

        /**
         * delete data from table
         * 
         * @param {IDelete} query 
         * @param {Function} [onSuccess=null] 
         * @param {Function} onError 
         * @memberof Instance
         */
        delete(query: IDelete, onSuccess: Function = null, onError: Function = null) {
            var OnSuccess = query.OnSuccess ? query.OnSuccess : onSuccess,
                OnError = query.OnError ? query.OnError : onError;
            this.prcoessExecutionOfCode(<IWebWorkerRequest>{
                Name: 'delete',
                Query: query,
                OnSuccess: OnSuccess,
                OnError: OnError
            });
        }

        /**
         * delete all data from table
         * 
         * @param {string} tableName 
         * @param {Function} [onSuccess=null] 
         * @param {Function} [onError=null] 
         * @memberof Instance
         */
        clear(tableName: string, onSuccess: Function = null, onError: Function = null) {
            this.prcoessExecutionOfCode(<IWebWorkerRequest>{
                Name: 'clear',
                Query: tableName,
                OnSuccess: onSuccess,
                OnError: onerror
            });
        }
    }
}