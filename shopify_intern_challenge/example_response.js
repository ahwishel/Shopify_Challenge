{
    "data": {
        "id": "cmpl-56Bd6z67MVthQOYWtj5ewd3rUsR4G",
        "object": "text_completion",
        "created": 1652156356,
        "model": "text-curie:001",
        "choices": [
            {
                "text": " The Valley of Kings is located in Egypt.",
                "index": 0,
                "logprobs": null,
                "finish_reason": "stop"
            }
        ]
    },
    "status": 200,
    "statusText": "",
    "headers": {
        "cache-control": "no-cache, must-revalidate",
        "content-length": "247",
        "content-type": "application/json"
    },
    "config": {
        "transitional": {
            "silentJSONParsing": true,
            "forcedJSONParsing": true,
            "clarifyTimeoutError": false
        },
        "transformRequest": [
            null
        ],
        "transformResponse": [
            null
        ],
        "timeout": 0,
        "xsrfCookieName": "XSRF-TOKEN",
        "xsrfHeaderName": "X-XSRF-TOKEN",
        "maxContentLength": -1,
        "maxBodyLength": -1,
        "headers": {
            "Accept": "application/json, text/plain, */*",
            "Content-Type": "application/json",
            "User-Agent": "OpenAI/NodeJS/2.0.5",
            "Authorization": "Bearer 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"
        },
        "method": "post",
        "data": "{\"prompt\":\"I am a highly intelligent question answering bot. If you ask me a question that is rooted in truth, I will give you the answer. If you ask me a question that is nonsense, trickery, or has no clear answer, I will respond with \\\"Unknown\\\".\\n\\nQ: What is human life expectancy in the United States?\\nA: Human life expectancy in the United States is 78 years.\\n\\nQ: Who was president of the United States in 1955?\\nA: Dwight D. Eisenhower was president of the United States in 1955.\\n\\nQ: Which party did he belong to?\\nA: He belonged to the Republican Party.\\n\\nQ: What is the square root of banana?\\nA: Unknown\\n\\nQ: How does a telescope work?\\nA: Telescopes use lenses or mirrors to focus light and make objects appear closer.\\n\\nQ: Where were the 1992 Olympics held?\\nA: The 1992 Olympics were held in Barcelona, Spain.\\n\\nQ: How many squigs are in a bonk?\\nA: Unknown\\n\\nQ: Where is the Valley of Kings?\\nA:\",\"temperature\":0,\"max_tokens\":100,\"top_p\":1,\"frequency_penalty\":0,\"presence_penalty\":0,\"stop\":[\"\\n\"]}",
        "url": "https://api.openai.com/v1/engines/text-curie-001/completions"
    },
    "request": {}
}