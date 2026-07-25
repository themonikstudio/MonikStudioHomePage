import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import { createServer as createViteServer } from 'vite';
import { GoogleGenAI } from '@google/genai';
import dotenv from 'dotenv';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // Health check
  app.get('/api/health', (_req, res) => {
    res.json({ status: 'ok', studio: 'Monik Studio' });
  });

  // AI Project & 3D Print Assistant API Route using Gemini
  app.post('/api/ai-assistant', async (req, res) => {
    try {
      const { prompt, language = 'vi' } = req.body;

      if (!prompt || typeof prompt !== 'string') {
        res.status(400).json({ error: 'Prompt is required' });
        return;
      }

      const apiKey = process.env.GEMINI_API_KEY;
      if (!apiKey) {
        res.status(500).json({
          error: 'GEMINI_API_KEY is missing in environment variables.',
        });
        return;
      }

      const ai = new GoogleGenAI({ apiKey });

      const systemInstruction = `
You are the AI Assistant for "Monik Studio" (www.monikstudio.com) - an indie studio in Vietnam specializing in 3D design, 3D printing (PLA, PETG, TPU, ABS, Resin), embedded hardware electronics (ESP32, Arduino, Raspberry Pi, custom PCBs), programming, and useful DIY gadgets.

The user is sharing a gadget idea, problem, or custom 3D printing & hardware request.
Analyze their request and provide a detailed, highly encouraging response structured in JSON format with the following keys:

{
  "projectTitle": "Short catchy name for this project",
  "summary": "1-2 sentences summarizing the concept",
  "cadDesignAdvice": "3D modeling approach (software like Fusion 360, dimensions, tolerances, wall thickness)",
  "threeDPrintingSpecs": {
    "recommendedMaterial": "e.g. PLA+ / PETG / TPU",
    "infillPercentage": "e.g. 15-20% Gyroid",
    "layerHeight": "e.g. 0.2mm",
    "estimatedPrintTime": "e.g. 4-6 hours",
    "notes": "Printing orientation, support structure advice"
  },
  "electronicsBOM": [
    { "item": "e.g. ESP32-S3 Board", "qty": 1, "note": "Microcontroller with Wi-Fi/BLE" },
    { "item": "e.g. 0.96 OLED Display", "qty": 1, "note": "I2C 128x64 display" }
  ],
  "firmwareCodeSnippet": "Key pseudo code or C++/MicroPython snippet outline for the functionality",
  "feasibilityScore": 95,
  "monikStudioRecommendation": "How Monik Studio can help (custom CAD design, fast 3D printing service, turnkey assembly)"
}

Respond in ${language === 'en' ? 'English' : 'Vietnamese'}. Ensure valid JSON response.
      `;

      const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash',
        contents: prompt,
        config: {
          systemInstruction,
          responseMimeType: 'application/json',
          temperature: 0.7,
        },
      });

      const text = response.text;
      if (!text) {
        throw new Error('Empty response from Gemini model');
      }

      const data = JSON.parse(text);
      res.json(data);
    } catch (err: any) {
      console.error('Error in /api/ai-assistant:', err);
      res.status(500).json({
        error: 'Failed to generate project analysis',
        details: err?.message || String(err),
      });
    }
  });

  // Vite middleware for dev or static server for production
  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (_req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Monik Studio server running at http://0.0.0.0:${PORT}`);
  });
}

startServer();
