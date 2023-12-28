export const name_validation = {
  validation: {
    required: {
      value: true,
      message: 'Name is required',
    },
    maxLength: {
      value: 30,
      message: '30 characters max',
    },
  },
}

export const last_name_validation = {
  validation: {
    required: {
      value: true,
      message: 'Family name is required',
    },
    maxLength: {
      value: 60,
      message: '30 characters max',
    },
  },
}

export const country_validation = {
  validation: {
    required: {
      value: true,
      message: 'Country is required',
    }
  },
}


export const address_validation = {
  validation: {
    required: {
      value: true,
      message: 'Address is required',
    },
    maxLength: {
      value: 250,
      message: '250 characters max',
    },
  },
}

export const city_validation = {
  validation: {
    required: {
      value: true,
      message: 'City is required',
    },
    maxLength: {
      value: 250,
      message: '250 characters max',
    },
  },
}

export const desc_validation = {
  name: 'description',
  label: 'description',
  multiline: true,
  id: 'description',
  placeholder: 'write description ...',
  validation: {
    required: {
      value: true,
      message: 'required',
    },
    maxLength: {
      value: 200,
      message: '200 characters max',
    },
  },
}

export const password_validation = {
  name: 'password',
  label: 'password',
  type: 'password',
  id: 'password',
  placeholder: 'type password ...',
  validation: {
    required: {
      value: true,
      message: 'required',
    },
    minLength: {
      value: 6,
      message: 'min 6 characters',
    },
  },
}

export const num_validation = {
  name: 'num',
  label: 'number',
  type: 'number',
  id: 'num',
  placeholder: 'write a random number',
  validation: {
    required: {
      value: true,
      message: 'required',
    },
  },
}

export const email_validation = {
  validation: {
    required: {
      value: true,
      message: 'Email is required',
    },
    pattern: {
      value:
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      message: 'Email is not valid',
    },
  },
}