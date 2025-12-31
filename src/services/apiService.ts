import axios, { type AxiosError, type AxiosResponse } from "axios";

export const API_BASE = import.meta.env.VITE_API_BASE;

/* T: type to be received by the server, TParams: Type to be used by the params */
export async function getItems<TBody, TParams>(
  apiEndpoint: string,
  params: TParams,
  tokenPromise: Promise<string>,
): Promise<TBody> {
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

/* TForm is the received form type and J is the item type body to be sent to the server */
export async function addItem<TForm, TBody>(
  apiEndpoint: string,
  data: TForm,
  tokenPromise: Promise<string>,
): Promise<TBody> {
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

export async function editItem<TForm, TBody>(
  apiEndpoint: string,
  data: TForm,
  tokenPromise: Promise<string>,
): Promise<TBody[]> {
  const token = await tokenPromise;

  try {
    const response: AxiosResponse<TBody[]> = await axios.put(
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
