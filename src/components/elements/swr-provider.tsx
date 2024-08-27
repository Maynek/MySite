//--------------------------------
// © Ada Maynek 2024
// This software is released under the MIT License.
//--------------------------------
'use client'
import type { ReactNode } from 'react';
import { SWRConfig } from "swr"

export const SWRProvider = ({ children }:{children : ReactNode}) => {
  return(
    <SWRConfig
      value={{
        revalidateOnFocus : false,
        shouldRetryOnError: false,
        fetcher: (...args:Parameters<typeof fetch>) => fetch(...args).then(res => res.json())
      }}>
      {children}
    </SWRConfig>
  ) 
}