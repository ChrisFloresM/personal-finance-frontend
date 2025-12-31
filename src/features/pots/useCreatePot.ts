import useAccessToken from "../../hooks/useAccessToken.ts";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import type { IPotForm } from "./form/PotForm.tsx";
import { addItem, API_BASE } from "../../services/apiService.ts";

const API_ENDPOINT = `${API_BASE}/pots`;

export function useCreatePot() {
  const { getToken } = useAccessToken();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: IPotForm) =>
      addItem<IPotForm, void>(API_ENDPOINT, data, getToken()),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["pots"] });
    },
  });
}
