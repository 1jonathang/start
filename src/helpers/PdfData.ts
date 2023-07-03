import { ImageUrlContext } from "@/components/Uploader";
import { useContext, useEffect, useState } from "react";
// import * as pdfjsLib from require('pdfjs-dist/es5/build/pdf');

const pdfjsLib = require("pdfjs-dist/build/pdf");

export function PdfData() {
  const [pdfText, setPdfText] = useState("");
  const context = useContext(ImageUrlContext)!;

  const { imageUrl } = context;

  useEffect(() => {
    if (imageUrl) {
      const loadingTask = pdfjsLib.getDocument(imageUrl);
      loadingTask.promise
        .then(async (pdf: any) => {
          let textContent = "";
          for (let i = 1; i <= pdf.numPages; i++) {
            const page = await pdf.getPage(i);
            const content = await page.getTextContent();
            textContent += content.items.map((item: any) => item.str).join(" ");
          }
          setPdfText(textContent);
        })
        .catch((err: Error) => {
          console.log("Error while reading PDF: ", err);
        });
    }
  }, [imageUrl]);

  return pdfText;
}
