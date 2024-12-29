import React from 'react';

interface TableRow {
  id?: string | number;
  guid?: string;
  [key: string]: any;
}

interface TableProps {
  header: string[];
  rows: TableRow[];
  rowClick: (index: number) => void;
}

const Table: React.FC<TableProps> = ({ header, rows, rowClick }) => {
  return (
    <table>
      <thead>
        <tr>
          {header.map((item, index) => (
            <th key={index}>{item}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((row, index) => {
          return (
            <tr
              key={row.id || row.guid}
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