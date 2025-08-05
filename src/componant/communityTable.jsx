"use client"

import React, { useState, useMemo, useEffect } from 'react';
import {
  MaterialReactTable,
  useMaterialReactTable,
} from 'material-react-table';
import { Box, Button, IconButton, Tooltip, Chip } from '@mui/material';
import {
  Edit,
  Delete,
  Visibility,
  Lock,
  Search,
} from '@mui/icons-material';

const ConsultationTable = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  // 데이터 로딩 시뮬레이션
  useEffect(() => {
    setIsLoading(true);
    // API 호출 시뮬레이션
    setTimeout(() => {
      setData([
        {
          id: 452,
          status: '빠른 상담',
          title: '신선*님이 빠른상담을 남기셨습니다.',
          author: '신선*',
          registrationDate: '2025-06-29',
          progressStatus: '준비중',
        },
        {
          id: 451,
          status: '빠른 상담',
          title: '정원두*님이 빠른 상담을 남기셨습니다.',
          author: '정원두*',
          registrationDate: '2025-06-29',
          progressStatus: '준비중',
        },
        {
          id: 450,
          status: '빠른 상담',
          title: '김은*님이 빠른상담을 남기셨습니다.',
          author: '김은*',
          registrationDate: '2025-06-17',
          progressStatus: '준비중',
        },
        {
          id: 449,
          status: '교정전',
          title: '임플란트 문의',
          author: '이수*',
          registrationDate: '2025-06-16',
          progressStatus: '준비중',
        },
        {
          id: 448,
          status: '빠른 상담',
          title: '안병*님이 빠른상담을 남기셨습니다.',
          author: '안병*',
          registrationDate: '2025-06-15',
          progressStatus: '준비중',
        },
        {
          id: 447,
          status: '교정전',
          title: 'TEST',
          author: '윤성*',
          registrationDate: '2025-06-09',
          progressStatus: '준비중',
        },
        {
          id: 446,
          status: '빠른 상담',
          title: '이재*님이 빠른상담을 남기셨습니다.',
          author: '이재*',
          registrationDate: '2025-06-06',
          progressStatus: '준비중',
        },
        {
          id: 445,
          status: '빠른 상담',
          title: '박용*님이 빠른상담을 남기셨습니다.',
          author: '박용*',
          registrationDate: '2025-05-21',
          progressStatus: '준비중',
        },
        {
          id: 444,
          status: '빠른 상담',
          title: '김혜*님이 빠른상담을 남기셨습니다.',
          author: '김혜*',
          registrationDate: '2025-05-21',
          progressStatus: '준비중',
        },
        {
          id: 443,
          status: '빠른 상담',
          title: '박현*님이 빠른상담을 남기셨습니다.',
          author: '박현*',
          registrationDate: '2025-05-20',
          progressStatus: '준비중',
        },
      ]);
      setIsLoading(false);
    }, 1000);
  }, []);

  // 컬럼 정의
  const columns = useMemo(
    () => [
      {
        accessorKey: 'id',
        header: '번호',
        size: 80,
        enableColumnFilter: false,
        enableSorting: true,
        Cell: ({ cell }) => (
          <Box sx={{ fontWeight: 'medium' }}>
            {cell.getValue()}
          </Box>
        ),
      },
      {
        accessorKey: 'status',
        header: '상태',
        size: 120,
        filterVariant: 'select',
        filterSelectOptions: ['빠른 상담', '교정전'],
        Cell: ({ cell }) => (
          <Box
            sx={{
              backgroundColor: cell.getValue() === '빠른 상담' ? '#e3f2fd' : '#fff3e0',
              color: cell.getValue() === '빠른 상담' ? '#1976d2' : '#f57c00',
              px: 1.5,
              py: 0.5,
              borderRadius: 1,
              fontSize: '12px',
              textAlign: 'center',
              fontWeight: 'medium',
            }}
          >
            {cell.getValue()}
          </Box>
        ),
      },
      {
        accessorKey: 'title',
        header: '제목',
        size: 300,
        Cell: ({ cell }) => (
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <Lock sx={{ fontSize: 16, color: 'text.secondary' }} />
            <Box sx={{ fontSize: '14px' }}>
              {cell.getValue()}
            </Box>
          </Box>
        ),
      },
      {
        accessorKey: 'author',
        header: '작성자',
        size: 100,
        filterVariant: 'text',
        Cell: ({ cell }) => (
          <Box sx={{ fontSize: '14px' }}>
            {cell.getValue()}
          </Box>
        ),
      },
      {
        accessorKey: 'registrationDate',
        header: '등록일',
        size: 120,
        filterVariant: 'date-range',
        Cell: ({ cell }) => (
          <Box sx={{ fontSize: '14px' }}>
            {cell.getValue()}
          </Box>
        ),
      },
      {
        accessorKey: 'progressStatus',
        header: '진행상태',
        size: 100,
        filterVariant: 'select',
        filterSelectOptions: ['준비중', '진행중', '완료'],
        Cell: ({ cell }) => (
          <Button
            variant="contained"
            size="small"
            sx={{
              backgroundColor: '#1976d2',
              color: 'white',
              fontSize: '12px',
              px: 1.5,
              py: 0.5,
              minWidth: 'auto',
              '&:hover': {
                backgroundColor: '#1565c0',
              },
            }}
          >
            {cell.getValue()}
          </Button>
        ),
      },
    ],
    []
  );

  // 액션 핸들러들
  const handleView = (row) => {
    console.log('상세 보기:', row.original);
  };

  const handleEdit = (row) => {
    console.log('수정:', row.original);
  };

  const handleDelete = (row) => {
    if (window.confirm('정말 삭제하시겠습니까?')) {
      setData(prev => prev.filter(item => item.id !== row.original.id));
    }
  };

  // 테이블 설정
  const table = useMaterialReactTable({
    columns,
    data,
    state: { isLoading },
    
    // 기본 기능들
    enableColumnResizing: true,
    enableColumnOrdering: false,
    enableSorting: true,
    enableFiltering: true,
    enablePagination: true,
    enableRowSelection: false,
    enableRowActions: false,
    enableDensityToggle: false,
    enableFullScreenToggle: false,
    enableGlobalFilter: false,
    
    // 초기 상태
    initialState: {
      pagination: { pageSize: 10 },
      sorting: [
        { id: 'id', desc: true },
      ],
      density: 'compact',
      showColumnFilters: false,
      showGlobalFilter: false,
    },
    
    // 페이지네이션 옵션
    muiPaginationProps: {
      rowsPerPageOptions: [10, 20, 50],
      showFirstButton: true,
      showLastButton: true,
    },

    renderBottomToolbarCustomActions: ({ table }) => (
      <Button
        variant="contained"
        color="lightblue"
        //extract all selected rows from the table instance and do something with them
        onClick={() => handleDownloadRows(table.getSelectedRowModel().rows)}
      >
        Download Selected Rows
      </Button>
    ),
    
    // 행 액션들
    renderRowActions: ({ row }) => (
      <Box sx={{ display: 'flex', gap: 1 }}>
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
    
    // 상단 툴바 커스텀 액션
    renderTopToolbarCustomActions: ({ table }) => (
      <Box sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <Box sx={{ fontSize: '14px', color: 'text.secondary' }}>선택</Box>
          <IconButton size="small">
            <Search />
          </IconButton>
        </Box>
        <Button
          variant="outlined"
          size="small"
          sx={{ ml: 2 }}
        >
          Search
        </Button>
        <Button
          variant="contained"
          size="small"
          sx={{ 
            ml: 'auto',
            backgroundColor: '#1976d2',
            '&:hover': {
              backgroundColor: '#1565c0',
            },
          }}
        >
          상담하기
        </Button>
      </Box>
    ),
    
    // 테이블 스타일
    muiTableProps: {
      sx: {
        '& .MuiTableHead-root': {
          backgroundColor: '#f5f5f5',
        },
        '& .MuiTableHead-root .MuiTableCell-root': {
          fontWeight: 'bold',
          fontSize: '14px',
        },
      },
    },
    
    // 행 스타일
    muiTableBodyRowProps: ({ row }) => ({
      sx: {
        '&:hover': {
          backgroundColor: '#f5f5f5',
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

export default ConsultationTable;