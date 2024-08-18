import { X } from "phosphor-react";
import { useContext } from "react";

import { Header } from "../../components/header";
import { Summary } from "../../components/summary";
import { TransactionsContext } from "../../contexts/transactionsContext";
import { dateFormatter, priceFormatter } from "../../utils/formetter";
import { SearchForm } from "./components/searchForm";
import {
  DeleteButton,
  PriceHighlight,
  TransactionsContainer,
  TransactionsTable,
} from "./styles";

export function Transactions() {
  const { transactions, deleteTransaction } = useContext(TransactionsContext);

  return (
    <div>
      <Header />
      <Summary />

      <TransactionsContainer>
        <SearchForm />

        <TransactionsTable>
          <tbody>
            {transactions.map((transaction) => (
              <tr key={transaction.id}>
                <td width="45%">{transaction.description}</td>
                <td>
                  <PriceHighlight
                    variant={
                      transaction.type === "income" ? "income" : undefined
                    }
                  >
                    {transaction.type === "outcome" && "-"}{" "}
                    {priceFormatter.format(transaction.price)}
                  </PriceHighlight>
                </td>
                <td>{transaction.category}</td>
                <td>{dateFormatter.format(new Date(transaction.createdAt))}</td>
                <td>
                  <DeleteButton
                    onClick={() => deleteTransaction(transaction.id)}
                  >
                    <X size={20} />
                  </DeleteButton>
                </td>
              </tr>
            ))}
          </tbody>
        </TransactionsTable>
      </TransactionsContainer>
    </div>
  );
}
