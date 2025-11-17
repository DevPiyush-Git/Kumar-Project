// Google Apps Script code to save form data to Google Sheets
// Follow these steps to set up:

// 1. Go to https://script.google.com
// 2. Create a new project
// 3. Replace the default code with this code
// 4. Save the project
// 5. Deploy as a web app
// 6. Copy the web app URL and replace 'YOUR_GOOGLE_APPS_SCRIPT_URL_HERE' in BookingModal.tsx

// Handle OPTIONS request for CORS
function doOptions(e) {
  return ContentService
    .createTextOutput()
    .setMimeType(ContentService.MimeType.TEXT)
    .setHeaders({
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type'
    });
}

function doPost(e) {
  try {
    // Parse the JSON data from the request
    const data = JSON.parse(e.postData.contents);
    
    // Get or create the spreadsheet
    const spreadsheetId = getOrCreateSpreadsheet();
    const sheet = SpreadsheetApp.openById(spreadsheetId).getActiveSheet();
    
    // Add headers if this is the first row
    if (sheet.getLastRow() === 0) {
      sheet.getRange(1, 1, 1, 8).setValues([[
        'Name', 'Phone', 'Email', 'Address', 'Date', 'Time', 'Message', 'Submission Date'
      ]]);
      
      // Format headers
      sheet.getRange(1, 1, 1, 8).setFontWeight('bold');
      sheet.getRange(1, 1, 1, 8).setBackground('#2d5f2e');
      sheet.getRange(1, 1, 1, 8).setFontColor('white');
    }
    
    // Add the new data
    const newRow = [
      data.name,
      data.phone,
      data.email,
      data.address,
      data.date,
      data.time,
      data.message,
      data.submissionDate
    ];
    
    sheet.appendRow(newRow);
    
    // Auto-resize columns
    sheet.autoResizeColumns(1, 8);
    
    return ContentService
      .createTextOutput(JSON.stringify({success: true, message: 'Data saved successfully'}))
      .setMimeType(ContentService.MimeType.JSON)
      .setHeaders({
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'POST, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type'
      });
      
  } catch (error) {
    return ContentService
      .createTextOutput(JSON.stringify({success: false, error: error.toString()}))
      .setMimeType(ContentService.MimeType.JSON)
      .setHeaders({
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'POST, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type'
      });
  }
}

function getOrCreateSpreadsheet() {
  const fileName = 'Kumar & Co - Booking Data';
  
  // Check if spreadsheet already exists
  const files = DriveApp.getFilesByName(fileName);
  
  if (files.hasNext()) {
    return files.next().getId();
  } else {
    // Create new spreadsheet
    const spreadsheet = SpreadsheetApp.create(fileName);
    return spreadsheet.getId();
  }
}

// Test function (optional)
function testFunction() {
  const testData = {
    name: 'Test User',
    phone: '+971501234567',
    email: 'test@example.com',
    address: 'Dubai, UAE',
    date: '2024-01-15',
    time: '10:00',
    message: 'Test booking',
    submissionDate: new Date().toLocaleString()
  };
  
  const mockEvent = {
    postData: {
      contents: JSON.stringify(testData)
    }
  };
  
  const result = doPost(mockEvent);
  console.log(result.getContent());
}