import React from 'react';

import "./styles.css";

interface TableRow {
  id?: string | number;
  guid?: string;
  selectedIndex?: number;
  [key: string]: any;
}

interface TableProps {
  header: string[];
  rows: TableRow[];
  selectedIndex: number;
  rowClick: (index: number) => void;
}

const Table: React.FC<TableProps> = ({ header, rows, selectedIndex, rowClick }) => {
  return (
    <table>
      <thead>
        <tr>
          {header.map((item) => (
            <th key={item}>{item}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((row, index) => {
          return (
            <tr
              key={row.id || row.guid}
              className={selectedIndex === index ? "selected-row" : ""}
              onClick={() => {rowClick(index)}}
            >
              {Object.keys(row).map((key) => (
                <td
                  key={key}
                >
                  {row[key]}
                </td>
              ))}
            </tr>
          )
        })}
      </tbody>
    </table>
  );
};

export default Table;
