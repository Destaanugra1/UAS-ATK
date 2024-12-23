// declare module 'midtrans-client' {
//   export interface Config {
//     isProduction: boolean;
//     serverKey: string;
//     clientKey?: string;
//   }

//   export interface ChargeParams {
//     payment_type: string;
//     transaction_details: {
//       order_id: string;
//       gross_amount: number;
//     };
//     customer_details?: {
//       first_name?: string;
//       last_name?: string;
//       email?: string;
//       phone?: string;
//     };
//   }

//   export interface TransactionStatus {
//     status_code: string;
//     status_message: string;
//     transaction_status: string;
//     order_id: string;
//     gross_amount: string;
//   }

//   export interface RefundParams {
//     amount: number; // Jumlah refund
//     reason: string; // Alasan refund
//     refund_key?: string; // Kunci refund (opsional)
//   }

//   export default class MidtransClient {
//     constructor(config: Config);
//     charge(params: ChargeParams): Promise<TransactionStatus>;
//     transaction: {
//       status(orderId: string): Promise<TransactionStatus>;
//       approve(orderId: string): Promise<{ status_code: string; status_message: string }>;
//       cancel(orderId: string): Promise<{ status_code: string; status_message: string }>;
//       refund(orderId: string, params: RefundParams): Promise<{ status_code: string; status_message: string }>;
//     };
//   }
// }
