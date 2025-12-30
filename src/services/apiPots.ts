import axios, { type AxiosError, type AxiosResponse } from "axios";
import type { IPotItem } from "../features/pots/Pot.tsx";
import type { IPotForm } from "../features/pots/form/PotForm.tsx";

const API_BASE = import.meta.env.VITE_API_BASE;
const API_ENDPOINT = `${API_BASE}/pots`;

export async function getPots(
  tokenPromise: Promise<string>,
): Promise<IPotItem[]> {
  const token = await tokenPromise;

  try {
    const response: AxiosResponse<IPotItem[]> = await axios.get(API_ENDPOINT, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
  } catch (error) {
    const axiosError = error as AxiosError;
    throw new Error(`Error fetching the data: ${axiosError.message}`);
  }
}

export async function registerPot(
  data: IPotForm,
  tokenPromise: Promise<string>,
): Promise<void> {
  const token = await tokenPromise;

  try {
    await axios.post(API_ENDPOINT, data, {
      headers: { Authorization: `Bearer ${token}` },
    });
  } catch (error) {
    const axiosError = error as AxiosError;
    throw new Error(`Error fetching the data: ${axiosError.message}`);
  }
}
