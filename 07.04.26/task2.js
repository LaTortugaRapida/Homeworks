class StorageProvider {
    constructor() {
        if(new.target === StorageProvider) {
            throw new Error("Cannot instantiate abstract class!");
        }
    }

    upload(file){
        throw new Error("Method not implemented!");
    }

    download(filename){
        throw new Error("Method not implemented!");
    }
}

class LocalStorageProvider extends StorageProvider {
    constructor() {
        super();
    }

    upload(file) {
        console.log(`Uploading ${file} file to local storage`);
    }

    download(filename){
        console.log(`downloading ${filename} file from local storage`);
    }
}

class CloudStorageProvider extends StorageProvider {
    constructor() {
        super();
    }

    upload(file) {
        console.log(`Uploading ${file} file to cloud storage`);
    }

    download(filename){
        console.log(`downloadin ${filename} file from cloud storage`);
    }
}

function useStorage(provider) {
    if(typeof provider.upload !== "function") {
        throw new Error("upload method is missing!");
    }

    if(typeof provider.download !== "function") {
        throw new Error("download method is missing!");
    }

    console.log("Storage used successfully!")
}


useStorage(new LocalStorageProvider());
// Works

useStorage({});
// Error: Invalid storage provider