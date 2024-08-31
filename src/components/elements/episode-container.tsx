//--------------------------------
// © Ada Maynek 2024
// This software is released under the MIT License.
//--------------------------------
'use client'
import { useState, useRef }  from "react";
import {AiFillCloseCircle} from "react-icons/ai"
import EpisodeBody from '@/components/elements/episode-body'
import WikipediaSummary from '@/components/elements/wikipedia-summary'
import NoteSummary from '@/components/elements/note-summary'

export default function EpisodeContainer({
  novelId,
  episodeId,
}:{
  novelId: string
  episodeId: string
}) {
  const dialogRef = useRef<HTMLDialogElement | null>(null)
  const [wikipediaTitleState, setWikipediaTitleState] = useState('')
  const [wikipediaVisible, setWikipediaVisible] =  useState(false)
  const [noteIdState, setNoteIdState] = useState('')
  const [noteVisible, setNoteVisible] =  useState(false)

  //Wikipediaサマリーを開く
  const openWikipedia = (title:string) => {
    setNoteVisible(false);
    setWikipediaVisible(true);
    setWikipediaTitleState(title);
    dialogRef.current?.showModal();
  };

  //Noteサマリーを開く
  const openNote = (noteId:string) => {
    setWikipediaVisible(false);
    setNoteVisible(true);
    setNoteIdState(noteId);
    dialogRef.current?.showModal();
  };

  //ダイアログを閉じる
  const closeDialog = () => {
    dialogRef.current?.close();
    setWikipediaVisible(false);
    setNoteVisible(false);
    setNoteIdState('');
  }

  return (
    <>
      <EpisodeBody
        novelId={novelId} episodeId={episodeId}
        onClickWikipedia={openWikipedia} onClickNote={openNote}
      />
      <dialog
        ref={dialogRef}
        className={`
          p-2 w-4/5 h-3/5 rounded hidden-scrollbar
          backdrop:bg-gray-900 backdrop:bg-opacity-50 backdrop:backdrop-blur
          sm:mx-auto sm:max-w-xl 
        `}
      >
        <div className="flex flex-col h-full">
          <div className="text-right">
            <button type="button" onClick={closeDialog}>
              <AiFillCloseCircle size={24} color={'#dc2626'}/>
            </button>
          </div>
          { wikipediaVisible && <WikipediaSummary title={wikipediaTitleState}/> }
          { noteVisible && <NoteSummary novelId={novelId} noteId={noteIdState}/> }
        </div>  
      </dialog>
    </>
  );
}