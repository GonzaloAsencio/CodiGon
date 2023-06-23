// eslint-disable-next-line import/no-anonymous-default-export
export default  function (values) {
    const errors = {};

    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (values.fullname === '') {
      errors.fullname = 'El nombre es requerido.';
    }
    if (!values.email) {
      errors.email = 'El email es requerido.';
    } else if (!regex.test(values.email)) {
      errors.email = 'El email no es un formato valido.';
    }
    if (!values.message) {
      errors.message = "El mensaje es requerido.";
    } else if (values.message.length < 4) {
      errors.message = 'El mensaje debe tener más de 4 caracteres.';
    }
    return errors;
  };