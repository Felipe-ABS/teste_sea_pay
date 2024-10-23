export default interface ITransactions {
    id: number,
    value: number,
    status: string,
    transaction_date: Date,
    origin_account_id: number,
    origin_user_id: number,
    destination_account_id: number,
    destination_user_id: number,
}
