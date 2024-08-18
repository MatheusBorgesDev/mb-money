import * as Dialog from "@radix-ui/react-dialog";
import { useState } from "react";

import logoImg from "../../assets/logo.svg";
import { NewTransactionModal } from "../newTransactionModal";
import { HeaderContainer, HeaderContent, NewTransactionButton } from "./styles";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <HeaderContainer>
      <HeaderContent>
        <img src={logoImg} alt="" />

        <Dialog.Root open={open} onOpenChange={setOpen}>
          <NewTransactionModal setOpen={setOpen} />

          <Dialog.Trigger asChild>
            <NewTransactionButton>Nova transação</NewTransactionButton>
          </Dialog.Trigger>
        </Dialog.Root>
      </HeaderContent>
    </HeaderContainer>
  );
}
