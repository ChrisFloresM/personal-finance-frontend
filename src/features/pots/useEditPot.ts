import { useMutation, useQueryClient } from "@tanstack/react-query";
import useAccessToken from "../../hooks/useAccessToken.ts";
import { API_BASE, editItem } from "../../services/apiService.ts";
import type { IPotForm } from "./form/PotForm.tsx";
import type { IPotItem } from "./Pot.tsx";

const API_ENDPOINT = `${API_BASE}/pots`;

export function useEditPot(potId: number) {
  const { getToken } = useAccessToken();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: IPotForm) =>
      editItem<IPotForm, IPotItem>(
        `${API_ENDPOINT}/${potId}`,
        data,
        getToken(),
      ),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["pots"] }),
  });
}
