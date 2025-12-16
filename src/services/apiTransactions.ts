import axios from "axios";
import type { AxiosError, AxiosResponse } from "axios";
import type { Itransaction } from "../features/transactions/TransactionsTable.tsx";

const API_BASE = import.meta.env.VITE_API_BASE;
const API_ENDPOINT = `${API_BASE}/transactions`;

export async function getTransactions(
  tokenPromise: Promise<string>,
): Promise<Itransaction[]> {
  const token = await tokenPromise;

  try {
    const response: AxiosResponse<Itransaction[]> = await axios.get(
      API_ENDPOINT,
      {
        headers: { Authorization: `Bearer ${token}` },
      },
    );
    return response.data;
  } catch (error) {
    const axiosError = error as AxiosError;
    throw new Error(`Error fetching the data: ${axiosError.message}`);
  }
}
