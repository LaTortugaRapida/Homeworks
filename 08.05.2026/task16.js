const downloadFile = () => new Promise((resolve) => {
    console.log("Downloading file");
    resolve("image.png");
});

const resizeImage = (file) => new Promise((resolve) => {
    console.log(`Resizing ${file}`);
    resolve("resizedImage.png");
})

const uploadFile = (processedFile) => new Promise((resolve) => {
    console.log(`Uploading ${processedFile}`);
    resolve("Upload Complete!");
});

downloadFile()
    .then((file) => resizeImage(file))
    .then((processedFile) => uploadFile(processedFile))
    .then((status) => console.log(status))
    .catch((err) => console.error("Fail:", err));