import type { ServiceOption } from '~/types/service.models'

export const minNumber = (array: ServiceOption[]) => {
  return array.reduce((min, option) =>
    option.price < min.price ? option : min)
}
