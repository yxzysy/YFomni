module.exports = {
  run: [
    // Edit this step to customize the git repository to use
    {
      method: "shell.run",
      params: {
        message: [
          "git clone https://github.com/VectorSpaceLab/OmniGen app",
        ]
      }
    },
    // get models
    {
      "method": "fs.download",
      "params": {
        "uri":  ["https://huggingface.co/Shitao/OmniGen-v1/blob/main/README.md"
      ],
        "dir": "app/Shitao/OmniGen-v1/vae"
      }
    },
    // Delete this step if your project does not use torch
    // {
    //   method: "script.start",
    //   params: {
    //     uri: "torch.js",
    //     params: {
    //       venv: "env",                // Edit this to customize the venv folder path
    //       path: "app",                // Edit this to customize the path to start the shell from
    //       xformers: true   // uncomment this line if your project requires xformers
    //     }
    //   }
    // },
    // Edit this step with your custom install commands
    {
      method: "shell.run",
      params: {
        venv: "env",                // Edit this to customize the venv folder path
        path: "app",                // Edit this to customize the path to start the shell from
        message: [
          //"pip install gradio==5.1.0 devicetorch",
          "pip install torch==2.4.0 torchvision==0.19.0 torchaudio==2.4.0 --index-url https://download.pytorch.org/whl/cu121",
          "pip install gradio spaces",
          "pip install diffusers Pillow", //-r ../requirements.txt",
          "pip install xformers"  , //==0.0.28"
          "pip install onnx onnxscript"  //==1.12.0",
          
        ]
      }
    },
    {
      method: "fs.link",
      params: {
        venv: "app/env"
      }
    }
  ]
}
