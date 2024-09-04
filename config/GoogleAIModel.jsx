const {
  GoogleGenerativeAI,
  HarmCategory,
  HarmBlockThreshold,
} = require("@google/generative-ai");

const apiKey = process.env.NEXT_PUBLIC_GEMINI_API_KEY;
const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
  model: "gemini-1.5-flash",
});

const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 64,
  maxOutputTokens: 8192,
  responseMimeType: "application/json",
};

const chatSession = model.startChat({
  generationConfig,
  // safetySettings: Adjust safety settings
  // See https://ai.google.dev/gemini-api/docs/safety-settings
  history: [
    {
      role: "user",
      parts: [
        {
          text: 'Referring to:\n{\n   "time": 1550476186479,\n   "blocks": [\n      {\n         "id": "oUq2g_tl8y",\n         "type": "header",\n         "data": {\n            "text": "Editor.js",\n            "level": 2\n         }\n      },\n      {\n         "id": "zbGZFPM-iI",\n         "type": "paragraph",\n         "data": {\n            "text": "Hey. Meet the new Editor. On this page you can see it in action — try to edit this text. Source code of the page contains the example of connection and configuration."\n         }\n      },\n      {\n         "id": "qYIGsjS5rt",\n         "type": "header",\n         "data": {\n            "text": "Key features",\n            "level": 3\n         }\n      },\n      {\n         "id": "XV87kJS_H1",\n         "type": "list",\n         "data": {\n            "style": "unordered",\n            "items": [\n               "It is a block-styled editor",\n               "It returns clean data output in JSON",\n               "Designed to be extendable and pluggable with a simple API"\n            ]\n         }\n      },\n      {\n         "id": "AOulAjL8XM",\n         "type": "header",\n         "data": {\n            "text": "What does it mean «block-styled editor»",\n            "level": 3\n         }\n      },\n      {\n         "id": "cyZjplMOZ0",\n         "type": "paragraph",\n         "data": {\n            "text": "Workspace in classic editors is made of a single contenteditable element, used to create different HTML markups. Editor.js <mark class=\\"cdx-marker\\">workspace consists of separate Blocks: paragraphs, headings, images, lists, quotes, etc</mark>. Each of them is an independent contenteditable element (or more complex structure) provided by Plugin and united by Editor\'s Core."\n         }\n      }\n   ],\n   "version": "2.8.1"\n}\n\nGenerate template for editor.js in JSON for Grocery TODO List',
        },
      ],
    },
    {
      role: "model",
      parts: [
        {
          text: '```json\n{\n  "time": 1678854698709,\n  "blocks": [\n    {\n      "id": "hN6v_Z3W-N",\n      "type": "header",\n      "data": {\n        "text": "Grocery TODO List",\n        "level": 1\n      }\n    },\n    {\n      "id": "Y3zN0-2_0X",\n      "type": "paragraph",\n      "data": {\n        "text": "This is your handy grocery list. Add items, check them off as you shop, and keep track of what you need."\n      }\n    },\n    {\n      "id": "42uY9Yq_d2",\n      "type": "list",\n      "data": {\n        "style": "unordered",\n        "items": [\n          "Milk",\n          "Eggs",\n          "Bread",\n          "Cheese"\n        ]\n      }\n    }\n  ],\n  "version": "2.8.1"\n}\n```\n\n**Explanation:**\n\n* **`time`**: Timestamp of when the content was last edited.\n* **`blocks`**:  An array of blocks that make up the content.\n* **`version`**:  The version of Editor.js used to create this content.\n\n**Block Breakdown:**\n\n* **`header`**: A heading block with level 1 (largest heading) and the text "Grocery TODO List".\n* **`paragraph`**: A paragraph block containing an introduction to the grocery list.\n* **`list`**: An unordered list block containing initial grocery items.\n\n**How to Use:**\n\n1. **Load Editor.js:** Include the Editor.js library in your HTML file.\n2. **Initialize Editor.js:** Use the Editor.js JavaScript API to initialize the editor with this JSON template.\n3. **Customize:** Add plugins for features like checklists, image uploads, or other functionality to enhance the grocery list experience.\n4. **Save/Load:** Implement mechanisms to save the generated JSON data and load it back into the editor later.\n\n**Example Editor.js Code Snippet:**\n\n```javascript\nconst editor = new EditorJS({\n  holder: \'editorjs\', // Replace with the ID of your editor container\n  data: { /* Your JSON data goes here */ },\n  tools: { /* Your custom plugins go here */ }\n});\n```\n\nThis template is a starting point. You can modify and extend it to fit your specific grocery list requirements. \n',
        },
      ],
    },
  ],
});

//   const result = await chatSession.sendMessage("INSERT_INPUT_HERE");
//   console.log(result.response.text());
