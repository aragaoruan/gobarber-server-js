import { startOfDay, endOfDay, parseISO } from 'date-fns';
import { Op } from 'sequelize';
import * as Yup from 'yup';
import Appointment from '../models/Appointment';
import User from '../models/User';

class ScheduleController {
  async index(req, res) {
    const schema = Yup.object().shape({
      date: Yup.date().required(),
    });

    if (!(await schema.isValid(req.query))) {
      return res.status(400).json({ error: 'Validation fails' });
    }

    const checkUserprovider = await User.findOne({
      where: { id: req.userId, provider: true },
    });

    if (!checkUserprovider) {
      res.status(401).json({ error: 'User is not a provider' });
    }

    const { date } = req.query;
    const parDate = parseISO(date);

    const appointment = await Appointment.findAll({
      where: {
        provider_id: req.userId,
        canceled_at: null,
        date: { [Op.between]: [startOfDay(parDate), endOfDay(parDate)] },
      },
      order: ['date'],
    });

    return res.json(appointment);
  }
}

export default new ScheduleController();
