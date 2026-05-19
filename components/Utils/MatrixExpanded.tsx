/* eslint-disable no-nested-ternary */
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  // Typography,
} from "@mui/material";
import React from "react";
import CloseIcon from "@mui/icons-material/Close";
import CheckIcon from "@mui/icons-material/Check";

import { Branches, func } from "@components/Utils/matrixUtils";

function MatrixExpanded({ data }: { data?: string }) {
  const matrixData = data ?? "";
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableBody>
          {Branches.map((branch) => (
            <TableRow key={branch}>
              <TableCell component="th" scope="row" sx={{ fontWeight: 600 }}>
                {branch}
              </TableCell>
              <TableCell>
                <Table sx={{ minWidth: 650 }} aria-label="keywords table">
                  {Object.keys(func[branch as keyof typeof func] ?? {}).map(
                    (keyword) => {
                      const branchKeywords =
                        func[branch as keyof typeof func] ?? {};
                      const value =
                        branchKeywords[keyword as keyof typeof branchKeywords];

                      return (
                        <TableRow key={keyword}>
                          <TableCell>{keyword}</TableCell>
                          <TableCell>
                            {matrixData[value] === "1" ? (
                              <CheckIcon sx={{ color: "green" }} />
                            ) : (
                              <CloseIcon sx={{ color: "red" }} />
                            )}
                          </TableCell>
                        </TableRow>
                      );
                    }
                  )}
                </Table>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

MatrixExpanded.defaultProps = {
  data: "",
};

export default MatrixExpanded;
