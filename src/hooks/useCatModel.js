// import * as tf from "@tensorflow/tfjs";
// import { useState, useEffect } from "react";

// const pretrainedModel = {
//   url:
//     "../model/",
//   layer: "conv_pw_13_relu",
// };

// export default function useCatModel() {
//   const [state, setState] = useState([]);

//   useEffect(() => {
//     async function loadModel() {
//       const mobilenet = await tf.loadLayersModel(pretrainedModel.url);
//       const layer = mobilenet.getLayer(pretrainedModel.layer);
//       const pretrained = await tf.model({
//         inputs: mobilenet.inputs,
//         outputs: layer.output,
//       });

//       const model = await tf.loadLayersModel("./model/*.json");

//       setState([model, pretrained]);
//     }
//     loadModel();
//   });

//   return state;
// }
