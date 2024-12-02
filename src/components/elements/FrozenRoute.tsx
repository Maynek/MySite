'use client'

import { useContext, useRef } from 'react'
import { ReactNode } from 'react'
import { LayoutRouterContext } from 'next/dist/shared/lib/app-router-context.shared-runtime'

interface Props {
  children: ReactNode
}

const FrozenRoute = ({ children }: Props) => {
  const context = useContext(LayoutRouterContext)
  const frozen = useRef(context).current

  return <LayoutRouterContext.Provider value={frozen}>{children}</LayoutRouterContext.Provider>
}

export default FrozenRoute