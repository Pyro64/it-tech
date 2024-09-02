import type { ServiceBidMapBase, ServiceOption } from '~/types/service.models'

export const useWatchFind = (newValue: string, map: ServiceBidMapBase): ServiceOption => {
  const selected = map.options.find(e => e.value === newValue)

  if (!selected) {
    throw new Error(`Опция "${newValue}" не найдена`)
  }

  return selected
}
