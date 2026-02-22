---
title: "🛠️ Environment Setup"
sourcePath: "prompts/coding/Roo-cline/MCP-as-a-Language-01_EN.md"
locale: "en"
contentKind: "markdown"
---
> This page is generated from the prompts source tree.
> Source: `prompts/coding/Roo-cline/MCP-as-a-Language-01_EN.md`
> Japanese: [JA](/coding/Roo-cline/MCP-as-a-Language-01)

Please process according to the following instructions:

---

# 🛠️ Environment Setup
- GitHub CLI Configuration
  - Proceed assuming gh command is authenticated

- Repository
  - Base on main branch
  - Commits are basically made to develop branch

# Instructions

- Name the repository ideagram-mcp-server
- Create a public repository on GitHub with this name
- After creation, identify necessary tasks below and register them as issues
- You may create as many issues as needed
- Create an MCP server by referring to the following ideagram documentation
- Use the environment variable IDEOGRAM_API_KEY

## ideogram API Documentation

Generate
POST
https://api.ideogram.ai/generate
Generates images synchronously based on a given prompt and optional parameters.

Images links are available for a limited period of time; if you would like to keep the image, you must download it.

Request
This endpoint expects an object.
image_request
object
Required

Hide 10 properties
prompt
string
Required
The prompt to use to generate the image.

aspect_ratio
enum
Optional
(Cannot be used in conjunction with resolution) The aspect ratio to use for image generation, which determines the image's resolution. Defaults to ASPECT_1_1.


Show 11 enum values
model
enum
Optional
Defaults to V_2
Allowed values:
V_1
V_1_TURBO
V_2
V_2_TURBO
The model used to generate an image or edit one. /generate and /remix supports all model types, however, /edit is only supported for V_2 and V_2_TURBO.

magic_prompt_option
enum
Optional
Allowed values:
AUTO
ON
OFF
Determine if MagicPrompt should be used in generating the request or not

seed
integer
Optional
>=0
<=2147483647
style_type
enum
Optional
The style type to generate with; this is only applicable for models V_2 and above and should not be specified for model versions V_1.


Show 6 enum values
negative_prompt
string
Optional
Description of what to exclude from an image. Descriptions in the prompt take precedence to descriptions in the negative prompt.

num_images
integer
Optional
>=1
<=8
Defaults to 1
resolution
enum
Optional
(For model_version for 2.0 only, cannot be used in conjunction with aspect_ratio) The resolution to use for image generation, represented in width x height. If not specified, defaults to using aspect_ratio.


Show 78 enum values
color_palette
object
Optional
A color palette for generation, must EITHER be specified via one of the presets (name) or explicitly via hexadecimal representations of the color with optional weights (members).


Show 2 variants
Response
This endpoint returns an object.
created
datetime
The time the request was created.

data
list of objects
A list of ImageObjects that contain the generated image(s).


Show 6 properties
