import { zodResolver } from "@hookform/resolvers/zod";
import * as Dialog from "@radix-ui/react-dialog";
import { ArrowCircleDown, ArrowCircleUp, X } from "phosphor-react";
import { Controller, useForm } from "react-hook-form";
import { useContextSelector } from "use-context-selector";
import * as z from "zod";

import { TransactionsContext } from "../../contexts/transactionsContext";
import {
  CloseButton,
  Content,
  Overlay,
  TransactionType,
  TransactionTypeButton,
} from "./styles";

const newTransactionFormSchema = z.object({
  description: z.string(),
  price: z.number(),
  category: z.string(),
  type: z.enum(["income", "outcome"]),
});

type TransactionFormSchema = z.infer<typeof newTransactionFormSchema>;

interface NewTransactionModalProps {
  setOpen: (open: boolean) => void;
}

export function NewTransactionModal({ setOpen }: NewTransactionModalProps) {
  const createTransaction = useContextSelector(
    TransactionsContext,
    (context) => {
      return context.createTransaction;
    }
  );

  const {
    register,
    control,
    handleSubmit,
    formState: { isSubmitting },
    reset,
  } = useForm<TransactionFormSchema>({
    resolver: zodResolver(newTransactionFormSchema),
    defaultValues: {
      type: "income",
    },
  });

  async function handleNewTransaction(data: TransactionFormSchema) {
    const { description, price, category, type } = data;

    await createTransaction({
      description,
      price,
      category,
      type,
    });

    reset();
    setOpen(false);
  }

  return (
    <div>
      <Dialog.Portal>
        <Overlay />
        <Content>
          <Dialog.Title>Nova transação</Dialog.Title>

          <CloseButton>
            <X size={24} />
          </CloseButton>

          <form onSubmit={handleSubmit(handleNewTransaction)}>
            <input
              type="text"
              placeholder="Descrição"
              required
              {...register("description")}
            />

            <input
              type="number"
              placeholder="Preço"
              required
              {...register("price", { valueAsNumber: true })}
            />

            <input
              type="text"
              placeholder="Categoria"
              required
              {...register("category")}
            />

            <Controller
              control={control}
              name="type"
              render={({ field }) => {
                return (
                  <TransactionType
                    onValueChange={field.onChange}
                    value={field.value}
                  >
                    <TransactionTypeButton
                      type="button"
                      variant="income"
                      value="income"
                    >
                      <ArrowCircleUp size={24} /> Entrada
                    </TransactionTypeButton>

                    <TransactionTypeButton
                      type="button"
                      variant="outcome"
                      value="outcome"
                    >
                      <ArrowCircleDown size={24} /> Saída
                    </TransactionTypeButton>
                  </TransactionType>
                );
              }}
            />

            <button type="submit" disabled={isSubmitting}>
              Cadastrar
            </button>
          </form>
        </Content>
      </Dialog.Portal>
    </div>
  );
}
