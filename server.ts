import express, { Request, Response } from 'express';  // Explicitly importing Request and Response from 'express'
import fs from 'fs';  // Importing fs module
import path from 'path';

const app = express();
const port = 5000;

app.use(express.json());  // Using built-in JSON parser

// API to save data to a JSON file
app.post("/saveData", (req: Request, res: Response) => {
  const newPatientData = req.body;

  try {
    const filePath = path.join(__dirname, "data", "patients.json");

    // Ensure data directory exists
    if (!fs.existsSync(path.dirname(filePath))) {
      fs.mkdirSync(path.dirname(filePath));
    }

    // Read the existing data if it exists
    const existingData = fs.existsSync(filePath)
      ? JSON.parse(fs.readFileSync(filePath, 'utf8'))
      : [];

    // Add the new patient data
    const updatedData = [...existingData, newPatientData];

    // Write to the file
    fs.writeFileSync(filePath, JSON.stringify(updatedData, null, 2), 'utf8');

    // Use the correct status code method
    res.status(200).json({ message: "Data saved successfully." });
  } catch (error) {
    console.error("Error saving data:", error);
    // Use the correct status code method
    res.status(500).json({ message: "Failed to save data." });
  }
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
