# puter
Puter.Js

Berdasarkan reverse engineering kode Puter.js, berikut adalah detail API endpoint untuk chat:Berdasarkan reverse engineering kode Puter.js, berikut adalah detail lengkap untuk menggunakan API langsung:

## **Endpoint & Method:**
- **URL**: `https://api.puter.com/drivers/call`
- **Method**: `POST`
- **Content-Type**: `application/json`

## **Headers Wajib:**
```
Authorization: Bearer YOUR_AUTH_TOKEN
Content-Type: application/json
```

## **Body Request Structure:**
```json
{
  "interface": "puter-chat-completion",
  "driver": "openai-completion",
  "method": "complete",
  "args": {
    "messages": [
      {
        "content": "Halo, siapa kamu?"
      }
    ]
  }
}
```

## **Driver Mapping berdasarkan Model:**
- **OpenAI**: `"driver": "openai-completion"`
- **Claude/Anthropic**: `"driver": "claude"`  
- **Google Gemini**: `"driver": "gemini"`
- **Mistral**: `"driver": "mistral"`
- **Groq**: `"driver": "groq"`
- **XAI**: `"driver": "xai"`
- **DeepSeek**: `"driver": "deepseek"`

## **Contoh Postman Request:**

### 1. **Basic Chat dengan GPT-4:**
```json
POST https://api.puter.com/drivers/call

Headers:
Authorization: Bearer YOUR_TOKEN
Content-Type: application/json

Body:
{
  "interface": "puter-chat-completion",
  "driver": "openai-completion",
  "method": "complete",
  "args": {
    "messages": [{"content": "Halo"}],
    "model": "gpt-4"
  }
}
```

### 2. **Chat dengan Claude:**
```json
{
  "interface": "puter-chat-completion", 
  "driver": "claude",
  "method": "complete",
  "args": {
    "messages": [{"content": "Jelaskan AI"}],
    "model": "claude-3-5-sonnet-latest",
    "temperature": 0.7
  }
}
```

## **Cara Mendapatkan Auth Token:**
1. Buka https://puter.com
2. Login/Register 
3. Buka Developer Tools (F12)
4. Console: `localStorage.getItem('puter.auth.token')`
5. Copy token yang muncul

## **Response Format:**
```json
{
  "success": true,
  "result": {
    "message": {
      "role": "assistant", 
      "content": "Response text here..."
    },
    "model": "gpt-4"
  }
}
```

Dengan informasi ini, Anda bisa langsung testing di Postman tanpa perlu menggunakan SDK JavaScript!
