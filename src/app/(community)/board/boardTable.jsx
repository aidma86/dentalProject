"use client";

import React, { useState, useMemo, useEffect } from "react";
import {
  MaterialReactTable,
  useMaterialReactTable,
} from "material-react-table";
import { Box, Button, IconButton, Tooltip, Chip } from "@mui/material";
import { Edit, Delete, Visibility, Lock, Search } from "@mui/icons-material";
import { getBoard } from "@/action/database";
import dayjs from "dayjs";


const BoardTable = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  // 데이터 로딩 시뮬레이션
  useEffect(() => {
    setIsLoading(true);
    // API 호출 시뮬레이션
    const fetchData = async () => {
      const result = await getBoard();
      setData(result);
      setIsLoading(false);
    };
    fetchData();
  }, []);

  // 컬럼 정의
  const columns = useMemo(
    () => [
      {
        accessorKey: "id",
        header: "번호",
        size: 100,
        muiTableHeadCellProps: {
          align: "center",
        },
        muiTableBodyCellProps: {
          align: "center",
        },
        Cell: ({ cell }) => (
          <Box sx={{ fontSize: "18px", fontWeight: "medium" }}>
            {cell.getValue()}
          </Box>
        ),
      },
      {
        accessorKey: "status",
        header: "분류",
        size: 150,
        muiTableHeadCellProps: {
          align: "center",
        },
        muiTableBodyCellProps: {
          align: "center",
        },
        filterVariant: "select",
        filterSelectOptions: [
          "빠른상담",
          "온라인상담",
          "임플란트",
          "교정전",
          "교정중",
          "일반치료",
          "심미치료",
        ],
        Cell: ({ cell }) => (
          <Box
            sx={{
              fontSize: "18px",
              textAlign: "center",
              fontWeight: "medium",
            }}
          >
            {cell.getValue()}
          </Box>
        ),
      },
      {
        accessorKey: "title",
        header: "제목",
        size: 400,
        muiTableHeadCellProps: {
          align: "center",
        },
        Cell: ({ cell }) => (
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <Lock sx={{ fontSize: 18, color: "text.secondary" }} />
            <Box sx={{ fontSize: "18px" }}>{cell.getValue()}</Box>
          </Box>
        ),
      },
      {
        accessorKey: "username",
        header: "작성자",
        size: 150,
        muiTableHeadCellProps: {
          align: "center",
        },
        muiTableBodyCellProps: {
          align: "center",
        },
        filterVariant: "text",
        Cell: ({ cell }) => (
          <Box sx={{ fontSize: "18px" }}>{cell.getValue().slice(0, -1)}*</Box>
        ),
      },
      {
        accessorKey: "createdat",
        header: "등록일",
        size: 150,
        muiTableHeadCellProps: {
          align: "center",
        },
        muiTableBodyCellProps: {
          align: "center",
        },
        filterVariant: "datetime-range",
        Cell: ({ cell }) => (
          <Box sx={{ fontSize: "18px" }}>
            {dayjs(cell.getValue()).format("YYYY-MM-DD")}
          </Box>
        ),
      },
      {
        accessorKey: "progress",
        header: "진행상태",
        size: 130,
        muiTableHeadCellProps: {
          align: "center",
        },
        muiTableBodyCellProps: {
          align: "center",
        },
        filterVariant: "select",
        filterSelectOptions: ["준비중", "확인중", "답변완료"],
        Cell: ({ cell }) => (
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "100%",
            }}
          >
            <Box
              variant="contained"
              size="medium"
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor:
                  cell.getValue() == 0
                    ? "#37b7e6"
                    : cell.getValue() == 1
                    ? "#f57c00;"
                    : "#8d8d8d",
                color: "white",
                fontSize: "14px",
                borderRadius: 50,
                fontWeight: "bold",
                width: "90px",
                height: "30px",
              }}
            >
              {cell.getValue() == 0 && "준비중"}
              {cell.getValue() == 1 && "확인중"}
              {cell.getValue() == 2 && "답변완료"}
            </Box>
          </Box>
        ),
      },
    ],
    []
  );

  // 액션 핸들러들
  const handleView = (row) => {
    console.log("상세 보기:", row.original);
  };

  const handleEdit = (row) => {
    console.log("수정:", row.original);
  };

  const handleDelete = (row) => {
    if (window.confirm("정말 삭제하시겠습니까?")) {
      setData((prev) => prev.filter((item) => item.id !== row.original.id));
    }
  };

  // 테이블 설정
  const table = useMaterialReactTable({
    columns,
    data,
    state: { isLoading },

    // 기본 기능들
    enablePagination: true,
    enableSorting: false,
    enableTopToolbar: false,
    enableColumnActions: false,

    // 초기 상태
    initialState: {
      pagination: { pageSize: 10 },
      sorting: [{ id: "id", desc: true }],
      density: "compact",
    },

    // 페이지네이션 옵션
    muiPaginationProps: {
      showRowsPerPage: false,
    },
    paginationDisplayMode: "pages",
    enableBottomToolbar: true,

    // 페이지네이션 가운데로
    muiBottomToolbarProps: {
      sx: {
        "& .MuiBox-root": {
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
        },
      },
    },

    muiTablePaperProps: {
      elevation: 0, //change the mui box shadow
    },

    //테이블 간격
    muiTableBodyProps: {
      sx: {
        "& tr > td": {
          lineHeight: "4em",
        },
      },
    },

    // 행 액션들
    renderRowActions: ({ row }) => (
      <Box sx={{ display: "flex", gap: 1 }}>
        <Tooltip title="상세 보기">
          <IconButton size="small" onClick={() => handleView(row)}>
            <Visibility />
          </IconButton>
        </Tooltip>
        <Tooltip title="수정">
          <IconButton size="small" onClick={() => handleEdit(row)}>
            <Edit />
          </IconButton>
        </Tooltip>
        <Tooltip title="삭제">
          <IconButton size="small" onClick={() => handleDelete(row)}>
            <Delete />
          </IconButton>
        </Tooltip>
      </Box>
    ),

    // 테이블 스타일
    muiTableProps: {
      sx: {
        "& .MuiTableHead-root": {
          backgroundColor: "#f5f5f5",
        },
        "& .MuiTableHead-root .MuiTableCell-root": {
          fontWeight: "bold",
          fontSize: "18px",
        },
      },
    },

    // 행 스타일
    muiTableBodyRowProps: ({ row }) => ({
      sx: {
        "&:hover": {
          backgroundColor: "#f5f5f5",
        },
      },
    }),
  });

  return (
    <Box sx={{ p: 2 }}>
      <MaterialReactTable table={table} />
    </Box>
  );
};

export default BoardTable;
