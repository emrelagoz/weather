/** @type {import('./$types').PageLoad} */

export async function load({params}:any) {
    console.log(params.id)
    const id = params.id
   
   const response=  await fetch("https://api.openweathermap.org/data/2.5/weather?id="+id+"&appid=a3a4e654769d879711023f26b8d14707")
   let data = await response.json()
   data.name = data.name.replace(" Province", "")
   return {data}

}