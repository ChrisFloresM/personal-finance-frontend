import axios, { type AxiosError, type AxiosResponse } from "axios";

export const API_BASE = import.meta.env.VITE_API_BASE;

/* TResponse: type to be received by the server, TParams: Type to be used by the params */
export async function getItems<TResponse, TParams>(
  apiEndpoint: string,
  params: TParams,
  tokenPromise: Promise<string>,
): Promise<TResponse> {
  const token = await tokenPromise;

  try {
    const response = await axios.get(apiEndpoint, {
      params,
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
  } catch (error) {
    const axiosError = error as AxiosError;
    throw new Error(`Error fetching the data: ${axiosError.message}`);
  }
}

/* TBody is the type to be sent to the server and TResponse is the type of the response */
export async function addItem<TBody, TResponse>(
  apiEndpoint: string,
  data: TBody,
  tokenPromise: Promise<string>,
): Promise<TResponse> {
  const token = await tokenPromise;

  try {
    const response = await axios.post(apiEndpoint, data, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
  } catch (error) {
    const axiosError = error as AxiosError;
    throw new Error(`Error fetching the data: ${axiosError.message}`);
  }
}

export async function editItem<TBody, TResponse>(
  apiEndpoint: string,
  data: TBody,
  tokenPromise: Promise<string>,
): Promise<TResponse[]> {
  const token = await tokenPromise;

  try {
    const response: AxiosResponse<TResponse[]> = await axios.put(
      apiEndpoint,
      data,
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

export async function deleteItem(
  apiEndpoint: string,
  tokenPromise: Promise<string>,
): Promise<void> {
  const token = await tokenPromise;

  try {
    await axios.delete(apiEndpoint, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  } catch (error) {
    const axiosError = error as AxiosError;
    throw new Error(`Error deleting the item: ${axiosError.message}`);
  }
}
