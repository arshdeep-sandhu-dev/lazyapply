import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import SharedTableColumns from "../constants/SharedTableColumns.jsx";

// Universal SharedTable
// Usage:
// <SharedTable tableType="apply" rows={rows} getRowId={(r) => r.applicationId} loading={loading} />
export default function SharedTable({
  tableType,
  rows = [],
  loading = false,

  columns: columnsOverride,
  getRowId,
  onRowClick,
  paginationModel,
  onPaginationModelChange,
  pageSizeOptions = [10, 25, 50, 100],
  checkboxSelection = false,
  disableRowSelectionOnClick = true,
}) {
  const columns = React.useMemo(() => {
    return columnsOverride?.length ? columnsOverride : SharedTableColumns(tableType);
  }, [columnsOverride, tableType]);

  return (
    <DataGrid
      rows={rows}
      columns={columns}
      loading={loading}
      getRowId={getRowId}
      onRowClick={onRowClick}
      paginationModel={paginationModel}
      onPaginationModelChange={onPaginationModelChange}
      pageSizeOptions={pageSizeOptions}
      checkboxSelection={checkboxSelection}
      disableRowSelectionOnClick={disableRowSelectionOnClick}
      autoHeight
    />
  );
}
