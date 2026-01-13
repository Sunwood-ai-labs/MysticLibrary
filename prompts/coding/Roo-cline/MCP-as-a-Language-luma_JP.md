下記の指令書に従って処理を行って


---

# 🛠️ 環境設定
- GitHub CLI設定
  - ghコマンドは認証済みとして進める
- npmのパッケージのオーナ名は下記を参考にして
  - @sunwood-ai-labs/dice-server-mcp
- リポジトリ
  - main ブランチをベースにする
  - コミットは基本 develop ブランチに行う

# 指令書

- luma-mcp-server という名前のリポジトリ名にして
- これでGithubとnpmに公開リポジトリを作成して
- 作成後に、下記で必要なタスクを洗い出してissueに登録して
- いくつissueを作っても大丈夫です
- 下記の luma のドキュメントを参考にして MCP サーバーを作成して
- 環境変数の LUMA_API_KEY を使用して
- パラメータの入力部分は英語にして

## luma API ドキュメント

Dream Machine API
Keys
Usage
Billing & Credits
Home
API
Status
Guides
API Reference
Changelog

Search
CTRL-K
Documentation
Welcome

API

Python SDK

JavaScript SDK
Image Generation
Video Generation
Rate Limits
Errors
FAQ
Powered by 
Video Generation
Suggest Edits
Installation
JavaScript

npm install lumaai
https://www.npmjs.com/package/lumaai

Authentication
Get a key from https://lumalabs.ai/dream-machine/api/keys
In JavaScript, you can pass the API key using the authToken parameter when creating the client.

JavaScript

const { LumaAI } = require('lumaai');

const client = new LumaAI({
  authToken: process.env.LUMAAI_API_KEY
});
Polling for Generation Status and Retrieving Video
In JavaScript, use async/await for handling the polling.

Javascript

npm install node-fetch
Javascript

const fetch = require('node-fetch');
const fs = require('fs');
const { LumaAI } = require('lumaai');

const client = new LumaAI({ authToken: process.env.LUMAAI_API_KEY });

async function generateVideo() {
    let generation = await client.generations.create({
        prompt: "A teddy bear in sunglasses playing electric guitar and dancing"
    });

    let completed = false;

    while (!completed) {
        generation = await client.generations.get(generation.id);

        if (generation.state === "completed") {
            completed = true;
        } else if (generation.state === "failed") {
            throw new Error(`Generation failed: ${generation.failure_reason}`);
        } else {
            console.log("Dreaming...");
            await new Promise(r => setTimeout(r, 3000)); // Wait for 3 seconds
        }
    }

    const videoUrl = generation.assets.video;

    const response = await fetch(videoUrl);
    const fileStream = fs.createWriteStream(`${generation.id}.mp4`);
    await new Promise((resolve, reject) => {
        response.body.pipe(fileStream);
        response.body.on('error', reject);
        fileStream.on('finish', resolve);
    });

    console.log(`File downloaded as ${generation.id}.mp4`);
}

generateVideo();
Text to Video
Text to Video Generation Example
JavaScript

const generation = await client.generations.create({
  prompt: "A teddy bear in sunglasses playing electric guitar and dancing"
});
Image to Video
With start frame
JavaScript

const generation = await client.generations.create({
  prompt: "Low-angle shot of a majestic tiger prowling through a snowy landscape, leaving paw prints on the white blanket",
  keyframes: {
    frame0: {
      type: "image",
      url: "https://your-image-url.com/start-frame.jpg"
    }
  }
});
With start frame, loop
JavaScript

const generation = await client.generations.create({
  prompt: "Low-angle shot of a majestic tiger prowling through a snowy landscape, leaving paw prints on the white blanket",
  keyframes: {
    frame0: {
      type: "image",
      url: "https://your-image-url.com/start-frame.jpg"
    }
  },
  loop: true,
});
With end frame, loop
JavaScript

const generation = await client.generations.create({
  prompt: "Low-angle shot of a majestic tiger prowling through a snowy landscape, leaving paw prints on the white blanket",
  keyframes: {
    frame1: {
      type: "image",
      url: "https://your-image-url.com/start-frame.jpg"
    }
  },
  loop: true,
});
Extend video
Extending Video
Extend is currently supported only for generated videos. Please make sure the generation is in completed state before passing it

JavaScript

const generation = await client.generations.create({
  prompt: "A teddy bear in sunglasses playing electric guitar and dancing",
  keyframes: {
    frame0: {
      type: "generation",
      id: "d1968551-6113-4b46-b567-09210c2e79b0"
    }
  }
});
Reverse Extend Video
Extend is currently supported only for generated videos. Please make sure the generation is in completed state before passing it

JavaScript

const generation = await client.generations.create({
  prompt: "A teddy bear in sunglasses playing electric guitar and dancing",
  keyframes: {
    frame1: {
      type: "generation",
      id: "d1968551-6113-4b46-b567-09210c2e79b0"
    }
  }
});
Interpolating Between Two Generated Videos
Interpolate is currently supported only for generated videos. Please make sure the generation is in completed state before passing it

Javascript

const generation = await client.generations.create({
  prompt: "A teddy bear in sunglasses playing electric guitar and dancing",
  keyframes: {
    frame0: {
      type: "generation",
      id: "d312d37a-7ff4-49f2-94f8-218f3fe2a4bd"
    },
    frame1: {
      type: "generation",
      id: "d1968551-6113-4b46-b567-09210c2e79b0"
    }
  }
});
Generations
Get generation with id
Javascript

const generation = await client.generations.get("4fac0ef4-b336-45bf-a5dc-6de436cfbd62");
List all generations
Javascript

const generation = await client.generations.list();
Delete generation
Javascript

const generation = await client.generations.delete("4fac0ef4-b336-45bf-a5dc-6de436cfbd62");
Camera Motions
Get all supported camera motions
Javascript

const cameras = await client.generations.cameraMotion.list();
Docs
https://www.npmjs.com/package/lumaai

Please see API docs for API reference.


How to get a callback when generation has an update
It will get status updates (dreaming/completed/failed)
It will also get the video url as part of it when completed
It's a POST endpoint you can pass, and request body will have the generation object in it
It expected to be called multiple times for a status
If the endpoint returns a status code other than 200, it will be retried max 3 times with 100ms delay and the request has a 5s timeout
example

TypeScript

const generation = await client.generations.create({
  prompt: "A teddy bear in sunglasses playing electric guitar and dancing",
  callback_url: "<your_api_endpoint_here>"
});
