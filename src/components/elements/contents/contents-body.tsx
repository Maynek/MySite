//--------------------------------
// © Ada Maynek 2024
// This software is released under the MIT License.
//--------------------------------
'use client'
import { useState }  from "react";
import parse, {DOMNode, domToReact} from 'html-react-parser';
import {SWRProvider} from '@/components/elements/swr-provider'
import ModalDialog from '@/components/elements/modal-dialog'
import WikipediaSummary from '@/components/elements/wikipedia-summary'
import NoteSummary from '@/components/elements/note/note-summary'

export default function ContentsBody({
  body,
  novelId
} : {
  body: string
  novelId: string
}) {
  const [dialogOpenState, setDialogOpenState] = useState(false)
  const [wikipediaTitleState, setWikipediaTitleState] = useState('')
  const [wikipediaVisible, setWikipediaVisible] =  useState(false)
  const [noteIdState, setNoteIdState] = useState('')
  const [noteVisible, setNoteVisible] =  useState(false)

  const clickWikipedia = ({title}:{title:string}) => {
    setNoteVisible(false);
    setWikipediaVisible(true);
    setWikipediaTitleState(title);
    setDialogOpenState(true);
  }

  const clickNote = ({noteId}:{noteId:string}) => {
    setWikipediaVisible(false);
    setNoteVisible(true);
    setNoteIdState(noteId);
    setDialogOpenState(true);
  }

    //ダイアログを閉じる
  const closingDialogEvent = () => {
    setDialogOpenState(false);
    setWikipediaVisible(false);
    setWikipediaTitleState('');
    setNoteVisible(false);
    setNoteIdState('');
  }

  const replace = (node:DOMNode) =>{
    
    if (node && node.type === 'tag') {
      if (node.name === 'nv-link') {
        const url = node.attribs.url;
        const children = node.children as DOMNode[];
        return (
          <a
            href={url}
            target={'_blank'}
            className={`
              text-sky-600 no-underline
              hover:text-red-600 hover:underline hover:cursor-help
            `}
          >
            {domToReact(children)}
          </a>
        );
      } else if (node.name === 'nv-wiki') {
        const title = node.attribs.title;
        const children = node.children as DOMNode[];
        return (
          <span
            className={`
              text-sky-600 no-underline
              hover:text-red-600 hover:underline hover:cursor-help
            `}
            onClick={() => clickWikipedia({title})}
          >
            {domToReact(children)}
          </span>
        );
      } else if (node.name === 'nv-note') {
        const noteId = node.attribs.id;
        const children = node.children as DOMNode[];
        return (
          <span
            className={`
              text-sky-600 no-underline
              hover:text-red-600 hover:underline hover:cursor-help
            `}
            onClick={() => clickNote({noteId})}
          >
            {domToReact(children)}
          </span>
        );
      }
    }
  }

  return (
    <SWRProvider>
      {parse(body, {replace})}
      <ModalDialog isOpen={dialogOpenState} onClosing={closingDialogEvent}>
        { wikipediaVisible && <WikipediaSummary title={wikipediaTitleState}/> }
        { noteVisible && <NoteSummary novelId={novelId} noteId={noteIdState}/> }          
      </ModalDialog>
    </SWRProvider>
  );
}
 