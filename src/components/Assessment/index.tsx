import { Card } from './Card'
import { AssessmentContainer } from './styles'

export function Assessment() {
  return (
    <AssessmentContainer>
      <h2>Avaliações mais recentes</h2>
      <Card />
      <Card />
    </AssessmentContainer>
  )
}
