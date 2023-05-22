import React, { useRef } from 'react'
import './App.css'
// import firebase from './firebase'
import {firestore} from './firebase'
import {addDoc, collection} from '@firebase/firestore'
export default function CreateNote() {
    const noteRef = useRef()
   const ref = collection(firestore,"note");
    const handleSave = async (e) =>{
        e.preventDefault();
        console.log(noteRef.current.value)

        let data ={
          note:noteRef.current.value
        }
        try{
          addDoc(ref,data);
        }catch(e){
          console.log(e)
        }

        noteRef.current.value = ''

    }
  return (
    <div className='App-header'>
      <h3>Create Note</h3>
      <form onSubmit={handleSave}>
        <input type='text' ref={noteRef}></input>
        <br/>
        <button type='submit'>Create</button>
      </form>
    </div>
  )
}
