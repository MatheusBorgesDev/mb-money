import { useContext } from "react";
import { TransactionsContext } from "../../contexts/transactionsContext";

import { Header } from "../../components/header";
import { Summary } from "../../components/summary";
import { SearchForm } from "./components/searchForm";

import {
  PriceHighlight,
  TransactionsContainer,
  TransactionsTable,
} from "./styles";

export function Transactions() {
  const { transactions } = useContext(TransactionsContext);

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
                <td width="45%">{transaction.from}</td>
                <td>
                  <PriceHighlight
                    variant={
                      transaction.type === "income" ? "income" : undefined
                    }
                  >{`R$ ${transaction.price}`}</PriceHighlight>
                </td>
                <td>{transaction.category}</td>
                <td>{transaction.createdAt}</td>
              </tr>
            ))}
          </tbody>
        </TransactionsTable>
      </TransactionsContainer>
    </div>
  );
}
