import { Dispatcher } from 'flux'

const createDispatcher = (model: object, ...reactions: object[]) => {
  const dispatcher = new Dispatcher()
  reactions.forEach((reaction: any) => {
    dispatcher.register(reaction(model))
  })
  return (action: any) => dispatcher.dispatch(action)
}

export default createDispatcher
