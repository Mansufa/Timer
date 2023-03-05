import { HistoryContainer, HistoryList, Status } from './styles'

export function History() {
  return (
    <HistoryContainer>
      <h1>Meu histórico</h1>

      <HistoryList>
        <table>
          <thead>
            <tr>
              <th>Tarefa</th>
              <th>Duração</th>
              <th>Início</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Tarefa</td>
              <td>20Minutos</td>
              <td>Há 1 mês</td>
              <Status statusColor="green">Concluído</Status>
            </tr>
            <tr>
              <td>Tarefa</td>
              <td>20Minutos</td>
              <td>Há 1 mês</td>
              <Status statusColor="red">Atrasado</Status>
            </tr>
            <tr>
              <td>Tarefa</td>
              <td>20Minutos</td>
              <td>Há 1 mês</td>
              <Status statusColor="yellow">Em andamento</Status>
            </tr>
            <tr>
              <td>Tarefa</td>
              <td>20Minutos</td>
              <td>Há 1 mês</td>
              <Status statusColor="green">Concluído</Status>
            </tr>
          </tbody>
        </table>
      </HistoryList>
    </HistoryContainer>
  )
}
