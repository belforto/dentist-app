import React, { useState, useEffect } from "react";
import { fabric } from "fabric";

const Editor: any = () => {
  const [canvas, setCanvas] = useState<any>("");
  useEffect(() => {
    setCanvas(initCanvas());
  }, []);

  const initCanvas = () =>
    new fabric.Canvas("canvas", {
      height: 500,
      width: 1000,
      backgroundColor: "black",
      preserveObjectStacking:true
    });

    //  var imgInstance = new fabric.Image.fromURL("/xray.jpg", (img: any) => {
    //   if (img.getElement() === undefined) {
    //     console.log("Failed to load image!");
    //     return;
    //   }
    //   // do something on success
    //   img.scale(1).set("flipX", false);
    //   canvi.add(img);
    //   canvi.renderAll();
    // });

  // const addRect = (canvi: any) => {
  //   const rect = new fabric.Rect({
  //     height: 280,
  //     width: 200,
  //     fill: "yellow",
  //   });
  //   canvi.add(rect);
  //   canvi.renderAll();
  // };
  const addText = (canvi: any) => {
    const   myText = new fabric.IText('18 17 16 15 14 13 12 11 21 22 23 24 25 26 27 28', {
      underline: false,
      overline: false
    });
    canvi.add(myText);
    canvi.renderAll();
  };
  const addImg = (canvi: any) => {
      fabric.Image.fromURL("/implant.png", (img: any) => {
      if (img.getElement() === undefined) {
        console.log("Failed to load image!");
        return;
      }
      // do something on success
      img.scale(0.99).set("flipX", true);
      canvi.add(img);
      canvi.renderAll();
    });
  };
  const addBgrPanoramicXRay = (canvi: any) => {
     fabric.Image.fromURL("/xray.jpg", (img: any) => {
      if (img.getElement() === undefined) {
        console.log("Failed to load image!");
        return;
      }
      // do something on success
      img.scale(1).set("flipX", false);
      canvi.add(img);
      canvi.renderAll();
    });
  };

  const downloadImg =()=>{
    var canvas:any = document.getElementById("canvas");
  var url = canvas?.toDataURL("image/png");
  var link = document.createElement('a');
  link.download = 'filename.png';
  link.href = url;
  link.click();
  }
  return (
    <div>
      <h1>Backend sustav za kreiranje ponuda</h1>
      <h6>I izračun cijene</h6>
      {/* <button onClick={() => addRect(canvas)}>Rectangle</button> */}
      <button onClick={() => addImg(canvas)}>Add Implant</button>
      <button onClick={() => addBgrPanoramicXRay(canvas)}>Add Panoramic X ray</button>
      <button onClick={() => addText(canvas)}>Add Numbering</button>
      <br />
      <br />
      <canvas id="canvas" />
      <br />
      <button onClick={() => downloadImg()}>Download Img</button>
    </div>
  );
};

export default Editor;
