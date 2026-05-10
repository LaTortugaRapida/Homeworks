let id = setTimeout(() => {console.log("Executed")}, 5000);
setTimeout(() => {clearTimeout(id)}, 2000);