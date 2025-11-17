# Google Sheets Integration Setup

Follow these steps to connect your booking form to Google Sheets:

## Step 1: Create Google Apps Script
1. Go to [Google Apps Script](https://script.google.com)
2. Click "New Project"
3. Delete the default code
4. Copy and paste the code from `google-apps-script.js`
5. Save the project (Ctrl+S) and give it a name like "Kumar & Co Booking"

## Step 2: Deploy as Web App
1. Click "Deploy" → "New deployment"
2. Choose type: "Web app"
3. Description: "Booking form handler"
4. Execute as: "Me"
5. Who has access: "Anyone"
6. Click "Deploy"
7. Copy the Web app URL (it will look like: https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec)

**IMPORTANT: If you already deployed before, you need to:**
- Click "Deploy" → "Manage deployments"
- Click the edit icon (pencil) next to your existing deployment
- Change the version to "New version"
- Click "Deploy" to update with the CORS fix

## Step 3: Update Your React App
1. Open `src/components/BookingModal.tsx`
2. Find the line: `const scriptUrl = 'YOUR_GOOGLE_APPS_SCRIPT_URL_HERE';`
3. Replace `YOUR_GOOGLE_APPS_SCRIPT_URL_HERE` with your Web app URL from Step 2

## Step 4: Test the Integration
1. Run your React app: `npm run dev`
2. Fill out and submit the booking form
3. Check your Google Drive - a new spreadsheet called "Kumar & Co - Booking Data" should be created
4. The spreadsheet will contain all form submissions with timestamps

## Features:
- ✅ Automatically creates a Google Sheet in your Drive
- ✅ Adds headers and formatting
- ✅ Appends new bookings to existing data
- ✅ Includes submission timestamps
- ✅ Auto-resizes columns for better readability
- ✅ Fallback to localStorage if Google Sheets fails

## Troubleshooting:
- **CORS Errors**: Make sure you've updated the Google Apps Script code and redeployed with "New version"
- **Permission Errors**: Ensure the script is deployed with "Execute as: Me" and "Who has access: Anyone"
- **Form Not Working**: Check the browser console for error messages
- **Spreadsheet Location**: The spreadsheet will be created in your Google Drive root folder
- **URL Issues**: Make sure the URL ends with `/exec` not `/execE`

## Security Note:
The Web app URL is public but only accepts POST requests with the specific data format, making it secure for your use case.