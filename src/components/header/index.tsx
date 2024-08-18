import * as Dialog from "@radix-ui/react-dialog";

import logoImg from "../../assets/logo.svg";
import { NewTransactionModal } from "../newTransactionModal";
import { HeaderContainer, HeaderContent, NewTransactionButton } from "./styles";

export function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <img src={logoImg} alt="" />

        <Dialog.Root>
          <NewTransactionModal />

          <Dialog.Trigger asChild>
            <NewTransactionButton>Nova transação</NewTransactionButton>
          </Dialog.Trigger>
        </Dialog.Root>
      </HeaderContent>
    </HeaderContainer>
  );
}
