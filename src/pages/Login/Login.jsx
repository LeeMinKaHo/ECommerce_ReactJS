import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { handleLogin } from '../../features/auth/authSlice'
import { Navigate, useNavigate } from 'react-router-dom';

export const Login = () => {
  const [form,setForm] = useState({
    email:"",
    password:""
  })
  const [wrongState, setWrongState] = useState(false)
  
  const navigate = useNavigate();
  const dispatch = useDispatch()

  function handleSubmitForm(){
    console.log(form)
    // chưa nhập thông tin 
    if(form.email == "" || form.password == "")
    {
      setWrongState(true)
      return
    }
    else {
      // kiểm tra 
      if(form.email == "leminhkhoa@gmail.com" && form.password == "123"){
        setWrongState(false)
        dispatch(handleLogin(form.email))
        navigate("/")
        return
      }
      else {
        setWrongState(true)
        return
      }
    }
  }
  
  return (
    <section class="">
    <div class="pt-20">
      <h2 class="text-3xl font-semibold text-center">Account</h2>
      <div class="container">
        <div class="max-w-xl mx-auto">
          <h2 class="font-semibold text-2xl">Sign in</h2>

          <form action="" class="mt-5">
            <div >
              <input onChange={ (e) => setForm({
                ...form,
                [e.target.id]: e.target.value,
              }) } id="email" type="email" class="mt-2 w-full h-[50px] border border-gray p-5 rounded-lg text-[14px]" placeholder="Email*" />
            {wrongState && <span class="mt-2 inline-block text-xs text-red-600">Email or password invalid</span>}   
            </div>

            <div class="mt-3">
              <input
                onChange={ (e) => setForm({
                  ...form,
                  [e.target.id] : e.target.value
                }) }
                id="password"
                type="password"
                class="mt-2 w-full h-[50px] border border-gray p-5 rounded-lg text-[14px]"
                placeholder="Password*"
              />
            </div>

            <a href="#none" class="text-xs mt-5 mb-5 block hover:underline">Forgot password ?</a>
            <button
              onClick={ () => { handleSubmitForm()  } }
              type="button"
              class="w-full uppercase h-[50px] bg-black text-white font-semibold text-sm px-4 flex-1 rounded-lg hover:bg hover:bg-white border hover:border-black hover:text-black transition-all"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  </section>
  )
}
