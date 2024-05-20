import { useRouter } from "next/router";
import React, { useState } from "react";

function LoginForm() {
  const router = useRouter();
  const [isLogin, setIsLogin] = useState(false);

  const handleLogin = (event) => {
    event.preventDefault();
    setIsLogin(true);
    router.push("/product");
  };

  return (
    <div className="w-[450px] h-auto shadow-xl rounded-2xl px-10 py-5 flex flex-col gap-y-7 bg-white bg-opacity-50">
      <div className="font-semibold text-xl text-center">
        Masuk Sebagai Admin
      </div>
      <form className="w-full h-full flex flex-col gap-y-5" onSubmit={handleLogin}>
        <div className="flex flex-col">
          <label htmlFor="name">Masukkan Nama</label>
          <input type="text" id="name" className="p-3 rounded-md" />
        </div>
        <div className="flex flex-col">
          <label htmlFor="password">Kata Sandi</label>
          <input type="password" id="password" className="p-3 rounded-md" />
        </div>
        <div className="flex justify-center">
          <button type="submit" className="bg-white px-12 p-2 w-4/5 rounded-full">
            Masuk
          </button>
        </div>
      </form>
    </div>
  );
}

export default LoginForm;
