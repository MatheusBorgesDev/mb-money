import { zodResolver } from "@hookform/resolvers/zod";
import { MagnifyingGlass } from "phosphor-react";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { TransactionsContext } from "../../../../contexts/transactionsContext";
import { SearchFormContainer } from "./styles";

const searchFormSchema = z.object({
  query: z.string(),
});

type SearchFormSchema = z.infer<typeof searchFormSchema>;

export function SearchForm() {
  const { fetchTransactions } = useContext(TransactionsContext);

  const { register, handleSubmit } = useForm<SearchFormSchema>({
    resolver: zodResolver(searchFormSchema),
  });

  async function handleSearchTransactions(data: SearchFormSchema) {
    await fetchTransactions(data.query);
    console.log(data.query);
  }

  return (
    <SearchFormContainer onSubmit={handleSubmit(handleSearchTransactions)}>
      <input
        type="text"
        placeholder="Busque por transações"
        {...register("query")}
      />

      <button type="submit">
        <MagnifyingGlass size={20} />
        Buscar
      </button>
    </SearchFormContainer>
  );
}
