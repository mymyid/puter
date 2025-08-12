import {addJS} from "https://cdn.jsdelivr.net/gh/jscroot/lib@0.2.8/element.min.js";

await addJS("https://js.puter.com/v2/");

puter.ai.chat("Explain quantum computing in simple terms", {model: 'claude-sonnet-4'})
            .then(response => {
                puter.print(response.message.content[0].text);
            });