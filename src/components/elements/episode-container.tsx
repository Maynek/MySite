//--------------------------------
// © Ada Maynek 2024
// This software is released under the MIT License.
//--------------------------------
'use client'
import { useState, useRef }  from "react";
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
  const closeNote = () => {
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
        { wikipediaVisible && <WikipediaSummary title={wikipediaTitleState} onClose={closeNote}/> }
        { noteVisible && <NoteSummary novelId={novelId} noteId={noteIdState} onClose={closeNote}/> }
      </dialog>
    </>
  );
}