import useAccessToken from "../../hooks/useAccessToken.ts";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { registerTransaction } from "../../services/apiTransactions.ts";
import type { ItransactionForm } from "./form/TransactionForm.tsx";

export function useCreateTransaction() {
  const { getToken } = useAccessToken();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: ItransactionForm) =>
      registerTransaction(data, getToken()),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["transactions"] });
    },
  });
}
