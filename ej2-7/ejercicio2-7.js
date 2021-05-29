function getProcessedData(url) {
    return downloadData(url) // returns a promise
      .catch(e => {
        return downloadFallbackData(url)  // returns a promise
      })
      .then(v => {
        return processDataInWorker(v); // returns a promise
      });
  }



async function getProcessedData(url) {

    try {
        const descargaInformacion= await downloadData(url) // returns a promise
        const procesoDeDatos=await descargaInformacion.then(v => {
            return processDataInWorker(v);
        });
    }
       
    catch(e) {
     
        return downloadFallbackData (url)  // returns a promise
   
      
  } 
}