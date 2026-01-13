export default function SharedTableColumns(tableType) {

    const applyColumns = [
    { field: "applicantName", headerName: "Application", width: 200 },
    { field: "date", headerName: "Date", width: 100 },
    { field: "apply", headerName: "Apply", width: 100 },
    { field: "workModel", headerName: "Work Model", width: 150 },
    { field: "location", headerName: "Location", width: 150 },
    { field: "salary", headerName: "Salary", width: 150 },
    { field: "newGrad", headerName: "Is New Grad", width: 150 },
    { field: "company", headerName: "Company", width: 100 },
    { field: "companySize", headerName: "Company Size", width: 150 },
  ];

  switch (tableType) {
    case 'apply':
      return applyColumns;
    default:
      return [];
  }

}