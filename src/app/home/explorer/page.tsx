'use client'

import {
  Container,
  ExplorerContainer,
  SearchForm,
  ExplorerNavegation,
  SearchContainer,
} from '@/styles/pages/explorer'
import { MagnifyingGlass } from '@phosphor-icons/react'

export default function Explorer() {
  return (
    <Container>
      <ExplorerContainer>
        <SearchContainer>
          <h1>
            <MagnifyingGlass size={32} weight="bold" />
            Explorar
          </h1>

          <SearchForm>
            <label>
              <input placeholder="Buscar livro ou autor" />

              <MagnifyingGlass size={20} weight="bold" />
            </label>
          </SearchForm>
        </SearchContainer>

        <ExplorerNavegation>
          <button>Tudo</button>
        </ExplorerNavegation>
      </ExplorerContainer>
    </Container>
  )
}
