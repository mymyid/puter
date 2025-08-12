import {addJS} from "https://cdn.jsdelivr.net/gh/jscroot/lib@0.2.8/element.min.js";

await addJS("https://js.puter.com/v2/");



let query="Explain quantum computing in simple terms";
let model={model: 'claude-sonnet-4'};
let models={model: 'claude-sonnet-4', stream: true};


export function puterAI(query,model,responseFunction) {
    puter.ai.chat(query, model)
        .then(response => {
            console.log(response);
            console.log(response.message);
            console.log(response.message.content);
            // Ambil text dari response
            const text = response.message.content[0].text;
            console.log('Text:', text);
            
            // Print ke Puter UI
            //puter.print(text);

            // Panggil callback function dengan text
            responseFunction(text);
        })
        .catch(error => {
            console.log('Error:', error);
            responseFunction(null, error); // Pass error sebagai parameter kedua
        });
}

// Callback function
function handleAIResponse(text, error) {
    if (error) {
        console.error('AI Error:', error);
        return;
    }
    
    console.log('AI berkata:', text);
    // Lakukan sesuatu dengan text response
}

// Panggil fungsi
//puterAI(
//    query,
//    model,
//    handleAIResponse
//);


async function streamClaudeResponse(query,model) {
    const response = await puter.ai.chat(
        query, models
    );
    let fullText = '';
    for await (const part of response) {
        fullText += part.text;
        puter.print(part?.text);
        console.log(part.text);
    }
    console.log('Streaming complete. Full text:', fullText);
    return fullText;
}

// Use Claude Sonnet 4 (default)
streamClaudeResponse(query,models);