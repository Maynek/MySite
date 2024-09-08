//--------------------------------
// © Ada Maynek 2024
// This software is released under the MIT License.
//--------------------------------
'use client'
import { useState }  from "react";
import EpisodeBody from '@/components/elements/episode-body'
import ModalDialog from '@/components/elements/modal-dialog'
import WikipediaSummary from '@/components/elements/wikipedia-summary'
import NoteSummary from '@/components/elements/note-summary'

export default function EpisodeContainer({
  novelId,
  episodeId,
}:{
  novelId: string
  episodeId: string
}) {
  const [dialogOpenState, setDialogOpenState] = useState(false)
  const [wikipediaTitleState, setWikipediaTitleState] = useState('')
  const [wikipediaVisible, setWikipediaVisible] =  useState(false)
  const [noteIdState, setNoteIdState] = useState('')
  const [noteVisible, setNoteVisible] =  useState(false)

  //Wikipediaサマリーを開く
  const openWikipedia = (title:string) => {
    setNoteVisible(false);
    setWikipediaVisible(true);
    setWikipediaTitleState(title);
    setDialogOpenState(true);
  };

  //Noteサマリーを開く
  const openNote = (noteId:string) => {
    setWikipediaVisible(false);
    setNoteVisible(true);
    setNoteIdState(noteId);
    setDialogOpenState(true);
  };

  //ダイアログを閉じる
  const closingDialogEvent = () => {
    setDialogOpenState(false);
    setWikipediaVisible(false);
    setWikipediaTitleState('');
    setNoteVisible(false);
    setNoteIdState('');
  }

  return (
    <>
      <EpisodeBody
        novelId={novelId} episodeId={episodeId}
        onClickWikipedia={openWikipedia} onClickNote={openNote}
      />
      <ModalDialog isOpen={dialogOpenState} onClosing={closingDialogEvent}>
        { wikipediaVisible && <WikipediaSummary title={wikipediaTitleState}/> }
        { noteVisible && <NoteSummary novelId={novelId} noteId={noteIdState}/> }          
      </ModalDialog> 
    </>
  );
}