const pdfjsLib = require("pdfjs-dist/build/pdf");

export async function PdfData(imageUrl: string): Promise<string> {
  let pdfText = "";

  if (imageUrl) {
    const loadingTask = pdfjsLib.getDocument(imageUrl);
    try {
      const pdf = await loadingTask.promise;
      for (let i = 1; i <= pdf.numPages; i++) {
        const page = await pdf.getPage(i);
        const content = await page.getTextContent();
        pdfText += content.items.map((item: any) => item.str).join(" ");
      }
    } catch (err) {
      console.log("Error while reading PDF: ", err);
    }
  }

  return pdfText;
}
