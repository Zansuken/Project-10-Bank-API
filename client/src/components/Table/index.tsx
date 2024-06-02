import { FC, ReactNode, useState } from "react";
import classes from "./index.module.scss";
import ColumnCell from "./ColumnCell";
import Row from "./Row";

export type ColumnCell = {
  label: string | ReactNode;
  key: string;
};

export type Row = {
  id: string;
  [key: string]: string | ReactNode;
};

type Props = {
  columns: ColumnCell[];
  rows: Row[];
  isRowsExpandable?: boolean;
};

const Table: FC<Props> = ({ columns = [], rows = [], isRowsExpandable }) => {
  const [expandedRows, setExpandedRows] = useState<string[]>([]);

  const handleRowClick = (row: Row) => {
    if (expandedRows.includes(row.id)) {
      setExpandedRows(expandedRows.filter((id) => id !== row.id));
    } else {
      setExpandedRows([...expandedRows, row.id]);
    }
  };

  return (
    <table className={classes["root"]}>
      <thead>
        <tr>
          {isRowsExpandable && <ColumnCell label="" />}
          {columns.map((column) => (
            <ColumnCell key={column.key} label={column.label} />
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((row) => (
          <Row
            key={row.id}
            content={columns.map((column) => row[column.key])}
            isExpandable={isRowsExpandable}
            isExpanded={expandedRows.includes(row.id)}
            onClick={() => isRowsExpandable && handleRowClick(row)}
            expandedContent={row.expandedContent}
          />
        ))}
      </tbody>
    </table>
  );
};

export default Table;
