function alteraCorDeFundoDoItem(event) {
  const items = document.querySelectorAll('li')

  for (let index = 0; index < items.length; index++) {
    const itemAtual = items[index]
    itemAtual.style.backgroundColor = ''
  }

  const item = event.target
  item.style.backgroundColor = 'rgb(128, 128, 128)'
}

function riscaItemSelecionado(event) {
  const item = event.target
  const classes = item.classList
  if (classes.length === 0) {
    item.classList.add('completed')
    item.style.textDecoration = 'line-through solid rgb(0, 0, 0)'
  } else {
    item.classList.remove('completed')
    item.style.textDecoration = ''
  }
}

function adicionaTarefa() {
  const input = document.getElementById('texto-tarefa')
  const listaTarefas = document.getElementById('lista-tarefas')
  const li = document.createElement('li')
  li.addEventListener('click', alteraCorDeFundoDoItem)
  li.addEventListener('dblclick', riscaItemSelecionado)
  li.textContent = input.value
  listaTarefas.appendChild(li)
  input.value = ''
}

const criarTarefa = document.getElementById('criar-tarefa')
criarTarefa.addEventListener('click', adicionaTarefa)

function apagaFinalizados() {
  const ol = document.getElementById('lista-tarefas')
  const lis = document.querySelectorAll('li')
  for (let index = 0; index < lis.length; index++) {
    const item = lis[index]
    const classes = item.classList
    if (classes.length > 0) {
      ol.removeChild(item)
    }
  }
}
const removerFinalizados = document.getElementById('remover-finalizados')
removerFinalizados.addEventListener('click', apagaFinalizados)

function limparLista() {
  const ol = document.getElementById('lista-tarefas')
  ol.innerHTML = ''
}
const apagaTudo = document.getElementById('apaga-tudo')
apagaTudo.addEventListener('click', limparLista)
