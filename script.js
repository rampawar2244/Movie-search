const xhr = new XMLHttpRequest();

const data = null;
  const btn = document.querySelector('#search-btn')
  btn.addEventListener('click',() => {
      const search = document.querySelector('#search').value
   
      let url = "https://api.themoviedb.org/3/search/movie?api_key=114d77d06fcdce8cc7dcb383cabb48bc&query=";
      url = `${url}${search}`
 
// xhr.withCredentials = true

xhr.open("GET", url);

xhr.onreadystatechange = () => {
  if (xhr.status === 200 && xhr.readyState === 4) {
   const response = JSON.parse(xhr.responseText)
   console.log(response)

   let output = ''
  
   
   for(let i=0; i < response.results.length; i++){
    const image = `<img src="https://image.tmdb.org/t/p/w500/${response.results[i].poster_path} " style="height: 300px; width:300px;" />`
       if(response.results != undefined){
        output += ` <b><u>${response.results[i].original_title}</u><b/> (Release Date: ${response.results[i].release_date}) <br/><br/> ${image}<br/><br/> ${response.results[i].overview} <br/><br/>  <hr/> `
       }
     
   }

   const container = document.querySelector('#movies-details')
   container.innerHTML = output
  }
}
xhr.send(data);
})