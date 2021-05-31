function getProcessedData(url) {
    return downloadData(url) // returns a promise
      .catch(e => {
        return downloadFallbackData(url)  // returns a promise
      })
      .then(v => {
        return processDataInWorker(v); // returns a promise
      });
  }

  // segunda version
  async function getProcessedData(url) {
    try{
      return downloadData(url) // returns a promise
        .catch(e => {
          return downloadFallbackData(url)  // returns a promise
        })
        .then(v => {
          return processDataInWorker(v); // returns a promise
        });}
    catch(e){
      console.error(e.message);

    }     
  }


// primera version
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