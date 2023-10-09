import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import "./BasicPagination.css";

import { getCharacterType } from "../../types/types";

interface BasicPaginationProps {
  getCharacters: getCharacterType;
  pages?: number;
}

const BasicPagination: React.FC<BasicPaginationProps> = ({pages,getCharacters}) => {

  return (
    <div className="paginador">
      <Stack spacing={2}>
        <Pagination count={pages} onChange={(event: React.ChangeEvent<unknown>, page: number)=>{getCharacters(page)}} />
      </Stack>
    </div>
  );
};

export default BasicPagination;
