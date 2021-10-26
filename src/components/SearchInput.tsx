import { Wrapper, Input } from "./SearchInput.styles";
import { FaSearch } from "react-icons/fa";
export const SearchInput = () => {
  return (
    <Wrapper>
      <FaSearch />
      <Input placeholder="Search a Pokemon" />
    </Wrapper>
  );
};
