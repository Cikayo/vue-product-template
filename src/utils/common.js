import { Message } from 'element-ui';

export function handleShowMessage(message, type = 'success') {
  Message({
    type,
    message
  })
}