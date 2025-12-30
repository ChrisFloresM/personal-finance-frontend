import useAccessToken from "../../hooks/useAccessToken.ts";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import type { IPotForm } from "./form/PotForm.tsx";
import { registerPot } from "../../services/apiPots.ts";

export function useCreatePot() {
  const { getToken } = useAccessToken();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: IPotForm) => registerPot(data, getToken()),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["pots"] });
    },
  });
}
