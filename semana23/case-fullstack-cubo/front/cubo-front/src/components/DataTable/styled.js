import styled from "styled-components";

export const TableDataContainer = styled.table`
    border-collapse: collapse;

    th, tr, td {
        border: solid 1px rgb(120,120,120);
    }

    td {
        color: rgb(120,120,120);
    }
    th {
        color: rgb(100,100,100);
    }

    .numbers {
        padding: 0.7rem 0.9rem;
    }

    .names {
        padding: 0.8rem 0.7rem;
        text-align: start;
        width: 200px;
    }

    .participations {
        padding: 0.8rem 0.7rem;
        text-align: center;
    }
`