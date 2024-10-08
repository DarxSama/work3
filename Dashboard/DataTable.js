/**
 * This code was generated by Builder.io.
 */
import React from "react";
import styled from "styled-components";

const tableData = [
  {
    name: "Eleanor Pena",
    project: "Project 01",
    area: "Finance",
    status: "Completed",
    country: "Australia",
  },
  {
    name: "Savannah Nguyen",
    project: "Project 02",
    area: "Human Resources",
    status: "Off track",
    country: "Austria",
  },
  {
    name: "Ralph Edwards",
    project: "Project 05",
    area: "Marketing",
    status: "On track",
    country: "Colombia",
  },
  {
    name: "Floyd Miles",
    project: "Project 07",
    area: "Techology and...",
    status: "On track",
    country: "EEUU",
  },
  {
    name: "Jenny Wilson",
    project: "Project 02",
    area: "Finance",
    status: "Off track",
    country: "Germany",
  },
  {
    name: "Kathryn Murphy",
    project: "Project 03",
    area: "Human Resources",
    status: "On track",
    country: "Australia",
  },
  {
    name: "Theresa Webb",
    project: "Project 08",
    area: "Techology and...",
    status: "Completed",
    country: "El Salvador",
  },
  {
    name: "Kristin Watson",
    project: "Project 02",
    area: "Human Resources",
    status: "On track",
    country: "Mexico",
  },
  {
    name: "Darlene Robertson",
    project: "Project 01",
    area: "Finance",
    status: "Off track",
    country: "Brasil",
  },
  {
    name: "Annette Black",
    project: "Project 03",
    area: "Finance",
    status: "Off track",
    country: "Perú",
  },
  {
    name: "Marvin McKinney",
    project: "Project 09",
    area: "Marketing",
    status: "No status",
    country: "Chile",
  },
  {
    name: "Courtney Henry",
    project: "Project 01",
    area: "Finance",
    status: "On track",
    country: "EEUU",
  },
  {
    name: "Jacob Jones",
    project: "Project 06",
    area: "Marketing",
    status: "No status",
    country: "England",
  },
  {
    name: "Devon Lane",
    project: "Project 02",
    area: "Techology and...",
    status: "No status",
    country: "Canada",
  },
];

const DataTable = () => {
  return (
    <TableContainer>
      <TableHeader>
        <HeaderCell>Name</HeaderCell>
        <HeaderCell>Project</HeaderCell>
        <HeaderCell>Area</HeaderCell>
        <HeaderCell>Status</HeaderCell>
        <HeaderCell>Country</HeaderCell>
      </TableHeader>
      {tableData.map((row, index) => (
        <TableRow key={index}>
          <Cell>{row.name}</Cell>
          <Cell>{row.project}</Cell>
          <Cell>{row.area}</Cell>
          <Cell>{row.status}</Cell>
          <Cell>{row.country}</Cell>
        </TableRow>
      ))}
    </TableContainer>
  );
};

const TableContainer = styled.div`
  border-radius: 8px;
  border: 1px solid var(--Gray-100, #36434e);
  display: flex;
  flex-direction: column;
  overflow: hidden;
  color: var(--White, #fff);
  font: 400 16px Inter, sans-serif;
  margin-top: 40px;
  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

const TableHeader = styled.div`
  display: flex;
  width: 100%;
  font-weight: 600;
  background: var(--Background, #011625);
`;

const HeaderCell = styled.div`
  flex: 1;
  padding: 16px;
  border-right: 1px solid var(--Gray-100, #36434e);
  border-bottom: 1px solid var(--Gray-100, #36434e);
  @media (max-width: 991px) {
    white-space: normal;
  }
`;

const TableRow = styled.div`
  display: flex;
  width: 100%;
`;

const Cell = styled.div`
  flex: 1;
  padding: 16px;
  border-right: 1px solid var(--Gray-100, #36434e);
  border-bottom: 1px solid var(--Gray-100, #36434e);
  background: var(--Cards, #001d31);
`;

export default DataTable;
