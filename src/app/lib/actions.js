'use server'


export const DataPost = async (formData)=>{
    const res = await fetch('http://localhost:8000/destination', {
        method: 'POST',
        headers:{
            'content-type':'application/json'
        },
        body: JSON.stringify(Destination)
    })
    const data = await res.json()
    console.log("data after post",data)
}

