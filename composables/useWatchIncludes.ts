import type { ServiceOption } from '~/types/service.models'

export const useWatchIncludes = (observer: Ref<string[]>, options: ServiceOption[]): ServiceOption[] => {
  return options.filter(option =>
    observer.value.includes(option.value))
}
