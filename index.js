const { faker } = require("@faker-js/faker");
const xlsx = require("xlsx");

// Generate mock data
const generateMockData = (numRecords) => {
  const data = [];
  for (let i = 0; i < numRecords; i++) {
    data.push({
      name: faker.internet.userName(),
      email: faker.internet.email(),
    });
  }
  return data;
};

// Create Excel sheet
const createExcelSheet = (data) => {
  const worksheet = xlsx.utils.json_to_sheet(data);
  const workbook = xlsx.utils.book_new();
  xlsx.utils.book_append_sheet(workbook, worksheet, "TestData");
  return workbook;
};

// Save Excel file
const saveExcelFile = (workbook, filename) => {
  xlsx.writeFile(workbook, filename);
};

// Main function
const main = () => {
  const totalRecords = 100;
  const filename = "data.xlsx";
  const mockData = generateMockData(totalRecords);
  const xlsxBook = createExcelSheet(mockData);
  saveExcelFile(xlsxBook, filename);
  console.log(
    `Excel file with name'${filename}' has been created successfully`
  );
};

main();
