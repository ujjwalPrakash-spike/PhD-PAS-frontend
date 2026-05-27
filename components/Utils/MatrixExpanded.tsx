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

import { funcDepartmentWise } from "@components/Utils/matrixUtils";

function MatrixExpanded({ data }: { data?: string }) {
  const matrixData = data ?? "";
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="eligibility table">
        <TableBody>
          {Object.entries(funcDepartmentWise).map(([dept, index]) => (
            <TableRow key={dept}>
              <TableCell component="th" scope="row" sx={{ fontWeight: 600 }}>
                {dept}
              </TableCell>
              <TableCell>
                {matrixData[index] === "1" ? (
                  <CheckIcon sx={{ color: "green" }} />
                ) : (
                  <CloseIcon sx={{ color: "red" }} />
                )}
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
