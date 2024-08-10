import * as Dialog from "@radix-ui/react-dialog";

import {
  CloseButton,
  Content,
  Overlay,
  TransactionType,
  TransactionTypeButton,
} from "./styles";
import { ArrowCircleDown, ArrowCircleUp, X } from "phosphor-react";

export function NewTransactionModal() {
  return (
    <div>
      <Dialog.Portal>
        <Overlay />
        <Content>
          <Dialog.Title>Nova transação</Dialog.Title>

          <CloseButton>
            <X size={24} />
          </CloseButton>

          <form action="">
            <input type="text" placeholder="Descrição" required />
            <input type="number" placeholder="Preço" />
            <input type="text" placeholder="Categoria" />

            <TransactionType>
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

            <button type="submit">Cadastrar</button>
          </form>
        </Content>
      </Dialog.Portal>
    </div>
  );
}
