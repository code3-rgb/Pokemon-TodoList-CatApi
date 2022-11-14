import React from 'react'
import { createClient } from '@supabase/supabase-js'


export const Upload = () => {


    const supabaseUrl = 'https://twijkoqpisagkaxzbfyb.supabase.co'
    const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InR3aWprb3FwaXNhZ2theHpiZnliIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY2NjQzOTY1MCwiZXhwIjoxOTgyMDE1NjUwfQ.pF62uxsKr9NgZ71Z_MVCecwjoFw0ygihQO0B4_Jd6vY"
     const supabase = createClient(supabaseUrl, supabaseKey)


    const upload = async (e)=>{
        const { data, error } = await supabase
        .storage
        .from('products')
        .upload(e.target.files[0].name, e.target.files[0], {
          cacheControl: '3600',
          upsert: false
        })
        if(error) {
            console.log(error.message)
        }
        if(data) {
            console.log('Data has been uploaded')
        }


    }

  return (
    <div>

        <input type='file' onChange={(e)=> upload(e)} />


    </div>
  )
}
