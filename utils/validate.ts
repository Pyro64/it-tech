import type { ServiceBidSite } from '~/types/service.models'

export const emailValidate = (rule: any, value: string, callback: any) => {
  setTimeout(() => {
    if (value.length === 0) {
      return callback(new Error('Введите поле'))
    }
    if (!emailPattern.test(value)) {
      return callback(new Error('Не валидный email'))
    } else {
      callback()
    }
  }, 300)
}
export const typeValidate = (rule: any, value: ServiceBidSite['type'], callback: any) => {
  setTimeout(() => {
    if (value.value.trim() === '') {
      callback(new Error('Type cannot be an empty string'))
    } else {
      callback()
    }
  }, 300)
}

export const nameValidate = (rule: any, value: string, callback: any) => {
  setTimeout(() => {
    if (value.length === 0) {
      return callback(new Error('Введите поле'))
    }
    if (containsDigits.test(value)) {
      return callback(new Error('Поле не должно содержать цифры'))
    }
    if (value.length <= 1) {
      return callback(new Error('Поле должно быть больше 1 символа'))
    }

    if (value.length > 30) {
      return callback(new Error('Поле должно быть меньше 50 символов'))
    } else {
      callback()
    }
  }, 300)
}

export const passwordValidate = (rule: any, value: string, callback: any) => {
  setTimeout(() => {
    if (value.length === 0) {
      return callback(new Error('Введите пароль'))
    }
    if (value.length < 8) {
      return callback(new Error('Пароль должен быть больше 8 символов'))
    }
    if (value.length > 100) {
      return callback(new Error('Пароль должен быть меньше 100 символов'))
    }
    if (/\s/.test(value)) {
      return callback(new Error('Пароль не может содержать пробелы'))
    }

    if (!/[A-ZА-ЯЁ]/.test(value)) {
      return callback(
        new Error('Пароль должен содержать хотя бы одну заглавную букву'),
      )
    }

    if (!/[a-zа-яё]/.test(value)) {
      return callback(
        new Error('Пароль должен содержать хотя бы одну строчную букву'),
      )
    }

    if (!/[!@#$%^&*()_+\\[\]{}:;<>,.?~\\-]/.test(value)) {
      return callback(new Error('Пароль должен содержать хотя бы один символ'))
    } else {
      callback()
    }
  }, 300)
}

export function confirmPasswordValidate(
  rule: any,
  value: any,
  callback: any,
  password: string,
) {
  if (value === '') {
    callback(new Error('Пароль не может быть пустым'))
  } else if (value !== password) {
    callback(new Error('Пароли не совпадают'))
  } else {
    callback()
  }
}

export const phoneValidate = (rule: any, value: string, callback: any) => {
  setTimeout(() => {
    if (value.length === 0) {
      return callback(new Error('Пожалуйста,введите номер'))
    }
    if (value.length < 16) {
      return callback(new Error('Пожалуйста,введите валидный номер телефона'))
    }
    if (value.length === 16) {
      callback()
    }
  }, 300)
}

export const urlValidate = (rule: any, value: string, callback: any) => {
  setTimeout(() => {
    if (!urlPattern.test(value.trim())) {
      callback(new Error('Невалидный url'))
    } else {
      callback()
    }
  }, 300)
}
