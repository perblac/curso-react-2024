import useRegisterFormValidate from '../hooks/useRegisterFormValidate';

const RegisterPage = () => {
  const { formData, handleChange, handleSubmit } = useRegisterFormValidate();

  return (
    <div className="h-screen fixed w-screen bg-slate-300 text-gray-800">
      <div className="h-screen flex flex-col justify-start items-center">
        <div className="w-1/3 min-w-fit h-fit min-h-fit mt-10 flex flex-col justify-center items-center rounded-lg shadow shadow-black bg-slate-50">
          <form onSubmit={handleSubmit}>
            <div className="w-full p-4 flex justify-end items-center gap-4">
              <label htmlFor="username">Usuario:</label>
              <input
                className="p-2 rounded-lg border border-slate-300"
                type="text"
                name="username"
                id="username"
                value={formData.username}
                onChange={handleChange}
              />
            </div>
            <div className="w-full mb-2 p-4 flex justify-end items-center gap-4">
              <label htmlFor="password">Contraseña:</label>
              <input
                className="p-2 rounded-lg border border-slate-300"
                type="password"
                name="password"
                id="password"
                value={formData.password}
                onChange={handleChange}
              />
            </div>
            <div className="w-full mb-2 p-4 flex justify-end items-center gap-4">
              <label htmlFor="password">Repita la contraseña:</label>
              <input
                className="p-2 rounded-lg border border-slate-300"
                type="password"
                name="password2"
                id="password2"
                value={formData.password2}
                onChange={handleChange}
              />
            </div>
            <div className="w-full p-4 flex justify-end items-center gap-4">
              <label htmlFor="fullname">Nombre completo:</label>
              <input
                className="p-2 rounded-lg border border-slate-300"
                type="text"
                name="fullname"
                id="fullname"
                value={formData.fullname}
                onChange={handleChange}
              />
            </div>
            <div className="w-full p-4 flex justify-end items-center gap-4">
              <label htmlFor="address">Dirección:</label>
              <input
                className="p-2 rounded-lg border border-slate-300"
                type="text"
                name="address"
                id="address"
                value={formData.address}
                onChange={handleChange}
              />
            </div>
            <div className="w-full p-4 flex justify-end items-center gap-4">
              <label htmlFor="email">Email:</label>
              <input
                className="p-2 rounded-lg border border-slate-300"
                type="email"
                name="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div className="mb-2 p-4 flex justify-center items-center cursor-pointer border border-slate-300 dark:border-slate-800 rounded-lg shadow shadow-black dark:shadow-slate-100 bg-slate-200 hover:bg-slate-300 dark:bg-slate-900 dark:hover:bg-slate-800">
              <input
                className="cursor-pointer text-xl font-semibold uppercase text-slate-900 dark:text-slate-100"
                type="submit"
                value="entrar"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
