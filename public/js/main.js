function downloadPdf() {
  const pdfUrl = "download/curriculum.pdf";
  const fileName = "curriculum.pdf";
  const downloadLink = document.getElementById("downloadLink");
  downloadLink.href = pdfUrl;
  downloadLink.download = fileName;
  downloadLink.click();
}
const downloadButton = document.getElementById("downloadLink");
downloadButton.addEventListener("click", downloadPdf);
