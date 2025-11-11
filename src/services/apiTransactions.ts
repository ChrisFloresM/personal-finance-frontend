import axios from "axios";
import type { AxiosError, AxiosResponse } from "axios";
import type { Itransaction } from "../features/transactions/TransactionsTable.tsx";

const API_ENDPOINT = "http://localhost:8081/api/transactions";
export async function getTransactions(): Promise<Itransaction[]> {
  try {
    const response: AxiosResponse<Itransaction[]> =
      await axios.get(API_ENDPOINT);
    return response.data;
  } catch (error) {
    const axiosError = error as AxiosError;
    throw new Error(`Error fetching the data: ${axiosError.message}`);
  }
}
