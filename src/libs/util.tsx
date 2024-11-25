//--------------------------------
// © Ada Maynek 2024
// This software is released under the MIT License.
//--------------------------------
const BASE_INDEX_SITE_PATH:string     = '/novel/[novelId]';
const BASE_EPISODE_SITE_PATH:string   = '/novel/[novelId]/[episodeId]';
const BASE_GLOSSARY_SITE_PATH:string  = '/novel/[novelId]/note';
const BASE_NOTE_SITE_PATH:string      = '/novel/[novelId]/note/[noteId]';

const BASE_DATA_URL = process.env.NEXT_PUBLIC_DATA_URL;
const BASE_INDEX_DATA_PATH: string    = BASE_DATA_URL + '[novelId]/_index.json';
const BASE_EPISODE_DATA_PATH: string  = BASE_DATA_URL + '[novelId]/[episodeId].json';
const BASE_GLOSSARY_DATA_PATH: string = BASE_DATA_URL + '[novelId]/note/_glossary.json';
const BASE_NOTE_DATA_PATH: string     = BASE_DATA_URL + '[novelId]/note/[noteId].json';
const BASE_INDEXES_PATH: string       = BASE_DATA_URL + 'indexes.json';
const BASE_EPISODES_PATH: string      = BASE_DATA_URL + 'episodes.json';
const BASE_GLOSSARIES_PATH: string    = BASE_DATA_URL + 'glossaries.json';
const BASE_NOTES_PATH: string         = BASE_DATA_URL + 'notes.json';

export type episode = {
  id:string;
  title: string;
}

export type chapter = {
  id: string;
  title: string;
  episodes: Array<episode>;
}

export const getNovelIdList = () => {
  return [
    {novelId: 'progstars01'},
  ];
}

export const getIndexSitePath = (
  novelId:string,
) => {
  return BASE_INDEX_SITE_PATH.replace('[novelId]', novelId);
};

export const getEpisodeSitePath = (
  novelId:string,
  episodeId:string
) => {
  return BASE_EPISODE_SITE_PATH.replace('[novelId]', novelId).replace('[episodeId]', episodeId);
};

export const getGlossarySitePath = (
  novelId:string,
) => {
  return BASE_GLOSSARY_SITE_PATH.replace('[novelId]', novelId);
};

export const getNoteSitePath = (
    novelId:string,
    noteId:string
  ) => {
    return BASE_NOTE_SITE_PATH.replace('[novelId]', novelId).replace('[noteId]', noteId);
  };

export const getIndexDataPath = (
  novelId:string
) => {
  return BASE_INDEX_DATA_PATH.replace('[novelId]', novelId);
};

export const getEpisodeDataPath = (
  novelId:string,
  episodeId:string
) => {
  return BASE_EPISODE_DATA_PATH.replace('[novelId]', novelId).replace('[episodeId]', episodeId);
};

export const getGlossaryDataPath = (
  novelId:string,
) => {
  return BASE_GLOSSARY_DATA_PATH.replace('[novelId]', novelId);
};

export const getNoteDataPath = (
  novelId:string,
  noteId:string
) => {
  return BASE_NOTE_DATA_PATH.replace('[novelId]', novelId).replace('[noteId]', noteId);
};

export const getIndexesPath = () => {
  return BASE_INDEXES_PATH;
}

export const getEpisodesPath = () => {
  return BASE_EPISODES_PATH;
}

export const getGlossariesPath = () => {
  return BASE_GLOSSARIES_PATH;
}

export const getNotesPath = () => {
  return BASE_NOTES_PATH;
}

export async function getIndexData(novelId:string) {
  const path = getIndexDataPath(novelId);
  const data = await fetch(path).then((res) => res.json());
  return data;
}

export async function getIndexes() {
  const path = getIndexesPath();
  const data = await fetch(path).then((res) => res.json());
  return data;
}

export async function getEpisodes() {
  const path = getEpisodesPath();
  const data = await fetch(path).then((res) => res.json());
  return data;
}

export async function getGlossaries() {
  const path = getGlossariesPath();
  const data = await fetch(path).then((res) => res.json());
  return data;
}

export async function getNotes() {
  const path = getNotesPath();
  const data = await fetch(path).then((res) => res.json());
  return data;
}
