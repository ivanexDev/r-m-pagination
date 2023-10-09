import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import "./BasicPagination.css";

import { getCharacterType } from "../../types/types";

interface BasicPaginationProps {
  getCharacters: getCharacterType;
  pages?: number;
}

const BasicPagination: React.FC<BasicPaginationProps> = ({getCharacters,pages,}) => {

	const handlePage = (e: React.MouseEvent<HTMLButtonElement>) => {
    getCharacters(e.target.innerText);
};

  return (
    <div className="paginador">
      <Stack spacing={2}>
        <Pagination count={pages} onClick={handlePage} />
      </Stack>
    </div>
  );
};

export default BasicPagination;
