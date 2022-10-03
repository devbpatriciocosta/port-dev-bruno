import { nameUser } from '../../../modules/user/user.service'

function message(req, res) {
  nameUser()
  res.status(200).json({ teste: 'ok' })
}

export default message
