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
  try{
    const retorno= await downloadData(url) // returns a promise
    .catch(e => {
      return downloadFallbackData(url)  // returns a promise
    })
    .then(v => {
      return processDataInWorker(v); // returns a promise
    });
    return retorno;
  }
  catch(e){
    console.log(e.message);
  }
}








/* //  con video
  async function getProcessedData(url){
    try{
      const descaga=await downloadData(url);
      const procesoDeDatos=await rocessDataInWorker();
      return procesoDeDatos;
    } catch(e) {
      return downloadFallbackData(url) ;
    }
  }
  async function retornarError(url){
    try{
      const error= await downloadFallbackData(url);
    }catch(e){
      console.log(e.message)
    }
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
} */